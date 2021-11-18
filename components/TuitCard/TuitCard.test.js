/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react"
import TuitCard from "./TuitCard"

describe("Given a TuitCard component", () => {
  describe("When it is called", () => {
    test("Then it should render the component ", () => {
      render(<TuitCard />)
    })
  })
})