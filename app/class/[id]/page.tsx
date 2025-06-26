"use client";

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

interface Subject {
  id: string;
  title: string;
}

const subjects: Subject[] = [
  { id: 'math', title: 'Mathematics' },
  { id: 'science', title: 'Science' },
  { id: 'english', title: 'English' },
  { id: 'social-science', title: 'Social Science' },
];

interface ClassPageProps {
  params: {
    id: string;
  };
}

export default function ClassPage({ params }: ClassPageProps) {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Class {params.id}</h1>
        <p>Explore our subjects and learning resources</p>
      </section>

      <section className={styles.subjectsGrid}>
        {subjects.map((subject) => (
          <div key={subject.id} className={styles.subjectCard}>
            <h3>{subject.title}</h3>
            <p>Start Learning</p>
            <button className={styles.startButton}>View Resources</button>
          </div>
        ))}
      </section>
    </main>
  );
}
