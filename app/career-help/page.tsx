import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import CareerHelpClient from './CareerHelpClient';

export const metadata: Metadata = {
  title: 'AI Career Guidance | LearnHub',
  description: 'Get personalized career recommendations for Class 10 students choosing their stream after 10th',
};

export default function CareerHelpPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CareerHelpClient />
    </main>
  );
}
