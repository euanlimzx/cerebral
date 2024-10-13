import { Evaluation } from "@/components/evaluation";
import SideBar from "@/components/sidebar";
import {
  Box,
  Button,
  VStack,
  Text,
  Flex,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";

export default function Page() {
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
        ml="25%" // To prevent content from being hidden behind the sidebar
        p="8"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Evaluation />
      </Box>
    </Flex>
  );
}
