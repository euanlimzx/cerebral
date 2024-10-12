import { Box, HStack, Text, Flex, Button } from "@chakra-ui/react";
import ProductGallery from "@/components/productGallery";
import { DemographicSelect } from "@/components/demographicSelect";
import { useRef } from "react";

import localFont from "next/font/local";
import Header from "@/components/header";
import { Text, Box, ChakraProvider } from "@chakra-ui/react";
import SideBar from "../components/sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const filterButtonRef = useRef(null);
  const scrollToFilter = () => {
    console.log(filterButtonRef.current);
    if (filterButtonRef.current) {
      filterButtonRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  };
  return (
    <>
      <Flex bg="#fafbfb" flexDir="row">
        <Box bg="red" flex="1">
          FOR ERIC
        </Box>
        <Box flex="4" py="8" px="12">
          <Header />
          <Text fontSize="xx-large" fontWeight="semibold" pt="9" pb="4">
            What product would you like to evaluate today?
          </Text>
          <ProductGallery />
          <Text fontSize="xx-large" fontWeight="semibold" pt="9" pb="4">
            Select your target demographic
          </Text>
          <DemographicSelect/>
        </Box>
      </Flex>
    </>
  );
}
