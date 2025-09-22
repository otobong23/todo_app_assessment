import { Box, Flex, VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

const DashboardLayout = ({ Sidebar, Navbar, children }: Readonly<{
   Sidebar: ReactNode,
   Navbar: ReactNode,
   children: ReactNode,
}>) => {
   return (
      <Box>
         <Flex maxH={'vh'}>
            <Box as={'section'} className='sidebar' maxW={250} w={'full'} bg={'var(--mkv-white)'}>
               {Sidebar}
            </Box>
            <Flex flexDirection={'column'} as={'section'} className='content' w={'full'} bg={'var(--mkv-gray-light)'}>
               <Box>
                  {Navbar}
               </Box>
               <Box>
                  {children}
               </Box>
            </Flex>
         </Flex>
      </Box>
   )
}

export default DashboardLayout