import styles from '../../styles/projects.module.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export default function About() {
    return (
      <section className={"informationlist"}>
        <div className={styles.information + " " + rubik.className}>
          <h1 className={styles.aboutheader}>
            Full Stack Development
          </h1>
          <div className={styles.aboutdesc}>
            <b className={styles.projectname}>Noir</b>
            <ul className={styles.bullets}>
              <li>Noir is a Web3 messaging application for secure communication between Ethererum addresses.</li>
              <li>Added functionality to mint Non-Fungible Tokens (NFTs) on sites, while also adding unique user profiles and an address lookup.</li>
              <li>Made with <b className={styles.emph}>React.js</b> for front-end and <b className={styles.emph}>NFT.storage</b>, <b className={styles.emph}>XMTP.js</b>, <b className={styles.emph}>NFTPort</b> for back-end services.</li>
            </ul>
            <b className={styles.projectname}>Personal Website (this site)</b>
            <ul className={styles.bullets}>
              <li>Made with <b className={styles.emph}>Next.js</b> for front-end and <b className={styles.emph}>PostgreSQL</b> for back-end services.</li>
            </ul>
            <b className={styles.projectname}>Pathfinding Visualizer</b>
            <ul className={styles.bullets}>
              <li>coming soon...</li>
            </ul>
          </div>

          <h1 className={styles.aboutheader}>
            Cool Software
          </h1>
          <div className={styles.aboutdesc}>
            <b className={styles.projectname}>Virtual CPU</b>
            <ul className={styles.bullets}>
              <li>Developed a virtual 32-bit CPU capable of running standard RISC-V assembly instructions from the ground-up.</li>
              <li>Implemented a 2-stage pipeline into the virtual CPU, increasing throughput of instructions by 100%.</li>
              <li>Made with <b className={styles.emph}>Logisim</b> and based off of <b className={styles.emph}>RISC-V</b> standard instructions set architecture.</li>
            </ul>
          </div>

          <h1 className={styles.aboutheader}>
            Other
          </h1>
          <div className={styles.aboutdesc}>
            <b className={styles.projectname}>GPS-Denied Lidar Localization</b>
            <ul className={styles.bullets}>
              <li>Tested and integrated open source LiDAR localization packages to enable 6 Degrees of Freedom (6DOF) localization on the racetrack.</li>
              <li>Ran performance and hardware evaluations on integrated package to measure translational error and bandwidth.</li>
              <li>Made with <b className={styles.emph}>C++</b> and <b className={styles.emph}>bash</b>.</li>
            </ul>
          </div>
        </div>
      </section>
    )
}