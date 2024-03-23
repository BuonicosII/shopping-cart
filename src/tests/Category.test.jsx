import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react"
import { Routes, Route, MemoryRouter, } from "react-router-dom";
import Category from "../components/category/Category";
import { mockProductArray } from "./testMocks";

describe('Category', () => {
    it("renders correct category and product based on url", () => {
        
        render(
        <MemoryRouter initialEntries={["/menswear"]}>
            <Routes>
                <Route path="/:name" element={<Category products={mockProductArray} />}>
                </Route>
            </Routes>
        </MemoryRouter>


        )

        const h1 = screen.getByRole("heading", {level: 1})
        const cardTitles = screen.getAllByRole("heading", {level: 3})

        expect(h1.textContent).toBe("Men's clothing")
        expect(cardTitles.length).toBe(1)
    })
})