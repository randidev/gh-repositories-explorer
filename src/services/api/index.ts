export const getRepositories = async (username: string) => {
  return await (
    await fetch("/api/github/get-repos?username=" + username)
  ).json();
};
