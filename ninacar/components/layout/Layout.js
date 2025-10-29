import Link from "next/link"
import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <Link href="/">
        <h2>NINACAR</h2>
        <p>Choose and Buy Your Car</p>
        </Link>
    </header>
    <div className={styles.container}>{children}</div>
    <footer className={styles.footer}>
        <a href="#" target="_blank">
            Botostart
        </a>{" "}
        Next.js course | NinaCar Project &copy;
    </footer>
    </>
  )
}

export default Layout