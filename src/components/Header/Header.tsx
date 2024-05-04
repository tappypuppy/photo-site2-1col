import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header_box}>
      <div className={styles.inner}>
        <h1 className={styles.header_title}>PHOTO BOOK 2</h1>
      </div>
    </header>
  );
}

export default Header;
