import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PageLayout from "./PageLayout";

const renderLayout = (props = {}) =>
  render(
    <MemoryRouter>
      <PageLayout {...props}>
        <div data-testid="child-content">Hello</div>
      </PageLayout>
    </MemoryRouter>
  );

describe("PageLayout", () => {
  it("renders children", () => {
    renderLayout();
    expect(screen.getByTestId("child-content")).toBeInTheDocument();
  });

  it("includes Navigation", () => {
    renderLayout();
    const logos = screen.getAllByText("JR");
    expect(logos.length).toBeGreaterThanOrEqual(1);
  });

  it("renders SkipToContent on every page", () => {
    renderLayout();
    expect(screen.getByText("Skip to main content")).toBeInTheDocument();
  });

  it("still renders SkipToContent when showSkipToContent prop is passed (back-compat)", () => {
    renderLayout({ showSkipToContent: true });
    expect(screen.getByText("Skip to main content")).toBeInTheDocument();
  });
});
