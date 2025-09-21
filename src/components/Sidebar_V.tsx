'use client';
import React, { useState } from 'react';
import {
   Box,
   VStack,
   HStack,
   Text,
   Icon,
   Flex,
   Separator,
   Collapsible, CollapsibleContent, CollapsibleTrigger
} from '@chakra-ui/react';

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useColorModeValue } from './ui/color-mode';
import { FaBell } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";

const Sidebar_V = () => {
   const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({ myDepartment: true });
   const bgColor = useColorModeValue('white', 'gray.800');
   const borderColor = useColorModeValue('gray.200', 'gray.600');
   const hoverBg = useColorModeValue('gray.50', 'gray.700');
   const activeBg = useColorModeValue('teal.50', 'teal.900');
   const activeColor = useColorModeValue('teal.600', 'teal.200');

   const toggleExpanded = (itemKey: string) => {
      setExpandedItems(prev => ({
         ...prev,
         [itemKey]: !prev[itemKey]
      }));
   };

   const mainNavItems = [
      {
         key: 'home',
         name: 'Home',
         icon: '🏠',
         hasSubItems: false
      },
      {
         key: 'mkvanbinnen',
         name: 'MKVanBinnen',
         icon: '📋',
         hasSubItems: false
      },
      {
         key: 'documentManagement',
         name: 'Document Management',
         icon: '📄',
         hasSubItems: false
      },
      {
         key: 'patientInformation',
         name: 'Patient Information',
         icon: '👤',
         hasSubItems: false
      },
      {
         key: 'agenda',
         name: 'Agenda',
         icon: '📅',
         hasSubItems: false
      },
      {
         key: 'myDepartment',
         name: 'My Department',
         icon: '🏢',
         hasSubItems: true,
         subItems: [
            { name: 'News', active: false },
            { name: 'Members', active: false },
            { name: 'To-Do', active: true },
            { name: 'Form Task', active: false },
            { name: 'Agenda', active: false },
            { name: 'Follow up system', active: false },
            { name: 'Group Settings', active: false, hasDropdown: true },
         ]
      },
   ];

   const bottomNavItems = [
      { name: 'Phone numbers', icon: FaPhone },
      { name: 'My to do Protocols', icon: CiViewTimeline },
      { name: 'My Notifications', icon: FaBell },
      { name: 'Knowledge Base', icon: '📚' },
      { name: 'Super Admin', icon: '⚡' },
      { name: 'Admin', icon: '👤', hasDropdown: true, subItems: ['Agenda', 'News', 'Poll', 'Department Rules', 'Follow up system'] },
   ];

   const [adminExpanded, setAdminExpanded] = useState(false);

   return (
      <Box
         w="280px"
         h="100vh"
         bg={bgColor}
         borderRight="1px"
         borderColor={borderColor}
         p={4}
         overflowY="auto"
      >
         {/* Logo */}
         <HStack mb={8} spaceX={1} spaceY={1}>
            <Box color="teal.500" fontWeight="bold" fontSize="xl">
               mkv
            </Box>
            <Text fontSize="xs" color="gray.500" mt={1}>
               Healthcare Vision
            </Text>
         </HStack>

         {/* Main Navigation */}
         <VStack align="stretch" spaceX={0} spaceY={0} mb={6}>
            {mainNavItems.map((item) => (
               <Box key={item.key}>
                  <HStack
                     p={3}
                     borderRadius="md"
                     _hover={{ bg: hoverBg }}
                     cursor="pointer"
                     justify="space-between"
                     onClick={() => item.hasSubItems && toggleExpanded(item.key)}
                  >
                     <HStack spaceX={3} spaceY={3}>
                        <Text fontSize="16px">{item.icon}</Text>
                        <Text fontSize="sm" fontWeight="medium">{item.name}</Text>
                     </HStack>
                     {item.hasSubItems && (
                        <Icon
                           as={expandedItems[item.key] ? MdKeyboardArrowDown : MdKeyboardArrowRight }
                           boxSize={4}
                           color="gray.400"
                        />
                     )}
                  </HStack>

                  {item.hasSubItems && (
                     <Collapsible.Root open={expandedItems[item.key]} onOpenChange={() => toggleExpanded(item.key)}>
                        <CollapsibleContent>
                           <VStack align="stretch" ml={6} mt={1}>
                              {item.subItems?.map((subItem, index) => (
                                 <HStack
                                    key={index}
                                    p={2}
                                    pl={4}
                                    borderRadius="md"
                                    _hover={{ bg: hoverBg }}
                                    cursor="pointer"
                                    bg={subItem.active ? activeBg : "transparent"}
                                    color={subItem.active ? activeColor : "gray.600"}
                                    fontWeight={subItem.active ? "semibold" : "normal"}
                                    fontSize="sm"
                                    justify="space-between"
                                 >
                                    <Text>{subItem.name}</Text>
                                    {subItem.hasDropdown && (
                                       <Icon as={MdKeyboardArrowRight} boxSize={3} color="gray.400" />
                                    )}
                                 </HStack>
                              ))}
                           </VStack>
                        </CollapsibleContent>
                     </Collapsible.Root>
                  )}

               </Box>
            ))}
         </VStack>

         <Separator my={4} />

         {/* Bottom Navigation */}
         <VStack align="stretch" spaceX={0} spaceY={0}>
            {bottomNavItems.map((item, index) => (
               <Box key={index}>
                  <HStack
                     p={3}
                     borderRadius="md"
                     _hover={{ bg: hoverBg }}
                     cursor="pointer"
                     justify="space-between"
                     onClick={() => item.hasDropdown && setAdminExpanded(!adminExpanded)}
                  >
                     <HStack spaceX={3} spaceY={3}>
                        {typeof item.icon === 'string' ? (
                           <Text fontSize="16px">{item.icon}</Text>
                        ) : (
                           <Icon as={item.icon} boxSize={4} color="gray.500" />
                        )}
                        <Text fontSize="sm" color="gray.600">{item.name}</Text>
                     </HStack>
                     {item.hasDropdown && (
                        <Icon
                           as={adminExpanded ? MdKeyboardArrowDown : MdKeyboardArrowRight }
                           boxSize={4}
                           color="gray.400"
                        />
                     )}
                  </HStack>

                  {item.hasDropdown && item.subItems && (
                     <Collapsible.Root open={adminExpanded} onOpenChange={({ open }) => setAdminExpanded(open)}>
                        <CollapsibleContent>
                           <VStack align="stretch" spaceX={0} spaceY={0} ml={6} mt={1}>
                              {item.subItems.map((subItem, subIndex) => (
                                 <Text
                                    key={subIndex}
                                    p={2}
                                    pl={4}
                                    fontSize="sm"
                                    color="gray.500"
                                    cursor="pointer"
                                    borderRadius="md"
                                    _hover={{ bg: hoverBg, color: 'gray.700' }}
                                 >
                                    {subItem}
                                 </Text>
                              ))}
                           </VStack>
                        </CollapsibleContent>
                     </Collapsible.Root>

                  )}
               </Box>
            ))}
         </VStack>

         {/* Language Selector at Bottom */}
         <Box mt={8} pt={4} borderTop="1px" borderColor={borderColor}>
            <HStack spaceX={2} spaceY={2} p={2} cursor="pointer" _hover={{ bg: hoverBg }} borderRadius="md">
               <Box w={4} h={3} bg="red.500" borderRadius="sm" />
               <Text fontSize="sm" color="gray.600">English</Text>
               <Icon as={MdKeyboardArrowDown} boxSize={4} color="gray.400" ml="auto" />
            </HStack>

            <HStack mt={2} spaceX={2} spaceY={2} align="center">
               <Text fontSize="sm" color="gray.500">Dark mode</Text>
               <Box
                  w={10}
                  h={5}
                  bg="gray.200"
                  borderRadius="full"
                  p={0.5}
                  cursor="pointer"
                  _hover={{ bg: "gray.300" }}
               >
                  <Box w={4} h={4} bg="white" borderRadius="full" />
               </Box>
            </HStack>
         </Box>
      </Box>
   );
};

export default Sidebar_V;