"use client"

import React from 'react';
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
    <div style={{
      padding: '4rem 1rem',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 600,
        marginBottom: '2rem',
        color: '#1f2937'
      }}>Career Guidance</h1>

      <div style={{
        backgroundColor: '#f3f4f6',
        padding: '2rem',
        borderRadius: '0.5rem',
        marginBottom: '2rem'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1f2937'
        }}>Get Personalized Career Advice</h2>
        <p style={{
          color: '#4b5563',
          marginBottom: '1.5rem'
        }}>Fill in the details below to get tailored career recommendations based on your interests and skills.</p>

        <div style={{
          display: 'grid',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div>
            <label htmlFor="subjects" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#4b5563',
              fontWeight: 500
            }}>Preferred Subjects</label>
            <input
              type="text"
              id="subjects"
              value={subjects}
              onChange={(e) => setSubjects(e.target.value)}
              placeholder="e.g., Mathematics, Science, English"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #e5e7eb',
                fontSize: '1rem',
                transition: 'border-color 0.2s ease'
              }}
            />
          </div>

          <div>
            <label htmlFor="goals" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#4b5563',
              fontWeight: 500
            }}>Future Goals</label>
            <input
              type="text"
              id="goals"
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              placeholder="e.g., Engineering, Medicine, Business"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #e5e7eb',
                fontSize: '1rem',
                transition: 'border-color 0.2s ease'
              }}
            />
          </div>

          <div>
            <label htmlFor="problem-solving" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#4b5563',
              fontWeight: 500
            }}>Problem Solving Skills</label>
            <input
              type="text"
              id="problem-solving"
              value={problemSolving}
              onChange={(e) => setProblemSolving(e.target.value)}
              placeholder="e.g., Analytical, Creative, Teamwork"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #e5e7eb',
                fontSize: '1rem',
                transition: 'border-color 0.2s ease'
              }}
            />
          </div>

          <button
            onClick={getCareerAdvice}
            disabled={isLoading}
            style={{
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 500,
              transition: 'background-color 0.2s ease'
            }}
          >
            {isLoading ? 'Getting Advice...' : 'Get Career Advice'}
          </button>
        </div>
      </div>

      {advice && (
        <div style={{
          backgroundColor: '#ffffff',
          padding: '2rem',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            color: '#1f2937'
          }}>Career Recommendations</h2>
          <div style={{
            color: '#4b5563',
            lineHeight: '1.6',
            whiteSpace: 'pre-wrap'
          }}>{advice}</div>
        </div>
      )}
    </div>
  );
}
