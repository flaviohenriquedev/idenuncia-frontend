import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li>
                    <a href={"/"}>HOME</a>
                </li>
                <li>
                    <a href={"/public/complaint"}>DENÚNCIA</a>
                </li>
            </ul>
        </nav>
    )
}