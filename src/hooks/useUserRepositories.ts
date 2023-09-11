import { getRepositories } from "@/services/api";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const useUserRepositories = () => {
  const toast = useToast();
  const [userRepositories, setUserRepositories] = useState<APIResponse<
    UserRepositories[]
  > | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [error, setError] = useState(false);

  const fetchRepositories = async (username: string) => {
    setError(false);

    if (username.trim() === "") {
      toast({
        title: "Username is required.",
        status: "warning",
        isClosable: true,
      });
      setError(true);

      return;
    }

    setLoading(true);
    setFetched(false);
    try {
      const repos = await getRepositories(username);

      setUserRepositories(repos);
      setLoading(false);
      setFetched(true);
    } catch (error: any) {
      toast({
        title: error.message,
        status: "error",
        isClosable: true,
      });
      setLoading(false);
    }
  };

  const reset = () => {
    setUserRepositories(null);
    setFetched(false);
  };

  return {
    userRepositories,
    loading,
    fetchRepositories,
    fetched,
    reset,
    error,
  };
};

export default useUserRepositories;
