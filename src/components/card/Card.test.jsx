import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Card from "./Card";

const mockObj = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}

describe('Card component', () => {

    it('renders all object infos', () => {
        const callback = vi.fn()

        render(<Card someObj={mockObj} callback={callback}/>);
        const category = screen.getByText("Men's clothing");
        const productImage = screen.getAllByRole("img");
        const title = screen.getByRole("heading", {level: 3})
        const reviewNum = screen.getByText(/reviews/)
        const price = screen.getByText(/€/)

        expect(category).toBeVisible()
        expect(productImage[0].src).toBe(mockObj.image)
        expect(title.textContent).toBe(mockObj.title)
        expect(reviewNum.textContent).toBe(`${mockObj.rating.count} reviews`)
        expect(price.textContent).toBe(`${mockObj.price} €`)
        expect(productImage[1].src).toMatch(/fullstar.png/)
        expect(productImage[2].src).toMatch(/fullstar.png/)
        expect(productImage[3].src).toMatch(/fullstar.png/)
        expect(productImage[4].src).toMatch(/halfstar.png/)
        expect(productImage[5].src).toMatch(/emptystar.png/)
    })

    it('updates the number state', async () => {
        const callback = vi.fn()

        render(<Card someObj={mockObj} callback={callback}/>);

        const user = userEvent.setup()
        const quantity = screen.getByText(/Quantity:/)
        const countPlus = screen.getByRole("button", { name: "△" })
        const countMinus = screen.getByRole("button", { name: "▽" })

        await user.click(countPlus);
        await user.click(countPlus);
        await user.click(countMinus);

        expect(quantity.textContent).toBe("Quantity: 2");
    })

    it('Calls callback fn on button click', async () => {

        const callback = vi.fn()

        const user = userEvent.setup()

        render(<Card someObj={mockObj} callback={callback}/>);

        const button = screen.getByRole("button", { name: "Add to Cart" })

        await user.click(button);


        expect(callback).toHaveBeenCalled();
    });
    
})