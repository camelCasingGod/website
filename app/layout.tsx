'use client';

import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: '/competitions', label: 'Competitions' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/', label: 'Front' },
  ];

  return (
    <html lang="en">
      <body>
        <div className="navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`trans ${rubik.className} ${
                pathname === item.href ? 'active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
