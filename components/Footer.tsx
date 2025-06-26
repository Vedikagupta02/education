"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1e40af',
      color: '#fff',
      padding: '4rem 2rem 2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '1rem'
            }}>EduGuide</h2>
            <p style={{
              color: '#e2e8f0'
            }}>Your trusted partner in educational guidance</p>
          </div>

          <div>
            <h3 style={{
              marginBottom: '1.5rem'
            }}>Quick Links</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li>
                <Link href="/" style={{
                  textDecoration: 'none',
                  color: '#fff',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>Home</Link>
              </li>
              <li>
                <Link href="/career-help" style={{
                  textDecoration: 'none',
                  color: '#fff',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>Career Help</Link>
              </li>
              <li>
                <Link href="/classes" style={{
                  textDecoration: 'none',
                  color: '#fff',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>Classes</Link>
              </li>
              <li>
                <Link href="/contact" style={{
                  textDecoration: 'none',
                  color: '#fff',
                  display: 'block'
                }}>Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{
              marginBottom: '1.5rem'
            }}>Contact Us</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li>
                <a href="mailto:info@eduguide.com" style={{
                  textDecoration: 'none',
                  color: '#fff',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>info@eduguide.com</a>
              </li>
              <li>
                <a href="tel:+1234567890" style={{
                  textDecoration: 'none',
                  color: '#fff',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>+1 234 567 890</a>
              </li>
              <li style={{
                color: '#e2e8f0'
              }}>123 Education Street, Learning City</li>
            </ul>
          </div>

          <div>
            <h3 style={{
              marginBottom: '1.5rem'
            }}>Follow Us</h3>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a href="#" aria-label="Facebook" style={{
                color: '#fff',
                textDecoration: 'none'
              }}>
                <span className="icon-facebook" style={{
                  fontSize: '1.5rem'
                }}></span>
              </a>
              <a href="#" aria-label="Twitter" style={{
                color: '#fff',
                textDecoration: 'none'
              }}>
                <span className="icon-twitter" style={{
                  fontSize: '1.5rem'
                }}></span>
              </a>
              <a href="#" aria-label="Instagram" style={{
                color: '#fff',
                textDecoration: 'none'
              }}>
                <span className="icon-instagram" style={{
                  fontSize: '1.5rem'
                }}></span>
              </a>
              <a href="#" aria-label="LinkedIn" style={{
                color: '#fff',
                textDecoration: 'none'
              }}>
                <span className="icon-linkedin" style={{
                  fontSize: '1.5rem'
                }}></span>
              </a>
            </div>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem'
        }}>
          <p>&copy; {new Date().getFullYear()} EduGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
