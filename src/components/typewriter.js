import { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

const TypewriterText = () => {
  const messages = [
    "Flying your products over as we speak!",
    "The pilot said we're over the Indian Ocean rn",
    "Woops, they got distracted trying to find Atlantis...",
    "Gathering feedback on your product now!",
    "Finalizing a report for you...",
  ];
  
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 70; // Speed of typing
  const deletingSpeed = 70; // Speed of deleting
  const pauseTime = 50; // Time to pause before changing text

  useEffect(() => {
    const handleTyping = () => {
      const currentText = messages[index];
      const currentLength = displayedText.length;

      if (isDeleting) {
        // Remove a character
        setDisplayedText(currentText.substring(0, currentLength - 1));
        
        if (currentLength === 1) {
          // Switch to the next message after deleting
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % messages.length);
          setTimeout(() => setDisplayedText(''), pauseTime);
        }
      } else {
        // Add a character
        setDisplayedText(currentText.substring(0, currentLength + 1));
        
        if (currentLength === currentText.length) {
          // Pause before deleting
          setIsDeleting(true);
          setTimeout(() => {}, pauseTime);
        }
      }
    };

    const timer = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(timer);
  }, [displayedText, isDeleting, index]);

  return (
    <Text fontSize="xx-large" fontWeight="semibold">
      {displayedText}
    </Text>
  );
};

export default TypewriterText;
