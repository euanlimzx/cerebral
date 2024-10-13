import { Box, HStack, Text, Icon, Divider } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { ReviewCard } from "./reviewCard";
export default function ReviewGallery({reviews:data}) {

  return (
    <Box display="flex" flexDirection="row" maxW="60rem">
      <HStack spacing="5" overflowX="auto" w="100%" py="3">
        {data.map((review) => (
          <ReviewCard
            review={review}
            key={review.id}
          />
        ))}
      </HStack>
    </Box>
  );
}
