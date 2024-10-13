import {
  VStack,
  Text,
  Flex,
  Icon,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { StarIcon, CheckIcon, WarningIcon } from "@chakra-ui/icons";
import ReviewGallery from "./reviewGallery";

export function Evaluation() {
  const evaluation = {
    avgStarRating: 5.0,
    actionBreakdown: { purchase: 20.0, view: 50.0, like: 30.0 },
    feedback:
      "Overall, the Martha Stewart Crafts Stencil Tape is a versatile and user-friendly product that allows users to create unique patterns and designs, with some room for improvement in terms of color and stencil options.",
    positive: [
      "Easy application and removal of the low-tack adhesive",
      "Ability to personalize projects and express individuality",
      "Versatility in creating deserns",
    ],
    improvement: [
      "Offer a wider range of color and pattern options",
      "Provide more stencil design choices or the ability to create custom stencils",
      "Expand the product's appeal to user`s with different creative needs and styles",
    ],
    keywords: [
      "versatile",
      "user-friendly",
      "unique",
      "personalize",
      "express individuality",
    ],
    bestSeason: "spring",
  };
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
                      index + 1 < evaluation["avgStarRating"]
                        ? "#7928CA"
                        : "gray.300"
                    }
                    boxSize={6}
                  />
                ))}
              </Flex>
            </HStack>
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
          <ReviewGallery />
        </VStack>
      </VStack>
    </Flex>
  );
}
