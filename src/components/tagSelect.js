import React, { useState } from "react";
import {
  Input,
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  Box,
  Text,
} from "@chakra-ui/react";

const colorPalette = [
    'blackAlpha',
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'cyan',
    'purple',
    'pink',
  ];

const TagSelect = ({tags, setTags}) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue) {
      event.preventDefault(); // Prevent form submission
      // Add tag if it doesn't already exist
      if (!tags.includes(inputValue)) {
        setTags((prevTags) => [...prevTags, inputValue]);
      }
      setInputValue(""); // Clear the input
    }
  };

  function generateConsistentInteger(inputString) {
    // Create a hash code from the input string
    let hash = 0;
    for (let i = 0; i < inputString.length; i++) {
      hash += inputString.charCodeAt(i); // Sum of character codes
    }
    
    // Generate a consistent integer between 0 and 10
    const result = Math.abs(hash) % 11; // Modulus to fit in the range [0, 10]
    
    return result;
  }

  const handleDelete = (tagToDelete) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Box w="50%">
      <Input
        placeholder="e.g. Schooling Students, Sporty, Tech-Savvy"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Wrap spacing={2} mt="1rem">
        {tags.map((tag, index) => (
          <Tag key={index} size="md" variant="solid" colorScheme={colorPalette[generateConsistentInteger(tag)]}>
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton onClick={() => handleDelete(tag)} />
          </Tag>
        ))}
      </Wrap>
    </Box>
  );
};

export default TagSelect;
