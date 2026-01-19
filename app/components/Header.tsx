'use client';

import Image from 'next/image';
import Link from 'next/link';
import { WHATSAPP_LINK } from '@/lib/constants';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-light py-4 md:py-6">
      <div className="max-w-content mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <Image
              src="/logo.png"
              alt="AppShot Labs - App Store Screenshot Design Studio"
              width={1706}
              height={160}
              className="h-[clamp(35px,4vw,50px)] w-auto"
              priority
            />
          </Link>

          {/* Navigation Links + CTA */}
          <nav className="flex items-center gap-6 md:gap-8">
            {/* Navigation Links */}
            <div className="hidden sm:flex items-center gap-6 md:gap-8">
              <Link
                href="/"
                className="text-sm md:text-base font-semibold text-gray-900 hover:text-gray-700 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </Link>
            </div>

            {/* Get Started Button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp"
              className="px-4 md:px-6 py-2 bg-[#1b2230] text-white rounded-full hover:bg-[#252d3d] transition-colors text-sm md:text-base font-medium whitespace-nowrap"
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
