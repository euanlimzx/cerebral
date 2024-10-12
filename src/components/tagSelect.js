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

const TagSelect = () => {
  const [tags, setTags] = useState([]);
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
          <Tag key={index} size="md" variant="solid" colorScheme="blue">
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton onClick={() => handleDelete(tag)} />
          </Tag>
        ))}
      </Wrap>
    </Box>
  );
};

export default TagSelect;
