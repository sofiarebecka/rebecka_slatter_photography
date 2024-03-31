import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom' 
import React from "react";
import AboutPage from "./AboutPage";

describe("AboutPage", () => {

  test("it should render a block of text on the screen on the screen", () => {
    render(<AboutPage/>);

    const textContainer = screen.queryByTestId("text-container");
    const linesOfText = screen.queryAllByText(/([A-Za-z])\w+/)
    console.log(linesOfText.length);

    expect(textContainer).toBeInTheDocument();
    expect(linesOfText.length).toBeGreaterThan(10)
  });

});