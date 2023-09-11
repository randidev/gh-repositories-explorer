import EmptyState from "@/components/EmptyState";
import RepositoryCard from "@/components/RepositoryCard";
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
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");

  const {
    userRepositories,
    loading,
    fetchRepositories,
    fetched,
    reset,
    error,
  } = useUserRepositories();

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
              onKeyUp={(e) => {
                reset();
                e.key === "Enter" ? fetchRepositories(username) : "";
              }}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Enter username"
              data-testid="username-input"
            />
            <Button
              isLoading={loading}
              onClick={() => fetchRepositories(username)}
              colorScheme="blue"
              w="full"
              data-testid="search-button">
              Search
            </Button>
            <VisuallyHidden data-testid="validation">
              {error ? "Username is required." : ""}
            </VisuallyHidden>
          </VStack>
          <Box maxH={`calc(100vh - 100px)`} overflowY={"auto"} w={"full"}>
            {userRepositories && userRepositories.data.length > 0 ? (
              <>
                <Text color={"base.secondary"} fontSize="md" mb={5}>
                  Showing users for <b>{username}</b>
                </Text>
                <Accordion data-testid="accordion" allowToggle>
                  {userRepositories.data.map((user, index) => (
                    <AccordionItem key={index}>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            {user.owner}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <VStack>
                          {user.repositories.length > 0 ? (
                            <>
                              {user.repositories.map((repo, repoIndex) => (
                                <RepositoryCard repo={repo} key={repoIndex} />
                              ))}
                            </>
                          ) : (
                            <EmptyState
                              message={`No repositories found for <b>${user.owner}</b>.`}
                            />
                          )}
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </>
            ) : fetched ? (
              <EmptyState
                message={`No repositories found for <b>${username}</b>.`}
              />
            ) : (
              ""
            )}
          </Box>
        </VStack>
      </Box>
    </>
  );
}
