import React from 'react';
import {
  Box,
  VStack,
  Text,
  Flex
} from '@chakra-ui/react';
import {
  DragHandleIcon,
  EditIcon,
  InfoOutlineIcon,
  SettingsIcon,
  ChevronLeftIcon
} from '@chakra-ui/icons';

function InteractiveBox({ hoverEffect, children }) {
  return (
    <Box
      position="relative"
      padding="13px"
      textAlign="start"
      borderRadius="5px"
      bg="white"
      transition="all 0.2s ease-in-out"
      _hover={hoverEffect ? {
        bg: "lightgrey",
        cursor: "pointer",
        transform: "scale(1.05)",
        boxShadow: "lg",
      } : {}}
      role="group"
    >
      {children}

      {hoverEffect && (
        <Box
          position="absolute"
          top="50%"
          right="10px"
          transform="translateY(-50%)"
          opacity={0}
          _groupHover={{ opacity: 1 }}
          transition="opacity 0.2s ease-in-out"
        >
          <DragHandleIcon />
        </Box>
      )}
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
      <Flex
      fontSize="lg"
      fontWeight="bold"
      mb="4"
      borderBottom="1px solid"
      paddingBottom="15px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text>ThanksGiver</Text>
      <EditIcon />
    </Flex>
      
      <VStack spacing="2" align="stretch" marginTop="15px" position='relative' height = "400x">
          <InteractiveBox hoverEffect={true} borderRadius="5" >
            Adult Diapers
          </InteractiveBox>
        
        <InteractiveBox hoverEffect={true} borderRadius="5">
          Lubricant
        </InteractiveBox>

        <InteractiveBox hoverEffect={true} borderRadius="5">
          Headphones
        </InteractiveBox>

        <InteractiveBox hoverEffect={true} borderRadius="5">
          Mini Dress
        </InteractiveBox>

        <InteractiveBox hoverEffect={true} borderRadius="5">
          Suits
        </InteractiveBox>
        
        <InteractiveBox hoverEffect={true} borderRadius="5">
          Hoodie
        </InteractiveBox>
        
        <InteractiveBox hoverEffect={true} borderRadius="5">
          Pants
        </InteractiveBox>

        <Box marginBottom='60px'></Box>
        
        <Flex
          position="absolute" 
          bottom="0"
          width='100%'     
          padding="15px"
          bg="white"    
          borderTop="1px solid lightgray"  
          justifyContent="space-between" 
          alignItems="center" 
          zIndex="10"
        >
          <SettingsIcon boxSize={6} />
          <InfoOutlineIcon boxSize={6} />
          <ChevronLeftIcon boxSize={6} />
        </Flex>
      </VStack>
    </Box>
  );
}
