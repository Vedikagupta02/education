"use client";
import Link from 'next/link';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '1rem 2rem'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Link href="/" style={{
            textDecoration: 'none',
            color: '#3b82f6',
            fontWeight: 'bold',
            fontSize: '1.5rem'
          }}>
            <h1>LearnHub</h1>
          </Link>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <button style={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            color: '#71717a'
          }}>
            <span style={{
              display: 'block',
              width: '30px',
              height: '3px',
              backgroundColor: '#71717a',
              marginBottom: '5px'
            }}></span>
            <span style={{
              display: 'block',
              width: '30px',
              height: '3px',
              backgroundColor: '#71717a',
              marginBottom: '5px'
            }}></span>
            <span style={{
              display: 'block',
              width: '30px',
              height: '3px',
              backgroundColor: '#71717a'
            }}></span>
          </button>
        </div>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          padding: 0,
          gap: '2rem'
        }}>
          <li>
            <Link href="/" style={{
              textDecoration: 'none',
              color: '#4b5563',
              transition: 'color 0.3s'
            }}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/classes" style={{
              textDecoration: 'none',
              color: '#4b5563',
              transition: 'color 0.3s'
            }}>
              Classes
            </Link>
          </li>
          <li>
            <Link href="/career-help" style={{
              textDecoration: 'none',
              color: '#4b5563',
              transition: 'color 0.3s'
            }}>
              AI Career Help
            </Link>
          </li>
          <li>
            <Link href="/contact" style={{
              textDecoration: 'none',
              color: '#4b5563',
              transition: 'color 0.3s'
            }}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
