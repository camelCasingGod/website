import styles from '../styles/front.module.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className="center">
      <div className={styles.header + " " + rubik.className}>
        Ameya Phadnis
      </div>
    </section>
  )
}
