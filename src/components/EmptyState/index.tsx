import { FC } from "react";
import { Text } from "@chakra-ui/react";

const EmptyState: FC<EmptyStateProps> = ({ message }) => {
  return (
    <Text
      color={"base.secondary"}
      fontSize="md"
      dangerouslySetInnerHTML={{ __html: message }}
      data-testid="empty-state"></Text>
  );
};

export default EmptyState;
