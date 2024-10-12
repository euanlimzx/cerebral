import { Box, HStack, Text, Flex, Button } from "@chakra-ui/react";
import ProductGallery from "@/components/productGallery";
import { DemographicSelect } from "@/components/demographicSelect";
import { useRef } from "react";
import axios from 'axios'

import localFont from "next/font/local";
import Header from "@/components/header";
import TagSelect from "@/components/tagSelect";
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

  const fetchEvaluation = async () => {
    console.log("fuck")
    const response = await axios.get('https://thank-giver-backend.onrender.com/generate-evaluation');
    console.log("hello")
    console.log(response, "wtf")
  }
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
            Which geographical market do you want to break into?
          </Text>
          <DemographicSelect/>
          <Text fontSize="xx-large" fontWeight="semibold" pt="9" pb="4">
            Describe your target demographic to us.
          </Text>
          <TagSelect/>
          <Text fontSize="xx-large" fontWeight="semibold" pt="9" pb="4">
            Evaluate product-market fit
          </Text>
          <Button onClick={fetchEvaluation}>Fuck</Button>
        </Box>
      </Flex>
    </>
  );
}
