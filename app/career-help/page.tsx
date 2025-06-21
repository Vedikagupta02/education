"use client"

import React from 'react';
import Header from '@/components/Header';
import CareerHelpClient from './CareerHelpClient';

import { useState } from 'react';

export default function CareerHelpPage() {
  const [subjects, setSubjects] = useState('');
  const [goals, setGoals] = useState('');
  const [problemSolving, setProblemSolving] = useState('');
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getCareerAdvice = async () => {
    setIsLoading(true);
    setAdvice('');

    try {
      const response = await fetch('/api/career-advice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subjects,
          goals,
          problem_solving: problemSolving
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to get career advice');
      }

      if (data.success && data.advice) {
        setAdvice(data.advice);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error: unknown) {
      console.error('Error:', error);
      setAdvice(`Error: ${error instanceof Error ? error.message : 'An unexpected error occurred'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Career Counseling</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Subjects
            </label>
            <input
              type="text"
              value={subjects}
              onChange={(e) => setSubjects(e.target.value)}
              placeholder="e.g., math, science, history"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Future Goals
            </label>
            <input
              type="text"
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              placeholder="e.g., I want to be a doctor"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Problem Solving Skills
            </label>
            <input
              type="text"
              value={problemSolving}
              onChange={(e) => setProblemSolving(e.target.value)}
              placeholder="e.g., I love problem solving"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={getCareerAdvice}
            disabled={isLoading}
            className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Getting Advice...' : 'Get Career Advice'}
          </button>

          {advice && (
            <div className="mt-6 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Career Advice</h2>
              <div className="prose max-w-none">
                {advice}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
