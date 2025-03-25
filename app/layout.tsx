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
        <div className='navigation'>
          <Link className={"trans " + rubik.className} href="/extrapage">Extra</Link>
          <Link className={"trans " + rubik.className} href="/competitions">Competitions</Link>
          <Link className={"trans " + rubik.className} href="/projects">Projects</Link>
          <Link className={"trans " + rubik.className} href="/about">About</Link>
          <Link className={"trans " + rubik.className} href="/">Front</Link>
        </div>
        {children}
      </body>
    </html>
  )
}