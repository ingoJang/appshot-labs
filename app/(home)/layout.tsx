import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'AppShot Labs | App Store Screenshot Design Studio',
  description: 'AppShot Labs is a design studio focused on App Store visuals and screenshot systems. We create custom-designed visuals that help apps get chosen, not just noticed.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'AppShot Labs | App Store Screenshot Design Studio',
    description: 'AppShot Labs is a design studio focused on App Store visuals and screenshot systems. We create custom-designed visuals that help apps get chosen, not just noticed.',
    url: SITE_URL,
  },
  twitter: {
    title: 'AppShot Labs | App Store Screenshot Design Studio',
    description: 'AppShot Labs is a design studio focused on App Store visuals and screenshot systems. We create custom-designed visuals that help apps get chosen, not just noticed.',
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
