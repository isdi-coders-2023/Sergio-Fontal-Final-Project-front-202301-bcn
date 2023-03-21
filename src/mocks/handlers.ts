import { rest } from "msw";
import petsTest from "./petsTest";

const apiUrl = process.env.REACT_APP_URL!;
const routes = { user: "/users", login: "/login", pets: "/pets" };

const handlers = [
  rest.post(`${apiUrl}${routes.user}${routes.login}`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "mockedToken" }));
  }),
  rest.get(`${apiUrl}${routes.pets}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(petsTest));
  }),
];

export default handlers;
