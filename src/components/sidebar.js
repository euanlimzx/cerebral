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
import Image from 'next/image';


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
        bg: "gray.100",
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
      {/* Header Section */}
      <Flex
        fontSize="lg"
        fontWeight="bold"
        mb="4"
        borderBottom="1px solid"
        paddingBottom="15px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box 
          borderRadius="15px"
          overflow="hidden"
          onClick={() => window.location.reload()}
          cursor="pointer"
          >
          <Image 
            src="/images/evai_logo5.jpg" 
            height={60}
            width={60}
            alt="logo"
          />
        </Box>
        <EditIcon />
      </Flex>

      {/* Content Section */}
      <VStack
        spacing="2"
        align="stretch"
        marginTop="15px"
        height="calc(100vh - 100px)"
      >
        <InteractiveBox hoverEffect={true}>
          LANER Romper
        </InteractiveBox>

        <InteractiveBox hoverEffect={true}>
          VeraVE Body Moisturizing Lotion
        </InteractiveBox>

        <InteractiveBox hoverEffect={true}>
          Beets Headphones
        </InteractiveBox>

        <InteractiveBox hoverEffect={true}>
          Decibel Mini Dress
        </InteractiveBox>

        <InteractiveBox hoverEffect={true}>
          Bugo Loss Suits
        </InteractiveBox>

        <InteractiveBox hoverEffect={true}>
          Lessentials Hoodie
        </InteractiveBox>

        <InteractiveBox hoverEffect={true}>
          Kalvin Clein Pants
        </InteractiveBox>
      </VStack>

      <Flex
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        padding="15px"
        bg="white"
        borderTop="1px solid lightgray"
        justifyContent="space-between"
        alignItems="center"
      >
        <SettingsIcon boxSize={6} />
        <InfoOutlineIcon boxSize={6} />
        <ChevronLeftIcon boxSize={6} />
      </Flex>
    </Box>
  );
}
