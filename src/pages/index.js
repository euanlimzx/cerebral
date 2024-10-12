import React from 'react';
import {
  Box,
  Button,
  VStack,
  Text,
  Flex,
} from '@chakra-ui/react';
import ProductGallery from "@/components/productGallery";
import Header from "@/components/header";
import SideBar from "@/components/sidebar"; // Import the updated Sidebar component

export default function Home() {
  return (
    <Flex minHeight="100vh" width="100%">
      {/* Sidebar - Takes up 25% of the screen */}
      <Box
        width="25%"
        bg="gray.100"
        p="4"
        boxShadow="md"
        position="fixed"
        height="100vh"
        left={0}
        top={0}
      >
        <SideBar />
      </Box>

      {/* Main Content - Takes up 75% of the screen */}
      <Box
        flex="1"
        ml="25%"  // To prevent content from being hidden behind the sidebar
        p="8"
        bg="#fafbfb"
      >
        <Header />
        <Text fontSize="xx-large" fontWeight="semibold" pt="9" pb="4">
          What product would you like to evaluate today?
        </Text>
        <ProductGallery />
        {/* Additional Content */}
      </Box>
    </Flex>
  );
}
