import styles from '../../styles/about.module.css'
import { Rubik } from 'next/font/google'
import postgres from 'postgres'

const sql = postgres({
  host:'localhost',
  port:5432,
  database:'website',
  username:'postgres',
  password:'pixelgun'
})
const rubik = Rubik({ subsets: ['latin'] })

const age = await sql `SELECT * FROM age`.values();

export default function About() {
    return (
      <section className={"informationlist"}>
        <div className={styles.information + " " + rubik.className}>
          <h1 className={styles.aboutheader}>
            Background
          </h1>
          <div className={styles.aboutdesc}>
            <p>
              Hi! I'm Ameya, a 3rd-Year student at University of California, Berkeley.
              I'm a {age[0] + "-year old"} passionate and driven software engineer interested in web development, data science, and computer security, and I'm eager to tackle challenging, meaningful problems.
            </p>
          </div>
        </div>

        <div className={styles.information + " " + rubik.className}>
          <h1 className={styles.aboutheader}>
            Coursework
          </h1>
          <div className={styles.aboutdesc}>
            Electrical Engineering (EECS)
            <ul className={styles.bullets}>
              <li>EECS 16A/B: Designing Information Devices and Systems I/II</li>
              <li>EECS 126: Probability and Random Processes</li>
              <li>EECS 127: Optimization Models in Engineering</li>
              <li>EECS 106A: Introduction to Robotics</li>
            </ul>
            Computer Science (CS)
            <ul className={styles.bullets}>
              <li>CS 61A: Structure and Interpretation of Computer Programs</li>
              <li>CS 61B: Data Structures and Algorithms</li>
              <li>CS 61C: Machine Structures and Computer Architecture</li>
              <li>CS 161: Computer Security</li>
              <li>CS 162: Operating Systems</li>
              <li>CS 189: Machine Learning</li>
              <li>CS 198-2: Introduction to Quantitative Finance</li>
              <li>CS 198-4: Introduction to Blockchain</li>
            </ul>
            Data Science (DATA)
            <ul className={styles.bullets}>
              <li>DATA 8: Foundations of Data Science</li>
              <li>DATA 100: Principles of Data Science</li>
            </ul>
            Other
            <ul className={styles.bullets}>
              <li>Physics 7A/B: Kinematics, Rotations, Waves, Electricity, Magnetism</li>
              <li>Math 53: Multivariable Calculus</li>
            </ul>
          </div>
        </div>
      </section>
    )
}