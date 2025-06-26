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
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '2rem'
    }}>
      {/* Navigation */}
      <div style={{
        backgroundColor: '#fff',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <Link href="/" style={{
              textDecoration: 'none',
              color: '#337ab7'
            }}>
              <span style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#337ab7'
              }}>LearnHub</span>
            </Link>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '30%'
          }}>
            <Link href="/classes" style={{
              textDecoration: 'none',
              color: '#337ab7',
              marginRight: '1rem'
            }}>Classes</Link>
            <Link href="/career-help" style={{
              textDecoration: 'none',
              color: '#337ab7',
              marginRight: '1rem'
            }}>Career Guidance</Link>
            <Link href="/about" style={{
              textDecoration: 'none',
              color: '#337ab7'
            }}>About</Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          backgroundColor: 'linear-gradient(to right, #3498db, #9b59b6)',
          color: '#fff',
          padding: '4rem',
          marginTop: '2rem'
        }}
      >
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            AI-Powered Career Guidance
          </h1>
          <p style={{
            fontSize: '1.5rem',
            marginBottom: '2rem'
          }}>
            Get personalized career recommendations based on your interests and skills
          </p>
        </div>
      </motion.div>

      {/* Career Guidance Form */}
      <section style={{
        padding: '4rem'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>Tell Us About Yourself</h2>
          
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}>Preferred Subjects</label>
              <textarea
                name="subjects"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
                placeholder="Enter your preferred subjects..."
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}>Future Goals</label>
              <textarea
                name="goals"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
                placeholder="Enter your future goals..."
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}>Problem Solving Skills</label>
              <textarea
                name="problem-solving"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
                placeholder="Describe your problem-solving skills..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: '#3b82f6',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              {loading ? 'Generating Advice...' : 'Get Career Advice'}
            </button>
          </form>

          {error && (
            <div style={{
              backgroundColor: '#fee2e2',
              color: '#b91c1c',
              padding: '1rem',
              borderRadius: '0.5rem',
              marginBottom: '1rem'
            }}>
              {error}
            </div>
          )}

          {advice && (
            <div style={{
              backgroundColor: '#f3f4f6',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              marginTop: '1.5rem'
            }} dangerouslySetInnerHTML={{ __html: advice }} />
          )}
        </div>
      </section>
    </main>
  );
}
