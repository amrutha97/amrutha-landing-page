import {
  Box,
  Image,
  Flex,
  Text,
  Link,
  VStack,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaBriefcase } from "react-icons/fa";

function App() {
  return (
    <Box bg="gray.900" color="white" minH="100vh">
      <VStack py={10} spacing={6} align="center">
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://via.placeholder.com/150"
          alt="Profile Picture"
        />
        <Heading as="h1" size="xl">
          Your Name
        </Heading>
        <Text fontSize="lg" textAlign="center" px={5}>
          A brief summary of who you are, what you do, and your expertise.
        </Text>
      </VStack>
      <Stack
        direction={["column", "row"]}
        spacing={4}
        align="center"
        justify="center"
        mt={10}
        mb={5}
      >
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl" mb={4}>
            <FaBriefcase /> Experience
          </Heading>
          <Text mt={4}>
            Describe your professional experience and notable projects.
          </Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl" mb={4}>
            Skills
          </Heading>
          <Text mt={4}>List your professional skills and proficiencies.</Text>
        </Box>
      </Stack>
      <VStack spacing={2} align="center" mb={10}>
        <Link
          href="mailto:youremail@example.com"
          color="teal.200"
          display="flex"
          alignItems="center"
        >
          <FaEnvelope /> <Text ml={2}>youremail@example.com</Text>
        </Link>
        <Link
          href="tel:+1234567890"
          color="teal.200"
          display="flex"
          alignItems="center"
        >
          <FaPhone /> <Text ml={2}>+1234567890</Text>
        </Link>
      </VStack>
    </Box>
  );
}

export default App;
