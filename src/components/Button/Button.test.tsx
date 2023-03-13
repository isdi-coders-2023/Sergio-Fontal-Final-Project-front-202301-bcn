import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import petTheme from "../../styles/petTheme";
import Button from "./Button";

describe("Given a Button componet", () => {
  describe("When it receives 'Login!' text and its rendered", () => {
    test("The it should show a button with 'Login!' on it", () => {
      const text = "Login!";

      render(
        <ThemeProvider theme={petTheme}>
          <Button text={text} />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", { name: text });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
