import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../index.page";
import { rest } from "msw";
import { setupServer } from "msw/node";

import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

const server = setupServer(
  // Define a mock response for your API endpoint
  rest.get("/api/github/get-repos", (req, res, ctx) => {
    return res(
      ctx.json({
        message: "Successfully retrieving repositories.",
        data: [],
      })
    ); // Simulate an empty response
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Homepage", () => {
  it("check if form is showing", () => {
    act(() => {
      render(<Home />);
    });

    const usernameInput = screen.getByTestId("username-input");
    const searchButton = screen.getByTestId("search-button");

    expect(usernameInput).toBeDefined();
    expect(searchButton).toBeDefined();
  });

  it("check if username validation is working", () => {
    act(() => {
      render(<Home />);
    });

    const usernameInput = screen.getByTestId("username-input");
    const searchButton = screen.getByTestId("search-button");

    act(() => {
      fireEvent.change(usernameInput, { target: { value: "" } });
      fireEvent.click(searchButton);
    });

    const validation = screen.getByTestId("validation");

    expect(validation.textContent).toEqual("Username is required.");
  });

  // it("check if empty state is working", () => {
  //   const username = "nouserfound001122";

  //   act(() => {
  //     render(<Home />);
  //   });

  //   const usernameInput = screen.getByTestId("username-input");
  //   const searchButton = screen.getByTestId("search-button");

  //   act(() => {
  //     fireEvent.change(usernameInput, { target: { value: username } });
  //     fireEvent.click(searchButton);
  //   });

  //   const emptyState = screen.getByTestId("empty-state");

  //   expect(emptyState.textContent).toEqual("No repositories found for ");
  // });
});
