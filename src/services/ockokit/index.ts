import { Octokit } from "octokit";

class GithubAPI {
  api;
  headers;

  constructor() {
    this.api = new Octokit({
      auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    });
    this.headers = {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    };
  }

  async searchUser(username: string) {
    return await this.api.request("GET /search/users", {
      ...this.headers,
      q: username,
    });
  }

  async getRepositories(username: string) {
    return await this.api.request(`GET /users/{username}/repos`, {
      ...this.headers,
      username,
    });
  }
}

export default GithubAPI;
