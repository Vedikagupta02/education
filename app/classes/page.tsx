import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const classes = [
  { id: 3, title: 'Class 3' },
  { id: 4, title: 'Class 4' },
  { id: 5, title: 'Class 5' },
  { id: 6, title: 'Class 6' },
  { id: 7, title: 'Class 7' },
  { id: 8, title: 'Class 8' },
  { id: 9, title: 'Class 9' },
  { id: 10, title: 'Class 10' },
];

export default function ClassesPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Choose Your Class</h1>
        <p>Explore our personalized learning modules for each class</p>
      </section>

      <section className={styles.classesGrid}>
        {classes.map((cls) => (
          <Link
            key={cls.id}
            href={`/class/${cls.id}`}
            className={styles.classCard}
          >
            <h3>{cls.title}</h3>
            <p>Start learning now</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
