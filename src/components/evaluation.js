import {
  VStack,
  Text,
  Flex,
  Icon,
  HStack,
  Button,
  StatGroup,
  Image,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatArrow,
  useDisclosure,
} from "@chakra-ui/react";
import { StarIcon, CheckIcon, WarningIcon } from "@chakra-ui/icons";
import ReviewGallery from "./reviewGallery";
import Link from "next/link";
import { productData } from "./productGallery";

export function Evaluation({ evaluation, pid }) {
  const findObjectById = (pid) => {
    const obj = productData.find((object) => object["Uniqe Id"] === pid);
    return obj
  };
  findObjectById(pid)
  return (
    <Flex
      justifyContent="center"
      alignItems="start"
      flexDirection="column"
      pt="5%"
    >
      <Text fontSize="xx-large" fontWeight="semibold" pb="2rem">
        Here&apos;s how your product is projected to perform:
      </Text>
      <VStack w="100%" maxW="50vw" spacing={10}>
        <HStack display="flex" justifyContent="space-between" w="100%">
          <Flex align="start" flexDirection="column" flex={1}>
            <Text fontSize="xl" fontWeight="semibold">
              Average rating
            </Text>
            <HStack>
              <Text fontSize="6xl" fontWeight="bold" textAlign="start">
                {Number(evaluation["avgStarRating"]).toFixed(1)}
              </Text>
              <Flex pl="5">
                {Array.from({ length: 5 }, (_, index) => (
                  <Icon
                    key={index + 1}
                    as={StarIcon}
                    color={
                      index + 1 <= evaluation["avgStarRating"]
                        ? "#7928CA"
                        : "gray.300"
                    }
                    boxSize={6}
                  />
                ))}
              </Flex>
            </HStack>
            <StatGroup>
              <Stat pr="7">
                <StatLabel>Viewed</StatLabel>
                <StatNumber>
                  {evaluation["actionBreakdown"]["view"]}
                  <Text fontSize="md" pl="1" as="span">
                    %
                  </Text>
                </StatNumber>
              </Stat>

              <Stat pr="7">
                <StatLabel>Liked</StatLabel>
                <StatNumber>
                  {evaluation["actionBreakdown"]["like"]}
                  <Text fontSize="md" pl="1" as="span">
                    %
                  </Text>
                </StatNumber>
              </Stat>
              <Stat pr="7">
                <StatLabel>Purchased</StatLabel>
                <StatNumber>
                  {evaluation["actionBreakdown"]["purchase"]}
                  <Text fontSize="md" pl="1" as="span">
                    %
                  </Text>
                </StatNumber>
              </Stat>
            </StatGroup>
          </Flex>
          <Flex
            alignItems="start"
            justifyContent="start"
            flexDirection="column"
            h="100%"
            flex={1}
          >
            <Text fontSize="xl" fontWeight="semibold">
              Executive Summary
            </Text>
            <Text fontSize="l" fontWeight="">
              {evaluation["feedback"]}
            </Text>
          </Flex>
        </HStack>
        <HStack display="flex" justifyContent="space-between" w="100%">
          <Flex
            alignItems="start"
            justifyContent="start"
            flexDirection="column"
            h="100%"
            flex={1}
          >
            <Text fontSize="xl" fontWeight="semibold" pb="2">
              What users liked:
            </Text>
            <VStack display="flex" alignItems="start">
              {evaluation["positive"].map((feedback, index) => (
                <HStack key={index}>
                  <Icon as={CheckIcon} boxSize={4} />
                  <Text>{feedback}</Text>{" "}
                  {/* Use {feedback} to display the actual string */}
                </HStack>
              ))}
            </VStack>
          </Flex>
          <Flex
            alignItems="start"
            justifyContent="start"
            flexDirection="column"
            h="100%"
            flex={1}
          >
            <Text fontSize="xl" fontWeight="semibold" pb="2">
              Areas for improvement:
            </Text>

            <VStack display="flex" alignItems="start">
              {evaluation["improvement"].map((feedback, index) => (
                <HStack key={index}>
                  <Icon as={WarningIcon} boxSize={4} />
                  <Text>{feedback}</Text>{" "}
                  {/* Use {feedback} to display the actual string */}
                </HStack>
              ))}
            </VStack>
          </Flex>
        </HStack>
        <VStack>
          <Text fontSize="xl" fontWeight="semibold">
            Here are some user profiles that stood out:
          </Text>
          <ReviewGallery reviews={evaluation["generated_reviews"]} />
        </VStack>
        <VStack>
          <Text fontSize="xl" fontWeight="semibold">
            Finally, we&apos;ve also found some ways you could optimize your
            cover image:
          </Text>
          <HStack pt="1rem">
            <Image 
              boxSize="200px"
              src={findObjectById(pid)["Image"]}
              alt="Green double couch with wooden legs"
              borderRadius="2.5rem"
            />
 
            <Text>
              {/* evaluation["imageRecommendation"] */}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              fugiat praesentium ea voluptas voluptatibus maiores, ex
              repellendus dicta officiis dolor facilis quibusdam, optio culpa
              eos, ratione repellat alias nam dolores?
            </Text>
          </HStack>
        </VStack>
        <Button
          size="lg"
          onClick={() => window.location.reload()}
          colorScheme="blackAlpha"
          bg="black"
        >
          Analyse another product
        </Button>
      </VStack>
    </Flex>
  );
}
