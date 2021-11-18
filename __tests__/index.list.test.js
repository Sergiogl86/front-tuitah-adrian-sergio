/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import ListTuitah, { getServerSideProps } from "../pages/list/index";
import server from "../__mocks__/server";
import "whatwg-fetch";

beforeAll(() => {
  server.listen();
});
beforeEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

describe("Given a index list page", () => {
  describe("When it receives a list of post tuits", () => {
    test("Then it should render a list of tuits", () => {
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

      render(<ListTuitah posts={posts} />);

      const post = screen.getByRole("heading", { name: posts[0].text });

      screen.debug();

      expect(post).toBeInTheDocument();
    });
  });
});

describe("Given a getServerSideProps function", () => {
  describe("When it is call", () => {
    test("Then it should return a list of posts", async () => {
      const expectedPosts = [
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

      const expectedProps = {
        props: {
          posts: expectedPosts,
        },
      };

      const result = await getServerSideProps();

      expect(result).toEqual(expectedProps);
    });
  });
});
