import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description: 'AppShot Labs is a design studio focused on App Store visuals and screenshot systems. Learn about our custom-designed visuals, fast production workflow, and ASO-driven approach.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'AppShot Labs | About',
    description: 'AppShot Labs is a design studio focused on App Store visuals and screenshot systems. Learn about our custom-designed visuals, fast production workflow, and ASO-driven approach.',
    url: `${SITE_URL}/about`,
  },
  twitter: {
    title: 'AppShot Labs | About',
    description: 'AppShot Labs is a design studio focused on App Store visuals and screenshot systems.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
