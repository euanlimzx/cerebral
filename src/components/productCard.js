import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  ButtonGroup,
  Button,
  Divider,
  CardFooter,
  Text,
} from "@chakra-ui/react";
export function ProductCard({ setPid, product }) {
  return (
    <Card h="25rem" w="45rem" borderRadius="2rem" onClick={() => setPid(1)}>
      <CardBody>
        {/* <Image
          src={product["Image"]}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        /> */}
        <Stack mt="6" spacing="3">
          <Heading size="md">
            <Text noOfLines={1}>{product["Product Name"]}</Text>
          </Heading>
          <Text noOfLines={3}>
            {product["About Product"]}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
