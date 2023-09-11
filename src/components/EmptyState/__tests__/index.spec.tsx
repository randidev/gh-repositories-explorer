import React from "react";
import { render, screen } from "@testing-library/react";
import EmptyState from "../index";

describe("Empty State", () => {
  it("check if Empty state is showing", () => {
    render(<EmptyState message="No records found." />);
    const buttonElement = screen.getByText("No records found.");
    expect(buttonElement).toBeDefined();
  });
});
