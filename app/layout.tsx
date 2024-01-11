import './globals.css';
import Link from 'next/link';
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link className={rubik.className} href="/">Front</Link>
          <Link className={rubik.className} href="/">About</Link>
          <Link className={rubik.className} href="/">Projects</Link>
          <Link className={rubik.className} href="/">Competitions</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}