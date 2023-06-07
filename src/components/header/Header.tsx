import styles from './Header.module.css'
import Navbar from "@/components/navbar/Navbar";


export default function Header() {
    return (
        <header className={styles.header}>
            <Navbar />
        </header>
    )
}