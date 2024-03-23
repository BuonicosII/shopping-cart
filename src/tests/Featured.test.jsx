import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react"
import Featured from "../components/featured/Featured";
import { mockProductArray } from "./testMocks";

describe('Featured', ()=> {

    it('renders the correct number of objects', () => {
        render(<Featured products={mockProductArray}/>)

        const cards = screen.getAllByRole("heading", {level: 3})

        expect(cards.length).toBe(3)
    })

})