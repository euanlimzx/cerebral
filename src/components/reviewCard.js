import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Button,
  ModalFooter,
  Icon,
  ModalBody,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
export function ReviewCard({ review }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {" "}
      <Card
        minH="200px"
        minW="270px"
        borderRadius="1rem"
        border="1px" // Set border width
        borderColor="lightgrey" // Set light grey color
        boxShadow="md"
        borderWidth="1px"
        cursor="pointer"
        _hover={{
          bg: "gray.100",
        }}
        onClick={onOpen}
      >
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">
              {Array.from({ length: 5 }, (_, index) => (
                <Icon
                  key={index + 1}
                  as={StarIcon}
                  color={
                    index + 1 < parseInt(review["rating"])
                      ? "black"
                      : "gray.300"
                  }
                  boxSize={6}
                  cursor="pointer"
                  onClick={() => handleClick(index + 1)} // Handle click for setting the rating
                  _hover={{ color: "teal.300" }} // Change color on hover
                />
              ))}
            </Heading>
            <Text noOfLines={3}>{review["explanation"]}</Text>
          </Stack>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
