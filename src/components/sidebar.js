import React from 'react';
import {
  Box,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';

function InteractiveBox({ hoverEffect, children }) {
  return (
    <Box
      padding="8px"
      textAlign="center"
      borderRadius="5px"
      bg="gray.100"
      transition="all 0.2s ease-in-out"
      _hover={hoverEffect ? {
        bg: "blue.100",         // Hover background color
        cursor: "pointer",      // Changes the cursor
        transform: "scale(1.05)", // Slight zoom-in
        boxShadow: "lg",        // Adds shadow on hover
      } : {}}
    >
      {children}
    </Box>
  );
}

export default function SideBar() {
  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      height="100vh"
      width="25%"
      bg="white"
      p="4"
      boxShadow="md"
      zIndex={1}
    >
      <Text fontSize="lg" fontWeight="bold" mb="4" borderBottom="1px solid" textAlign="center" paddingBottom="15px">
        ThanksGiver
      </Text>
      
      <VStack spacing="4" align="stretch" marginTop="25px">
        {/* Sidebar Items */}
        <InteractiveBox hoverEffect={true} padding="8px" textAlign="center" borderRadius="5" >
          Adult Diapers
        </InteractiveBox>
        
        {/* More Sidebar Items */}
        <InteractiveBox hoverEffect={true} padding="8px" textAlign="center" borderRadius="5">
          Cetaphil Moisturizer
        </InteractiveBox>

        <InteractiveBox hoverEffect={true} padding="8px" textAlign="center" borderRadius="5">
          Cetaphil Moisturizer
        </InteractiveBox>

        <InteractiveBox hoverEffect={true} padding="8px" textAlign="center" borderRadius="5">
          Cetaphil Moisturizer
        </InteractiveBox>

        <InteractiveBox hoverEffect={true} padding="8px" textAlign="center" borderRadius="5">
          Cetaphil Moisturizer
        </InteractiveBox>
        
        <InteractiveBox hoverEffect={true} padding="8px" textAlign="center" borderRadius="5">
          Cetaphil Moisturizer
        </InteractiveBox>
      </VStack>
    </Box>
  );
}
