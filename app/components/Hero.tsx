// components/Hero.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import React from 'react'; // Import React

const Hero: React.FC = () => { // <-- Add type here
  return (
    // ... rest of the component code is the same
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.name}>
            Hi, Im Cathrine Sandrina 👋
          </h1>
          <p className={styles.tagline}>
            Tech Dreamer & Aspiring Developer
          </p>
          <p className={styles.bio}>
            I build accessible, responsive, and user-friendly web applications. Currently diving deep into the world of modern web development with Next.js and React.
          </p>
          <div className={styles.ctaContainer}>
            <Link href="/projects" className={styles.ctaButton}>
              View My Work
            </Link>
            <Link href="/" className={`${styles.ctaButton} ${styles.secondary}`}>
              Back to Home
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src="/me.png"
            alt="A picture of Cathrine Sandrina"
            width={350}
            height={350}
            className={styles.profileImage}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;