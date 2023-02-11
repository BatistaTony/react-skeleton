import React from "react";
import { render, screen } from "@testing-library/react";
import Skeleton from "./skeleton";

const TEXT_DATA = "Testing Skeleton";

const TestComponent = () => (
  <div>
    <p>{TEXT_DATA}</p>
  </div>
);

const TestComponentWithSkeleton = Skeleton(TestComponent);

describe("react skeleton", () => {
  it("When it is Loading Content", () => {
    render(<TestComponentWithSkeleton isLoading={true} />);
    const linkElement = screen.getAllByTestId(/skeleton/i);
    console.log(linkElement[0]);
    expect(linkElement[0]).toBeInTheDocument();
  });

  it("When it is not Loading Content", () => {
    render(<TestComponentWithSkeleton isLoading={false} />);
    const linkElement = screen.getAllByText(TEXT_DATA);
    console.log(linkElement[0]);
    expect(linkElement[0]).toBeInTheDocument();
  });
});
