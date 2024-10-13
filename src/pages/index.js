import React, { useState } from "react";
import {
  Box,
  Button,
  VStack,
  Text,
  Flex,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { CountrySelect } from "@/components/countrySelect";
import TagSelect from "@/components/tagSelect";
import ProductGallery from "@/components/productGallery";
import Header from "@/components/header";
import SideBar from "@/components/sidebar"; // Import the updated Sidebar component
import axios from "axios";
import Image from "next/image";
import TypewriterText from "@/components/typewriter";

export default function Home() {
  const [pid, setPid] = useState("");
  const [country, setCountry] = useState("Select a Country");
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [evaluationData, setEvaluationData] = useState();

  const { isOpen: isProductSelectorOpen, onToggle: onToggleProductSelector } =
    useDisclosure({ defaultIsOpen: true });
  const productToCountry = (pid) => {
    setPid(pid);
    onToggleProductSelector();
    onToggleCountrySelector();
  };

  const { isOpen: isCountrySelectorOpen, onToggle: onToggleCountrySelector } =
    useDisclosure();
  const countryToDemographic = (country) => {
    setCountry(country);
    onToggleCountrySelector();
    onToggleDemographicSelector();
  };

  const {
    isOpen: isDemographicSelectorOpen,
    onToggle: onToggleDemographicSelector,
  } = useDisclosure();
  const DemographicToEvaluator = () => {
    onToggleDemographicSelector();
    onToggleEvaluator();
  };

  const { isOpen: isEvaluatorOpen, onToggle: onToggleEvaluator } =
    useDisclosure();
  const handleEvaluation = async () => {
    const payload = {
      pid: pid,
      country: country,
      tags: tags,
    };
    onToggleEvaluator();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://638zqrk9-8080.usw2.devtunnels.ms/generate-evaluation",
        payload
      );
      console.log(response.data);
      // Handle the response as needed
    } catch (error) {
      console.error("Error during evaluation:", error);
      // Optionally handle the error
    } finally {
      setEvaluationData(response.data);
      setIsLoading(false); // Set loading to false when done
      console.log(data);
    }
  };
  return (
    <Flex minHeight="100vh" width="100%">
      {/* Sidebar - Takes up 25% of the screen */}
      <Box
        width="25%"
        bg="gray.100"
        p="4"
        boxShadow="md"
        position="fixed"
        height="100vh"
        left={0}
        top={0}
      >
        <SideBar />
      </Box>

      {/* Main Content - Takes up 75% of the screen */}
      <Box
        flex="1"
        ml="25%" // To prevent content from being hidden behind the sidebar
        p="8"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Collapse unmountOnExit={true} in={isProductSelectorOpen}>
          <Text
            fontSize="xx-large"
            fontWeight="semibold"
            pt="9"
            pb="4"
            textAlign="center"
          >
            Which product would you like to evaluate today?
          </Text>
          <ProductGallery pid={pid} productToCountry={productToCountry} />
        </Collapse>

        <Collapse unmountOnExit={true} in={isCountrySelectorOpen}>
          {/* Additional Content */}
          <Box h="20rem">
            <Text
              fontSize="xx-large"
              fontWeight="semibold"
              pt="9"
              pb="4"
              transition="all 0.3s ease"
            >
              Which geographical market do you want to break into?
            </Text>
            <CountrySelect
              country={country}
              setCountry={countryToDemographic}
            />
          </Box>
        </Collapse>

        <Collapse unmountOnExit={true} in={isDemographicSelectorOpen}>
          <Text fontSize="xx-large" fontWeight="semibold" pt="9" pb="4">
            Describe your target demographic to us.
          </Text>
          <TagSelect
            tags={tags}
            setTags={setTags}
            DemographicToEvaluator={DemographicToEvaluator}
          />
        </Collapse>
        <Collapse in={isEvaluatorOpen} unmountOnExit={true}>
          <Text fontSize="xx-large" fontWeight="semibold" pt="9" pb="4">
            That&apos;s it - You&apos;re good to go!
          </Text>
          <Button
            onClick={handleEvaluation}
            h="3.5rem"
            w="100%"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            <Text color="white" fontSize="1.4rem">
              Evaluate my product-market fit
            </Text>
          </Button>
        </Collapse>

        {isLoading && (
          <Flex flexDirection="column">
            <Box h="20px">
              <TypewriterText />
            </Box>
            <Image
              src="/airplane.gif"
              width={700}
              height={700}
              alt="airplane"
            />
          </Flex>
        )}

        {evaluationData && <Box>{evaluationData}</Box>}
      </Box>
    </Flex>
  );
}
