import { render, screen } from "@testing-library/react"
import { ActiveLink } from "."

jest.mock("next/router", () => {
	return {
		useRouter() {
			return {
				asPath: "/",
			}
		},
	}
})

describe("ActiveLink component", () => {
	it("should renders correctly", () => {
		render(
			<ActiveLink href="/" activeClassName="active">
				<a>Home</a>
			</ActiveLink>
		)

		expect(screen.getByText("Home")).toBeInTheDocument()
	})

	it("should add active class if link is active", () => {
		render(
			<ActiveLink href="/" activeClassName="active">
				<a>Home</a>
			</ActiveLink>
		)

		expect(screen.getByText("Home")).toHaveClass("active")
	})

	it("should not add active class if link is not active", () => {
		render(
			<ActiveLink href="/test/" activeClassName="active">
				<a>Home</a>
			</ActiveLink>
		)

		expect(screen.getByText("Home")).not.toHaveClass("active")
	})
})
