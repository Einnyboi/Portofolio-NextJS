// components/Navbar.tsx
'use client';

import { useState } from 'react';
import React from 'react'; // Import React
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => { // <-- Add type here
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // ... rest of the component code is the same
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          CS.
        </Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div className={isOpen ? `${styles.bar} ${styles.animate}` : styles.bar}></div>
          <div className={isOpen ? `${styles.bar} ${styles.animate}` : styles.bar}></div>
          <div className={isOpen ? `${styles.bar} ${styles.animate}` : styles.bar}></div>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <ul className={isOpen ? `${styles.mobileMenu} ${styles.active}` : styles.mobileMenu}>
          <li onClick={toggleMenu}><Link href="/">Home</Link></li>
          <li onClick={toggleMenu}><Link href="/about">About</Link></li>
          <li onClick={toggleMenu}><Link href="/projects">Projects</Link></li>
          <li onClick={toggleMenu}><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;