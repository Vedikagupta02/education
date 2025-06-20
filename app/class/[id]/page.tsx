"use client";

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import styles from './page.module.css';

const subjects = [
  { id: 'math', title: 'Mathematics' },
  { id: 'science', title: 'Science' },
  { id: 'english', title: 'English' },
  { id: 'social-science', title: 'Social Science' },
];

export default function ClassPage({ params }: { params: { id: string } }) {
  return (
    <main className={styles.main}>
      <Header />
      
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
