import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Button from "./Button";

describe("Given a Button componet", () => {
  describe("When it receives 'Login!' text and its rendered", () => {
    test("The it should show a button with 'Login!' on it", () => {
      const text = "Login!";

      renderWithProviders(<Button text={text} />);

      const expectedButton = screen.getByRole("button", { name: text });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
