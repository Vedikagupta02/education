"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav style={{
        padding: '1rem 2rem',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <Link href="/" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#3b82f6'
          }}>
            LearnHub
          </Link>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            visibility: 'hidden'
          }}>
            <Link 
              href="/classes" 
              style={{
                color: '#4b5563',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
            >
              Classes
            </Link>
            <Link 
              href="/career-help" 
              style={{
                color: '#4b5563',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
            >
              Career Guidance
            </Link>
            <Link 
              href="/about" 
              style={{
                color: '#4b5563',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
            >
              About
            </Link>
          </div>
          <div>
            <button style={{
              color: '#71717a',
              border: 'none',
              background: 'none',
              cursor: 'pointer'
            }}>
              <svg style={{
                height: '1.5rem',
                width: '1.5rem'
              }} fill="none" viewBox="0 0 24 24" stroke="#71717a">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        backgroundImage: 'linear-gradient(to right, #3b82f6, #818cf8)',
        color: '#fff'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '6rem 2rem'
          }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem'
            }}>
              LearnHub - Your Personal Learning Companion
            </h1>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '2rem'
            }}>
              Personalized learning for students from Class 3 to Class 10
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              <Link 
                href="/classes" 
                style={{
                  backgroundColor: '#fff',
                  color: '#3b82f6',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s'
                }}
              >
                Explore Classes
              </Link>
              <Link 
                href="/career-help" 
                style={{
                  backgroundColor: '#3b82f6',
                  color: '#fff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s'
                }}
              >
                Get Career Help
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section style={{
        backgroundColor: '#f9fafb',
        padding: '4rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem'
          }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundColor: '#fff',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>
                📚
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                Personalized Learning
              </h3>
              <p style={{
                color: '#6b7280'
              }}>
                Tailored education plans for every student
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                backgroundColor: '#fff',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>
                🎯
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                Career Guidance
              </h3>
              <p style={{
                color: '#6b7280'
              }}>
                Expert career counseling and planning
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                backgroundColor: '#fff',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>
                ✨
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                Interactive Learning
              </h3>
              <p style={{
                color: '#6b7280'
              }}>
                Engaging lessons and activities
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        backgroundColor: '#f9fafb',
        padding: '4rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            What Our Students Say
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem'
          }}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              style={{
                backgroundColor: '#fff',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <p style={{
                color: '#6b7280',
                marginBottom: '1rem'
              }}>
                "LearnHub helped me understand complex concepts with ease. The personalized approach made all the difference!"
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  backgroundColor: '#dbeafe',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '1rem'
                }}>
                  <span style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#2563eb'
                  }}>
                    P
                  </span>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold'
                  }}>
                    Priya
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#6b7280'
                  }}>
                    Class 8 Student
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              style={{
                backgroundColor: '#fff',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <p style={{
                color: '#6b7280',
                marginBottom: '1rem'
              }}>
                "I love how LearnHub adapts to my learning pace. The tutors are amazing!"
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  backgroundColor: '#dbeafe',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '1rem'
                }}>
                  <span style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#2563eb'
                  }}>
                    R
                  </span>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold'
                  }}>
                    Rohan
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#6b7280'
                  }}>
                    Class 6 Student
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        backgroundColor: '#2563eb',
        color: '#fff',
        padding: '4rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Start Your Learning Journey Today
          </h2>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2rem'
          }}>
            Join thousands of students who are achieving their academic goals with LearnHub
          </p>
          <Link 
            href="/classes" 
            style={{
              backgroundColor: '#fff',
              color: '#2563eb',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'background-color 0.3s'
            }}
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  )
}
