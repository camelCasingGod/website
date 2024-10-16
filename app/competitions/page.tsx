import styles from '../../styles/competitions.module.css';
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export default function Competitions() {
    return (
      <section className={rubik.className + " informationlist"}>
        <div className={styles.information}>
          <h1 className={styles.compheader}>Competitive Programming</h1>
          <div className={styles.description}>
            <p>Codeforces Rating: 1030, max: 1030</p>
          </div>
        </div>

        <div className={styles.information}>
          <h1 className={styles.compheader}>Chess</h1>
          <div className={styles.description}>
            <p>Chess.com Rating: 722, max: 800</p>
          </div>
        </div>
      </section>
    )
}