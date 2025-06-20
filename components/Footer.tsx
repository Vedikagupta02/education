"use client";

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.logoSection}>
            <h2>EduGuide</h2>
            <p>Your trusted partner in educational guidance</p>
          </div>

          <div className={styles.linksSection}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/career-help">Career Help</Link></li>
              <li><Link href="/classes">Classes</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.contactSection}>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="mailto:info@eduguide.com">info@eduguide.com</a>
              </li>
              <li>
                <a href="tel:+1234567890">+1 234 567 890</a>
              </li>
              <li>123 Education Street, Learning City</li>
            </ul>
          </div>

          <div className={styles.socialSection}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">
                <span className="icon-facebook"></span>
              </a>
              <a href="#" aria-label="Twitter">
                <span className="icon-twitter"></span>
              </a>
              <a href="#" aria-label="Instagram">
                <span className="icon-instagram"></span>
              </a>
              <a href="#" aria-label="LinkedIn">
                <span className="icon-linkedin"></span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} EduGuide. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #1e40af;
          color: white;
          padding: 4rem 2rem 2rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footerContent {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .logoSection h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .logoSection p {
          color: #e2e8f0;
        }

        .linksSection, .contactSection, .socialSection {
          h3 {
            margin-bottom: 1.5rem;
            color: white;
          }

          ul {
            list-style: none;
            padding: 0;
          }

          li {
            margin-bottom: 0.75rem;
          }

          a {
            color: #e2e8f0;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
              color: white;
            }
          }
        }

        .socialLinks {
          display: flex;
          gap: 1rem;

          a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.1);
            transition: background-color 0.2s;

            &:hover {
              background-color: rgba(255, 255, 255, 0.2);
            }

            .icon-facebook::before {
              content: 'F';
            }

            .icon-twitter::before {
              content: 'T';
            }

            .icon-instagram::before {
              content: 'I';
            }

            .icon-linkedin::before {
              content: 'L';
            }
          }
        }

        .copyright {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .footerContent {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
