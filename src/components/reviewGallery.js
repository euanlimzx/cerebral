import { Box, HStack, Text, Icon, Divider } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { ReviewCard } from "./reviewCard";
export default function ReviewGallery({ pid, productToCountry }) {
  const data = [
    {
      id: 8,
      rating: 4,
      explanation:
        "Sakura, as an active college student and member of her university's outdoor club, may find the Martha Stewart Crafts Stencil Tape useful for personalizing her outdoor apparel and equipment. The product's versatility in creating patterns and designs could be a good fit for her interests.",
      improvement:
        "To further enhance the product's appeal to Sakura, the manufacturer could consider offering a wider range of nature-inspired color options and designs that would complement her active outdoor lifestyle.",
      action: "like",
    },
    {
      id: 9,
      rating: 3,
      explanation:
        "Ryota, as an outdoor enthusiast who enjoys activities like hiking, mountain biking, and rock climbing, is more likely to be interested in specialized outdoor gear and equipment that can withstand the demands of his adventurous hobbies. While the Martha Stewart Crafts Stencil Tape could be used for some customization, it may not be a top priority for him.",
      improvement:
        "To make this product more appealing to Ryota, the manufacturer could consider offering a version that is specifically designed for outdoor use, with features like water-resistance and improved durability to better suit his active lifestyle.",
      action: "view",
    },
    {
      id: 10,
      rating: 4,
      explanation:
        "Akiko, as an active college student and member of her university's outdoor club, may find the Martha Stewart Crafts Stencil Tape useful for personalizing her outdoor apparel and equipment. The product's versatility in creating patterns and designs could be a good fit for her interests.",
      improvement:
        "To further enhance the product's appeal to Akiko, the manufacturer could consider offering a wider range of nature-inspired color options and designs that would complement her active outdoor lifestyle.",
      action: "like",
    },
  ];

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
