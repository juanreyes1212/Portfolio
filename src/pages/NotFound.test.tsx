import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

const renderNotFound = () =>
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

describe("NotFound", () => {
  it("renders 404 heading", () => {
    renderNotFound();
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("renders page not found message", () => {
    renderNotFound();
    expect(screen.getByText("Page not found")).toBeInTheDocument();
  });

  it("has Return Home link pointing to /", () => {
    renderNotFound();
    const link = screen.getByText("Return Home").closest("a");
    expect(link).toHaveAttribute("href", "/");
  });
});
