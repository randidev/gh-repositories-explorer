import React from "react";
import { render, screen } from "@testing-library/react";
import RepositoryCard from "@/components/RepositoryCard";

const dummyRepo = {
  name: "Repository 1",
  description: "Description 123",
  stargazers_count: 5,
  url: "",
};

describe("Repository Card", () => {
  it("check if card showing all of the data correctly", () => {
    render(<RepositoryCard repo={dummyRepo} />);
    const title = screen.getByTestId("title");
    const description = screen.getByTestId("description");
    const stars = screen.getByTestId("stars");

    expect(title.textContent).toEqual("Repository 1");
    expect(description.textContent).toEqual("Description 123");
    expect(stars.textContent).toEqual("5");
  });
});
