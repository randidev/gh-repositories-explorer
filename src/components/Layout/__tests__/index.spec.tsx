import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "..";

describe("Layout", () => {
  it("check if layout wrapping correct content", () => {
    render(<Layout>This is the content</Layout>);
    const main = screen.getByTestId("main-content");
    expect(main.textContent).toEqual("This is the content");
  });
});
