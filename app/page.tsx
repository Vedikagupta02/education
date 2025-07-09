"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '4rem 1rem 2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Hero Section */}
        <section style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#1f2937',
            lineHeight: '1.2',
            marginBottom: '1rem'
          }}>Welcome to LearnHub</h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            marginBottom: '2rem'
          }}>Empowering students with personalized learning experiences and career guidance</p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <Link href="/classes" style={{
              textDecoration: 'none',
              color: '#ffffff'
            }}>
              <button style={{
                backgroundColor: '#3b82f6',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: 500,
                transition: 'background-color 0.2s ease'
              }}>Start Learning</button>
            </Link>
            <Link href="/career-help" style={{
              textDecoration: 'none',
              color: '#3b82f6'
            }}>
              <button style={{
                backgroundColor: 'transparent',
                border: '2px solid #3b82f6',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: 500,
                transition: 'color 0.2s ease, border-color 0.2s ease'
              }}>Career Help</button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section style={{
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#1f2937',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>Our Features</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              backgroundColor: '#ffffff',
              padding: '2rem',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              transition: 'box-shadow 0.2s ease'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <span style={{
                  fontSize: '2rem',
                  color: '#3b82f6'
                }}>📚</span>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1f2937'
                }}>Comprehensive Learning</h3>
              </div>
              <p style={{
                color: '#4b5563',
                lineHeight: '1.6'
              }}>Access a wide range of subjects and resources for Classes 3-10</p>
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              padding: '2rem',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              transition: 'box-shadow 0.2s ease'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <span style={{
                  fontSize: '2rem',
                  color: '#3b82f6'
                }}>🤖</span>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1f2937'
                }}>AI Guidance</h3>
              </div>
              <p style={{
                color: '#4b5563',
                lineHeight: '1.6'
              }}>Get personalized career recommendations using AI technology</p>
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              padding: '2rem',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              transition: 'box-shadow 0.2s ease'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <span style={{
                  fontSize: '2rem',
                  color: '#3b82f6'
                }}>📝</span>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1f2937'
                }}>Interactive Modules</h3>
              </div>
              <p style={{
                color: '#4b5563',
                lineHeight: '1.6'
              }}>Engaging assignments and interactive learning materials</p>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section style={{
          backgroundColor: '#ffffff',
          padding: '3rem 0',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#1f2937',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>Quick Links</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem',
            padding: '0 2rem'
          }}>
            <div style={{
              borderLeft: '2px solid #3b82f6',
              paddingLeft: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: '1rem'
              }}>Classes</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <li>
                  <Link href="/class/3" style={{
                    textDecoration: 'none',
                    color: '#4b5563',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0',
                    transition: 'all 0.2s ease',
                    borderBottom: '1px solid #e5e7eb'
                  }}>Class 3</Link>
                </li>
                <li>
                  <Link href="/class/4" style={{
                    textDecoration: 'none',
                    color: '#4b5563',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0',
                    transition: 'all 0.2s ease',
                    borderBottom: '1px solid #e5e7eb'
                  }}>Class 4</Link>
                </li>
                <li>
                  <Link href="/class/5" style={{
                    textDecoration: 'none',
                    color: '#4b5563',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0',
                    transition: 'all 0.2s ease'
                  }}>Class 5</Link>
                </li>
              </ul>
            </div>

            <div style={{
              borderLeft: '2px solid #3b82f6',
              paddingLeft: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: '1rem'
              }}>Resources</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <li>
                  <Link href="/classes" style={{
                    textDecoration: 'none',
                    color: '#4b5563',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0',
                    transition: 'all 0.2s ease',
                    borderBottom: '1px solid #e5e7eb'
                  }}>All Classes</Link>
                </li>
                <li>
                  <Link href="/career-help" style={{
                    textDecoration: 'none',
                    color: '#4b5563',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0',
                    transition: 'all 0.2s ease',
                    borderBottom: '1px solid #e5e7eb'
                  }}>Career Guidance</Link>
                </li>
                <li>
                  <Link href="/contact" style={{
                    textDecoration: 'none',
                    color: '#4b5563',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0',
                    transition: 'all 0.2s ease'
                  }}>Contact Us</Link>
                </li>
              </ul>
            </div>

            <div style={{
              borderLeft: '2px solid #3b82f6',
              paddingLeft: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: '1rem'
              }}>Support</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <li>
                  <Link href="/faq" style={{
                    textDecoration: 'none',
                    color: '#4b5563',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0',
                    transition: 'all 0.2s ease',
                    borderBottom: '1px solid #e5e7eb'
                  }}>FAQ</Link>
                </li>
                <li>
                  <Link href="/privacy" style={{
                    textDecoration: 'none',
                    color: '#4b5563',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0',
                    transition: 'all 0.2s ease',
                    borderBottom: '1px solid #e5e7eb'
                  }}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" style={{
                    textDecoration: 'none',
                    color: '#4b5563',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0',
                    transition: 'all 0.2s ease'
                  }}>Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
