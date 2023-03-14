import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import petTheme from "../../styles/petTheme";
import LoginForm from "./LoginForm";

describe("Given EnventForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show an input labeled 'Email'", () => {
      const label = "Email";

      render(
        <ThemeProvider theme={petTheme}>
          <LoginForm />
        </ThemeProvider>
      );

      const expectedEmailInput = screen.getByLabelText(label);

      expect(expectedEmailInput).toBeInTheDocument();
    });

    test("Then it should show an input labeled 'Password'", () => {
      const label = "Password";

      render(
        <ThemeProvider theme={petTheme}>
          <LoginForm />
        </ThemeProvider>
      );

      const expectedPasswordInput = screen.getByLabelText(label);

      expect(expectedPasswordInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Login!' on it", () => {
      const textButton = "Login!";

      render(
        <ThemeProvider theme={petTheme}>
          <LoginForm />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", { name: textButton });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
