"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <Link href="/" className="logo">
            <span className="text-2xl font-bold text-blue-600">LearnHub</span>
          </Link>
          <div className="nav-links hidden sm:flex items-center space-x-4">
            <Link 
              href="/classes" 
              className="nav-link text-gray-700 hover:text-blue-600 transition-colors"
            >
              Classes
            </Link>
            <Link 
              href="/career-help" 
              className="nav-link text-gray-700 hover:text-blue-600 transition-colors"
            >
              Career Guidance
            </Link>
            <Link 
              href="/about" 
              className="nav-link text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </div>
          <div className="sm:hidden">
            <button className="text-gray-500 hover:text-gray-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
        >
          <div className="nav-content py-24">
            <h1 className="hero-title text-5xl font-bold mb-6">
              LearnHub - Your Personal Learning Companion
            </h1>
            <p className="hero-subtitle text-xl mb-8">
              Personalized learning for students from Class 3 to Class 10
            </p>
            <div className="hero-buttons flex justify-center gap-4">
              <Link 
                href="/classes" 
                className="btn btn-primary bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Classes
              </Link>
              <Link 
                href="/career-help" 
                className="btn btn-secondary bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
              >
                Get Career Help
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features bg-gray-50 py-20">
        <div className="nav-content">
          <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="feature-card text-center p-6 bg-white rounded-lg shadow"
            >
              <div className="feature-icon text-4xl mb-4">📚</div>
              <h3 className="feature-title text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="feature-description text-gray-600">Tailored education plans for every student</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="feature-card text-center p-6 bg-white rounded-lg shadow"
            >
              <div className="feature-icon text-4xl mb-4">🎯</div>
              <h3 className="feature-title text-xl font-semibold mb-2">Career Guidance</h3>
              <p className="feature-description text-gray-600">Expert career counseling and planning</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="feature-card text-center p-6 bg-white rounded-lg shadow"
            >
              <div className="feature-icon text-4xl mb-4">✨</div>
              <h3 className="feature-title text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="feature-description text-gray-600">Engaging lessons and activities</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="nav-content">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <p className="text-gray-600 mb-4">
                "LearnHub helped me understand complex concepts with ease. The personalized approach made all the difference!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">P</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Priya</h4>
                  <p className="text-sm text-gray-500">Class 8 Student</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <p className="text-gray-600 mb-4">
                "I love how LearnHub adapts to my learning pace. The tutors are amazing!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">R</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Rohan</h4>
                  <p className="text-sm text-gray-500">Class 6 Student</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20">
        <div className="nav-content text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Learning Journey Today</h2>
          <p className="text-xl mb-8">Join thousands of students who are achieving their academic goals with LearnHub</p>
          <Link 
            href="/classes" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  )
}
