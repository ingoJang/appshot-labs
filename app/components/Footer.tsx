import Link from 'next/link';
import { WHATSAPP_LINK } from '@/lib/constants';

export default function Footer() {
  const links = [
    { href: '/', label: 'Home', isExternal: false },
    { href: '/about', label: 'About', isExternal: false },
    { href: WHATSAPP_LINK, label: 'Get Started', isExternal: true },
    { href: 'https://x.com/ingokr95', label: '', isExternal: true, icon: 'fab fa-x-twitter' },
  ];

  return (
    <footer className="bg-[#1B2230] text-[#e8e8ea] py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        {/* Links Row */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
          {links.map((link) => (
            <span key={link.href} className="inline-flex items-center">
              {link.isExternal ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] hover:text-white hover:underline transition-colors inline-flex items-center"
                  aria-label={link.label === 'Get Started' ? 'Contact via WhatsApp' : link.icon ? 'Follow us on X' : undefined}
                >
                  {link.icon ? <i className={link.icon}></i> : link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-[12px] hover:text-white hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </span>
          ))}
        </div>

        {/* Copyright Row */}
        <div className="text-center text-[12px] opacity-60 mt-3">
          Copyright © 2026 AppShot Labs All rights reserved.
        </div>
      </div>
    </footer>
  );
}
