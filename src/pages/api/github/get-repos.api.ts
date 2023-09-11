import GithubAPI from "@/services/ockokit";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse<unknown>>
) {
  const { method } = req;

  if (method === "GET") {
    const { username } = req.query;

    if (!username) {
      res.status(400).json({ message: "Username is required.", data: {} });
      return;
    }
    const usernames: string[] = [];
    const repositories: UserRepositories[] = [];
    const GH = new GithubAPI();

    const { data: users } = await GH.searchUser(String(username));

    users.items.forEach((user) => {
      if (usernames.length < 5) usernames.push(user.login);
    });

    await Promise.all(
      usernames.map(async (username) => {
        const { data: repos } = await GH.getRepositories(username);

        repositories.push({
          owner: username,
          repositories: repos.map((repo) => {
            return {
              name: String(repo.name),
              description: repo.description ?? "-",
              stargazers_count: Number(repo.stargazers_count),
              url: String(repo.html_url),
            };
          }),
        });
      })
    );

    res.status(200).json({
      message: "Successfully retrieving repositories.",
      data: repositories,
    });
  } else {
    res.status(404).json({ message: "Resource not found.", data: {} });
  }
}
