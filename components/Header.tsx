"use client";
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/" className={styles.navLink}>
            <h1>LearnHub</h1>
          </Link>
        </div>
        <div className={styles.navToggle}>
          <button className={styles.toggleButton} aria-label="Toggle navigation">
            <span className={styles.toggleIcon}></span>
          </button>
        </div>
        <ul className={styles.navItems}>
          <li>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link href="/classes" className={styles.navLink}>Classes</Link>
          </li>
          <li>
            <Link href="/career-help" className={styles.navLink}>AI Career Help</Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
