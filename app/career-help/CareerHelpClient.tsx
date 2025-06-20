// app/career-help/CareerHelpClient.tsx
"use client";

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CareerHelpClient() {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      subjects: formData.get('subjects'),
      goals: formData.get('goals'),
      problem_solving: formData.get('problem-solving')
    };

    try {
      const response = await fetch('/api/career-advice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setAdvice(result.advice);
      } else {
        setError('Failed to get career advice. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to the AI service. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">LearnHub</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/classes" className="text-gray-700 hover:text-blue-600">Classes</Link>
              <Link href="/career-help" className="text-gray-700 hover:text-blue-600">Career Guidance</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">
              AI-Powered Career Guidance
            </h1>
            <p className="text-xl mb-8">
              Get personalized career recommendations based on your interests and skills
            </p>
          </div>
        </div>
      </motion.div>

      {/* Career Guidance Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Tell Us About Yourself</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="subjects" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Subjects
                  </label>
                  <input
                    type="text"
                    id="subjects"
                    name="subjects"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Science, Math, English"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                    Future Goals
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Want to become a doctor, interested in technology"
                    required
                  />
                </div>

                <div className="col-span-full">
                  <label htmlFor="problem-solving" className="block text-sm font-medium text-gray-700 mb-2">
                    Problem-solving Skills
                  </label>
                  <textarea
                    id="problem-solving"
                    name="problem-solving"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Good at logical reasoning, quick learner"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {loading ? 'Generating Advice...' : 'Get Career Recommendation'}
              </button>
            </form>

            {error && (
              <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
                {error}
              </div>
            )}

            {advice && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 bg-blue-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">AI Career Counselor's Recommendation</h3>
                <div dangerouslySetInnerHTML={{ __html: advice }} />
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
