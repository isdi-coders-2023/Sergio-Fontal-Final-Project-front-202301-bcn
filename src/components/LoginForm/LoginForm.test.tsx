import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserCredentials } from "../../hooks/types";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import LoginForm from "./LoginForm";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given EnventForm component", () => {
  const user: UserCredentials = {
    email: "pet@petalert.com",
    password: "PetAdmin",
  };

  const emailLabel = "Email";
  const passwordLabel = "Password";

  describe("When its rendered", () => {
    test("Then it should show an input labeled 'Email'", () => {
      renderWithProviders(<LoginForm />);

      const expectedEmailInput = screen.getByLabelText(emailLabel);

      expect(expectedEmailInput).toBeInTheDocument();
    });

    test("Then it should show an input labeled 'Password'", () => {
      renderWithProviders(<LoginForm />);

      const expectedPasswordInput = screen.getByLabelText(passwordLabel);

      expect(expectedPasswordInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Login!' on it", () => {
      const textButton = "Login!";

      renderWithProviders(<LoginForm />);

      const expectedButton = screen.getByRole("button", { name: textButton });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When the user writes in the email input", () => {
    test("Then the value of this input changes", async () => {
      renderWithProviders(<LoginForm />);

      const emailInput = screen.getByLabelText(emailLabel);

      await waitFor(async () => await userEvent.type(emailInput, user.email));

      expect(emailInput).toHaveValue(user.email);
    });
  });

  describe("When the user writes in the password input", () => {
    test("Then the value of this input changes", async () => {
      renderWithProviders(<LoginForm />);

      const passwordInput = screen.getByLabelText(passwordLabel);

      await waitFor(
        async () => await userEvent.type(passwordInput, user.password)
      );

      expect(passwordInput).toHaveValue(user.password);
    });
  });

  describe("When the user submits the form", () => {
    test("The loginUser function should be called", async () => {
      renderWithProviders(<LoginForm />);

      const emailInput = screen.getByLabelText(emailLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);
      const submitButton = screen.getByRole("button");

      await waitFor(async () => {
        await userEvent.type(emailInput, user.email);
        await userEvent.type(passwordInput, user.password);
        await userEvent.click(submitButton);
      });

      expect(mockLoginUser).toHaveBeenCalledWith(user);
    });
  });
});
