/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react"
import Header from "./Header"

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should render the component with the correct links", () => {
      render(<Header />)

      const ListLink = screen.getByRole("link", { name: "LIST" })
      const CreateLink = screen.getByRole("link", { name: "CREATE" });

      expect(ListLink).toBeInTheDocument();
      expect(CreateLink).toBeInTheDocument();
    })
  })

  /* describe("When it is clicked in each link", () => {
    test("Then it should redirect to the correct path", () => {
      const Link = jest.mock("next/link", () => ({ children }) => children);

      render(<Header />)

      const ListLink = fireEvent(screen.getByRole("link", { name: "LIST" }), Link);

    })
  }) */
})