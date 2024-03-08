import { useState } from 'react'
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

export default function NavBar () {

    return (
        <header className={styles.navbar}>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/router-test">Shop</Link>
            </nav>
        </header>
    )
}