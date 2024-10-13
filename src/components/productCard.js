import { Card, CardBody, Stack, Heading, Text, Image } from "@chakra-ui/react";
export function ProductCard({ productToCountry, product }) {
  return (
    <Card
      minH="400px"
      minW="270px"
      borderRadius="2rem"
      onClick={() => productToCountry(product["Uniqe Id"])}
      border="1px" // Set border width
      borderColor="lightgrey" // Set light grey color
      boxShadow="md"
      borderWidth="1px"
      cursor="pointer"
      _hover={{
        bg:"gray.100"
      }}
    >
      <CardBody>
        <Image
          src={product["Image"]}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            <Text noOfLines={1}>{product["Product Name"]}</Text>
          </Heading>
          <Text noOfLines={3}>{product["About Product"]}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
