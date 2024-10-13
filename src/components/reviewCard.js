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
        minH="80px"
        minW="270px"
        borderRadius="1rem"
        bx="1px" // Set border width
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
          <Stack mt="2">
            <Heading size="md">
              {Array.from({ length: 5 }, (_, index) => (
                <Icon
                  key={index + 1}
                  as={StarIcon}
                  color={
                    index + 1 <= parseInt(review["rating"])
                      ? "black"
                      : "gray.300"
                  }
                  boxSize={4}
                />
              ))}
            </Heading>
            <Text noOfLines={3}>{review["explanation"]}</Text>
          </Stack>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} borderRadius="1rem">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pt="3rem">
            {Array.from({ length: 5 }, (_, index) => (
              <Icon
                key={index + 1}
                as={StarIcon}
                color={
                  index + 1 <= parseInt(review["rating"]) ? "black" : "gray.300"
                }
                boxSize={4}
              />
            ))}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="5rem">{review["explanation"]}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
