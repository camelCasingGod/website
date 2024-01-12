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
        <nav className='header'>
          <Link className={rubik.className} href="/">Front</Link>
          <Link className={rubik.className} href="/about">About</Link>
          <Link className={rubik.className} href="/projects">Projects</Link>
          <Link className={rubik.className} href="/competitions">Competitions</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}