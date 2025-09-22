import { Flex, Box, Text, Separator, Link, Switch, For, Avatar } from '@chakra-ui/react'
import logo from '@/assets/logos/Logo.svg'
import arrow from '@/assets/arrow.svg'
import england from '@/assets/England.svg'
import Image from 'next/image'
import { mainSideNavItems } from '@/constants/Nav.constant'
import { Fragment } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  const sideNav = mainSideNavItems()
  return (
    <Box h={'full'} overflowY={'auto'} scrollbar={'hidden'} pt={'12px'} pb={'30px'}>
      <Flex paddingLeft={'40px'} justify={'space-between'} align={'center'}>
        <Box>
          <Image src={logo} alt='logo' />
        </Box>
        <button>
          <Flex justify={'center'} align={'end'} w={30} h={30} pb={'5px'} rounded={6} bg={'var(--mkv-gray-light)'}>
            <Image src={arrow} height={13} alt='logo' />
          </Flex>
        </button>
      </Flex>

      <Flex flexDir={'column'} as="ul" mt={'52px'} px='4px'>
        <For each={sideNav}>
          {({ key, name, icon, url, subItems }) =>
            subItems ? (
              <Fragment key={key}>


                <Box as="li" display={"flex"} cursor={'pointer'} px='30px' py='14px' gap={'14px'} rounded={'10px'} alignItems={'center'} role='group' _hover={{
                  bg: 'var(--mkv-teal-light)'
                }}>
                  <Box>
                    {icon}
                  </Box>
                  <Text fontSize={'sm'} fontWeight={600} color={'var(--mkv-gray-dark)'} _groupHover={{
                    color: 'var(--mkv-teal)'
                  }}>{name}</Text>
                  <Box ml="auto">
                    <IoIosArrowDown width={28} color='var(--mkv-gray-dark)' />
                  </Box>
                </Box>


                <Flex flexDir={'column'} as="ul" px='30px' role='group'>
                  <For each={subItems}>
                    {item => (
                      <Link key={key + item.name} px='32px' py='14px' rounded={'10px'} href={item.url} textDecor={'none'} _hover={{
                        bg: 'var(--mkv-teal-light)'
                      }}>
                        <Text fontSize={'sm'} fontWeight={600} color={'var(--mkv-gray-dark)'} _groupHover={{
                          color: 'var(--mkv-teal)'
                        }}>{item.name}</Text>
                      </Link>
                    )}
                  </For>
                </Flex>

                
              </Fragment>
            )
              : <Link role='group'  px='32px' py='14px' key={key} textDecor={'none'} href={url} rounded={'10px'} _groupHover={{
                bg: 'var(--mkv-teal-light)'
              }}>
                <Box as="li" display={"flex"} gap={'14px'} alignItems={'center'}>
                  <Box>
                    {icon}
                  </Box>
                  <Text fontSize={'sm'} fontWeight={600} color={'var(--mkv-gray-dark)'} _groupHover={{
                    color: 'var(--mkv-teal)'
                  }}>{name}</Text>
                </Box>
              </Link>
          }
        </For>
      </Flex>

      <Box mt={'142px'} mx={'30px'} py={'10px'} px={'14px'} border={'1px'} borderColor={'var(--mkv-blue-light)'} borderStyle={'inset'} rounded={'10px'} bg={'var(--mkv-gray-light)'}>
        <Flex px={'10px'} py={'5px'} mb='10px' gap='10px' align={'center'} rounded={'6px'} bg={'var(--mkv-white)'}>
          <Box w={'20px'} h={'20px'} overflow={'hidden'} rounded={'full'} border={'1px'} borderColor={'var(--mkv-blue-light)'} borderStyle={'inset'}>
            <Image src={england} alt='England image' />
          </Box>
          <Text fontSize={'xs'}>English</Text>
          <Box ml="auto">
            <IoIosArrowDown width={24} color='var(--mkv-gray-dark)' />
          </Box>
        </Flex>
        <Flex px={'10px'} py={'5px'} align={'center'} rounded={'6px'} bg={'var(--mkv-white)'}>
          <Text fontSize={'xs'}>Dark Mode</Text>
          <Switch.Root size={'lg'} ml={'auto'}>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label />
          </Switch.Root>
        </Flex>
      </Box>
    </Box>
  )
}

export default Sidebar