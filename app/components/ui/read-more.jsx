'use client'

import { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const ReadMore = ({ text, maxChars = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <Box>
      <Text transition="0.2s ease"  mt="10">
        {isExpanded ? text : `${text.substring(0, maxChars)}...`}
      </Text>
      {text.length > maxChars && (
        <Box w="fit-content" ml="auto">
            <Button my="2" ml="auto" size="sm" variant="link" colorScheme="blue" onClick={toggleReadMore}>
            {isExpanded ? "Read Less" : "Read More"}
            </Button>
        </Box>
      )}
    </Box>
  );
};

export default ReadMore;
