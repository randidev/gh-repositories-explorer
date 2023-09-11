import useUserRepositories from "@/hooks/useUserRepositories";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");

  const { repositories, loading, errorMessage, fetchRepositories, fetched } =
    useUserRepositories();

  return (
    <>
      <Box
        py={5}
        h={"100vh"}
        mx={"auto"}
        maxW={{
          md: "48em",
          base: "90%",
        }}>
        <VStack spacing={5}>
          <VStack spacing={5} w={"full"}>
            <Input
              onKeyUp={(e) =>
                e.key === "Enter" ? fetchRepositories(username) : ""
              }
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Enter username"
            />
            <Button
              isLoading={loading}
              onClick={() => fetchRepositories(username)}
              colorScheme="blue"
              w="full">
              Search
            </Button>
          </VStack>
          <Box maxH={`calc(100vh - 100px)`} overflowY={"auto"} w={"full"}>
            {repositories.length > 0 ? (
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Section 1 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ) : fetched ? (
              <>
                <Text fontSize="2xl">(2xl) In love with React & Next</Text>
              </>
            ) : (
              ""
            )}
          </Box>
        </VStack>
      </Box>
    </>
  );
}
