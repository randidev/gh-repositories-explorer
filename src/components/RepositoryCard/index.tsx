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
        <Text>{repo.name}</Text>
        <Text>{repo.description}</Text>
      </Stack>
      <Flex alignItems={"center"} gap={2}>
        {repo.stargazers_count} <AiFillStar />
      </Flex>
    </Flex>
  );
};

export default RepositoryCard;
