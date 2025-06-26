"use client"

import React from 'react';
import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit message');
      }

      if (data.success) {
        setSubmissionStatus('Message sent successfully! We will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error: unknown) {
      console.error('Error:', error);
      setSubmissionStatus(`Error: ${error instanceof Error ? error.message : 'An unexpected error occurred'}`);
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
      }}>Contact Us</h1>

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
        }}>Get in Touch</h2>
        <p style={{
          color: '#4b5563',
          marginBottom: '1.5rem'
        }}>We would love to hear from you! Fill in the form below to send us a message.</p>

        <form onSubmit={handleSubmit} style={{
          display: 'grid',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div>
            <label htmlFor="name" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#4b5563',
              fontWeight: 500
            }}>Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #e5e7eb',
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label htmlFor="email" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#4b5563',
              fontWeight: 500
            }}>Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #e5e7eb',
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label htmlFor="message" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#4b5563',
              fontWeight: 500
            }}>Your Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #e5e7eb',
                fontSize: '1rem',
                minHeight: '100px',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 500
            }}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {submissionStatus && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            borderRadius: '0.5rem',
            backgroundColor: submissionStatus.includes('Error') ? '#fee2e2' : '#dcfce7',
            color: submissionStatus.includes('Error') ? '#ef4444' : '#166534',
            textAlign: 'center'
          }}>
            {submissionStatus}
          </div>
        )}
      </div>
    </div>
  );
}
