import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react"
import NavBar from '../components/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { mockCart } from "./testMocks";

describe('Navbar component', () => {

    it('renders links correctly', () => {
        render(<BrowserRouter><NavBar cart={[]}/></BrowserRouter>);
        expect(screen.getAllByRole('link')[0].textContent).toBe("Home");
        expect(screen.getAllByRole('link')[1].textContent).toBe("Menswear")
        expect(screen.getAllByRole('link')[2].textContent).toBe("Womenswear")
        expect(screen.getAllByRole('link')[3].textContent).toBe("Jewelery")
        expect(screen.getAllByRole('link')[4].textContent).toBe("Electronics")
    });

    it('renders correct number in the widget', () => {
        render(<BrowserRouter><NavBar cart={mockCart}/></BrowserRouter>);
        expect(screen.getAllByRole('link')[5].textContent).toBe("6")
    })

})