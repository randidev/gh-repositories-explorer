import { Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { AiFillStar } from "react-icons/ai";

const RepositoryCard: FC<RepositoryCardProps> = ({ repo }) => {
  const bgColor = useColorModeValue("base.bg", "dark.bg");
  const textColor = useColorModeValue("base.bgText", "dark.bgText");

  return (
    <Flex
      p={3}
      w={"full"}
      justifyContent={"space-between"}
      backgroundColor={bgColor}
      color={textColor}
      alignItems={"flex-start"}>
      <Stack>
        <Text data-testid="title">{repo.name}</Text>
        <Text data-testid="description">{repo.description}</Text>
      </Stack>
      <Flex alignItems={"center"} gap={2}>
        <Text data-testid="stars">{repo.stargazers_count}</Text> <AiFillStar />
      </Flex>
    </Flex>
  );
};

export default RepositoryCard;
