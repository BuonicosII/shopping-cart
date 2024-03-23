import { Link } from "react-router-dom";
import styles from './Footer.module.css'

export default function Footer ( ) {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerDiv}>
                <h2>Help</h2>
                <nav className={styles.nav}>
                    <Link>Some link</Link>
                    <Link>Some link</Link>
                    <Link>Some link</Link>
                    <Link>Some link</Link>
                    <Link>Some link</Link>
                </nav>
            </div>
            <div className={styles.footerDiv}>
                <h2>About</h2>
                <nav className={styles.nav}>
                    <Link>Some link</Link>
                    <Link>Some link</Link>
                    <Link>Some link</Link>
                    <Link>Some link</Link>
                </nav>

            </div>
            <div className={styles.footerDiv}>
                <h2>Contacts</h2>
                <nav className={styles.nav}>
                    <Link>Some link</Link>
                </nav>
            </div>
        </footer>
    )

}