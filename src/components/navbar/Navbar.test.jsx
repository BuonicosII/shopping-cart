import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react"
import NavBar from "./Navbar.jsx";
import { BrowserRouter } from 'react-router-dom'

describe('Navbar component', () => {

    it('renders home link', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        expect(screen.getAllByRole('link')[0].textContent).toMatch(/home/i);
    });
    
    it('renders shop link', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        expect(screen.getAllByRole('link')[1].textContent).toBe('Menswear');
    })
})