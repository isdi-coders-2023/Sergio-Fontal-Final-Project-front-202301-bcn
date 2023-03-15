import { PreloadedState } from "redux";
import { getComponentRouter, router } from "../router/router";
import { RootState } from "../store";
import { renderWithProviders } from "./renderWithProviders";
import { RouterProvider } from "react-router";

export const renderRouterWithProviders = (
  ui?: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const routerWithProvider = ui ? getComponentRouter(ui) : router;

  return renderWithProviders(
    <RouterProvider router={routerWithProvider}></RouterProvider>,
    preloadedState
  );
};
