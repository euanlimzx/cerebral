import { Box, HStack, Text, Flex, Button } from "@chakra-ui/react";
import ProductGallery from "@/components/productGallery";
import { useRef } from "react";

import localFont from "next/font/local";
import Header from "@/components/header";
import { ProductCard } from "@/components/productCard";

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
    console.log(filterButtonRef.current)
    if (filterButtonRef.current) {
    }
  };
  return (
    <>
      <Flex bg="#fafbfb" flexDir="row" h="100vh">
        <Box bg="red" flex="1">
          FOR ERIC
        </Box>
        <Box flex="4" p="5">
          <Header />
          <ProductGallery />
          <Button onClick={scrollToFilter}>Bithc</Button>
          <Box height="10vh">
            kfjief
          </Box>
          <Box ref={filterButtonRef}>hello</Box>
        </Box>
      </Flex>
    </>
  );
}
