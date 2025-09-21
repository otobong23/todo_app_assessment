import { Box, Flex, Text, Button, Input } from "@chakra-ui/react"
import {
  HiOutlineSearch,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlus,
  HiOutlineDownload,
  HiOutlineFilter,
  HiOutlineCalendar,
  HiOutlineViewGrid,
  HiOutlineDotsHorizontal,
} from "react-icons/hi"

const sidebarItems = [
  { icon: "🏠", label: "Home", active: false },
  { icon: "👥", label: "MKVanBinnen", active: false },
  { icon: "📄", label: "Document Management", active: false },
  { icon: "ℹ️", label: "Patient Information", active: false },
  { icon: "📅", label: "Agenda", active: false },
  { icon: "🏢", label: "My Department", active: false },
]

const subItems = [
  { label: "News", active: false },
  { label: "Members", active: false },
  { label: "To - Do", active: true },
  { label: "Form Task", active: false },
  { label: "Agenda", active: false },
  { label: "Follow up system", active: false },
  { label: "Group Settings", active: false, hasDropdown: true },
]

const bottomItems = [
  { icon: "📞", label: "Phone numbers", active: false },
  { icon: "📋", label: "My to do Protocols", active: false },
  { icon: "🔔", label: "My Notifications", active: false },
  { icon: "📚", label: "Knowledge Base", active: false },
  { icon: "👑", label: "Super Admin", active: false },
  { icon: "⚙️", label: "Admin", active: false, hasDropdown: true },
];

const tasks = [
  {
    name: "MKV Intranet V2",
    date: "04/06/2024 - 16/06/2014",
    assignee: [{ name: "User", avatar: "/abstract-geometric-shapes.png" }],
    priority: "Medium",
    priorityColor: "brand.300",
  },
  {
    name: "Design System",
    date: "23/06/2024 - 24/06/2024",
    assignee: [{ name: "User", avatar: "/abstract-geometric-shapes.png" }],
    priority: "Important",
    priorityColor: "yellow.500",
  },
  {
    name: "Medical Appointment",
    date: "16/06/2024 - 18/06/2024",
    assignee: [
      { name: "User 1", avatar: "/abstract-geometric-shapes.png" },
      { name: "User 2", avatar: "/abstract-geometric-shapes.png" },
    ],
    priority: "Urgent",
    priorityColor: "red.500",
  },
];

export function DashboardLayout() {
  return (
    <Flex h="100vh" bg="gray.50">
      {/* Sidebar */}
      <Box w="256px" bg="white" borderRight="1px" borderColor="gray.200">
        {/* Logo */}
        <Box p={4} borderBottom="1px" borderColor="gray.200">
          <Flex gap={2} align="center">
            <Flex
              w={8}
              h={8}
              bg="brand.300"
              borderRadius="md"
              align="center"
              justify="center"
              color="white"
              fontWeight="bold"
              fontSize="sm"
            >
              mkV
            </Flex>
            <Text color="gray.600" fontSize="xs">
              HEALTHCARE VISION
            </Text>
          </Flex>
        </Box>

        {/* Main Navigation */}
        <Box flex={1} overflowY="auto">
          <Box p={2}>
            {sidebarItems.map((item, index) => (
              <Flex key={index} gap={3} px={3} py={2} fontSize="sm" color="gray.700" align="center" _hover={{ bg: "gray.50" }} borderRadius="md" cursor="pointer">
                <Text fontSize="base">{item.icon}</Text>
                <Text>{item.label}</Text>
              </Flex>
            ))}
          </Box>

          {/* Sub Items */}
          <Box px={2} mt={4}>
            {subItems.map((item, index) => (
              <Flex key={index} justify="space-between" px={3} py={2} fontSize="sm" borderRadius="md" cursor="pointer" align="center" bg={item.active ? "brand.50" : "transparent"} color={item.active ? "brand.300" : "gray.700"} _hover={{ bg: item.active ? "brand.50" : "gray.50" }}>
                <Text>{item.label}</Text>
                {item.hasDropdown && <HiOutlineChevronRight size={16} />}
              </Flex>
            ))}
          </Box>

          {/* Bottom Items */}
          <Box px={2} mt={8}>
            {bottomItems.map((item, index) => (
              <Box key={index}>
                <Flex justify="space-between" px={3} py={2} fontSize="sm" borderRadius="md" cursor="pointer" align="center" bg={item.active ? "brand.50" : "transparent"} color={item.active ? "brand.300" : "gray.700"} _hover={{ bg: item.active ? "brand.50" : "gray.50" }}>
                  <Flex gap={3} align="center">
                    <Text fontSize="base">{item.icon}</Text>
                    <Text>{item.label}</Text>
                  </Flex>
                  {item.hasDropdown && <HiOutlineChevronRight size={16} />}
                </Flex>
                {/* Admin subitems removed for compatibility */}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Bottom Settings */}
        <Box p={4} borderTop="1px" borderColor="gray.200">
          <Flex gap={2} mb={3} align="center">
            <Text fontSize="lg">🇬🇧</Text>
            <Text fontSize="sm" color="gray.700">English</Text>
            <HiOutlineChevronRight size={16} />
          </Flex>
          <Flex justify="space-between" align="center">
            <Text fontSize="sm" color="gray.700">Dark mode</Text>
            {/* Switch removed, add your own toggle if needed */}
          </Flex>
        </Box>
      </Box>

      {/* Main Content */}
      <Flex flex={1} direction="column">
        {/* Top Header */}
        <Box bg="white" borderBottom="1px" borderColor="gray.200" px={6} py={4}>
          <Flex justify="space-between" align="center">
            <Flex gap={4} align="center">
              <Button variant="ghost" colorScheme="gray" p={2}><HiOutlineChevronLeft size={20} /></Button>
              <Box w="256px">
                <Flex align="center" gap={2} bg="gray.50" border="1px solid" borderColor="gray.200" borderRadius="md" px={2}>
                  <HiOutlineSearch size={16} color="gray.600" />
                  <Input placeholder="M91" border="none" bg="gray.50" />
                </Flex>
              </Box>
            </Flex>
            {/* Right header content removed for compatibility */}
          </Flex>
        </Box>

        {/* Content Header */}
        <Box bg="white" px={6} py={4} borderBottom="1px" borderColor="gray.200">
          <Flex gap={4} align="center">
            <Flex w={10} h={10} bg="gray.50" borderRadius="full" align="center" justify="center">
              <HiOutlineChevronLeft size={20} />
            </Flex>
            <Text fontSize="2xl" fontWeight="semibold" color="gray.900">
              Afdeling Kwaliteit
            </Text>
          </Flex>
        </Box>

        {/* Search and Tabs removed for compatibility */}
        {/* Table removed for compatibility. You can add a custom list here. */}
        {/* Pagination removed for compatibility. */}
      </Flex>
    </Flex>
  );
}
