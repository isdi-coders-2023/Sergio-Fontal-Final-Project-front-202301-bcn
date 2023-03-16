import { createBrowserRouter, RouteObject, Navigate } from "react-router-dom";
import App from "../components/App/App";
import LoginPage from "../pages/LoginPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/login"}></Navigate>,
      },
      { path: "/login", element: <LoginPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getComponentRouter = (ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);
