import { FC } from "react";
import { Text } from "@chakra-ui/react";

const EmptyState: FC<EmptyStateProps> = ({ message }) => {
  return (
    <Text
      color={"base.secondary"}
      fontSize="md"
      dangerouslySetInnerHTML={{ __html: message }}></Text>
  );
};

export default EmptyState;
