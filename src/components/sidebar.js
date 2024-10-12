// pages/index.js
import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  Button,
  Box
} from '@chakra-ui/react'

export default function SideBar() {
  return (
    <Box position="fixed" left={0} top={0} height="100vh" width="25%" zIndex={1}>
      <Drawer
        isOpen={true}
        placement='left'
        variant="permanent"
      >
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Your Sidebar</DrawerHeader>

          <DrawerBody>
            <Box border='1px' borderColor = 'grey.200' borderstyle = 'style' padding = '8px' textAlign = {'center'} borderRadius = {5} >Adult Diapers</Box>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme='blue' width="100%">Action Button</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}