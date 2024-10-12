import { Box, HStack, Text, Icon, Divider } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { ProductCard } from "./productCard";

export default function ProductGallery({pid, setPid}) {
  return (
    <Box vh="100vh" display="flex" flexDirection="row">
      <HStack spacing="5">
        <ProductCard setPid={setPid}/>
        <ProductCard setPid={setPid}/>
        <ProductCard setPid={setPid}/>
      </HStack>
    </Box>
  );
}
