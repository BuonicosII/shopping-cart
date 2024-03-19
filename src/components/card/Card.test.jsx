import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Card from "./Card";

describe('Card component', () => {

    it('Calls callback fn on button click', async () => {

        const callback = vi.fn()

        const user = userEvent.setup()

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
        render(<Card someObj={mockObj} callback={callback}/>);

        const button = screen.getByRole("button", { name: "Add to Cart" })

        await user.click(button);


        expect(callback).toHaveBeenCalled();
    });
    
})