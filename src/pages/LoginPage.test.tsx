import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../testUtils/renderRouterWithProviders";
import { renderWithProviders } from "../testUtils/renderWithProviders";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with text 'Sign into your account'", () => {
      renderRouterWithProviders(<LoginPage />);

      const text = "Sign into your account";

      const expectedHeading = screen.getByRole("heading", { name: text });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show an input labeled 'Email'", () => {
      renderWithProviders(<LoginPage />);
      const label = "Email";

      const expectedEmailInput = screen.getByLabelText(label);

      expect(expectedEmailInput).toBeInTheDocument();
    });

    test("Then it should show an input labeled 'Password'", () => {
      renderWithProviders(<LoginPage />);
      const label = "Password";

      const expectedPasswordInput = screen.getByLabelText(label);

      expect(expectedPasswordInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Login!' on it", () => {
      const textButton = "Login!";

      renderWithProviders(<LoginPage />);

      const expectedButton = screen.getByRole("button", { name: textButton });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show a link with text 'Register Now'", () => {
      renderRouterWithProviders();

      const linkText = "Register Now";

      const expectedText = screen.getByRole("link", { name: linkText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
