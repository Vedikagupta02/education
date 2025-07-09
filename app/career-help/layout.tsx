import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Career Guidance | LearnHub',
  description: 'Get personalized career recommendations for Class 10 students choosing their stream after 10th',
};

export default function CareerHelpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}