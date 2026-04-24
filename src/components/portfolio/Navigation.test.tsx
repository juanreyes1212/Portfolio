import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";

const renderNav = (initialRoute = "/") =>
  render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Navigation />
    </MemoryRouter>
  );

describe("Navigation", () => {
  it("renders all nav links", () => {
    renderNav();
    expect(screen.getByText("Work")).toBeInTheDocument();
    expect(screen.getByText("Personal")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Resume")).toBeInTheDocument();
  });

  it("highlights active route", () => {
    renderNav("/work");
    const workLinks = screen.getAllByText("Work");
    const desktopLink = workLinks[0];
    expect(desktopLink).toHaveClass("text-primary");
  });

  it("renders Get In Touch mailto link", () => {
    renderNav();
    const ctaLinks = screen.getAllByText("Get In Touch");
    expect(ctaLinks[0].closest("a")).toHaveAttribute("href", "mailto:reyes1212@gmail.com");
  });

  it("toggles mobile menu", () => {
    renderNav();
    const menuButton = screen.getByLabelText("Open navigation menu");
    fireEvent.click(menuButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("renders logo linking to home", () => {
    renderNav();
    const logo = screen.getByText("JR").closest("a");
    expect(logo).toHaveAttribute("href", "/");
  });
});
