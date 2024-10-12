import { Box, HStack, Text, Icon, Divider } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { ProductCard } from "./productCard";

export default function ProductGallery() {
  return (
    <Box vh="100vh" pt="5" display="flex" flexDirection="row">
      <HStack spacing="5">
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </HStack>
    </Box>
  );
}
