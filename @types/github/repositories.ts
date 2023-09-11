interface Repository {
  description: string;
  name: string;
  stargazers_count: number;
  url: string;
}

interface UserRepositories {
  owner: string;
  repositories: Repository[];
}
