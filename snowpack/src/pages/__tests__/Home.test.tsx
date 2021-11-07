import * as React from "react"
import { render } from "@testing-library/react"
import { expect } from "chai"
import Home from "@/pages/Home"

describe("<Home>", () => {
  it("the header title", () => {
    const { getByText } = render(<Home />)
    const linkElement = getByText(/Brecon Sound Forage/i)
    expect(document.body.contains(linkElement))
  })
})
