import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import petTheme from "./styles/petTheme";
import GlobalStyles from "./styles/GlobalStyles";
import { RouterProvider } from "react-router-dom";

import "@fontsource/baloo-bhai-2";
import "@fontsource/roboto";
import "@fontsource/sedgwick-ave";
import { router } from "./router/router";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={petTheme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
