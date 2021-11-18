import { rest } from "msw";

const posts = [
  {
    text: "Haced el favor de tuitear algo",
    likes: 0,
    date: "2021-11-18T19:25:11.242Z",
    __v: 0,
    id: "6196a8972b3606a082f33ffe",
  },
  {
    text: "Te gustan los calamares?",
    likes: 0,
    date: "2021-11-18T19:26:53.603Z",
    __v: 0,
    id: "6196a8fd6077c8211f50fdb0",
  },
];

const apiUrl = "https://tuitah-sergio-adri.herokuapp.com/tuitah/";

const handlers = [
  rest.get(`${apiUrl}all`, (req, res, ctx) => res(ctx.json(posts))),
  rest.post(apiUrl, (req, res, ctx) => res(ctx.json(posts))),
  rest.post(apiUrl, (req, res, ctx) => res(ctx.json(posts))),
];

export default handlers;
