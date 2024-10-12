import { Box, HStack, Text,Icon } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <>
      <Box display="flex" justifyContent="flex-end" alignItems="end">
        <HStack>
            <InfoIcon/>
        </HStack>
      </Box>
      <Text fontSize="xx-large" fontWeight="semibold">
        What product would you like to evaluate today?
      </Text>
    </>
  );
}
