import React from "react";
import { Rubik } from "next/font/google";
import styles from "../../styles/competitions.module.css";
import { Card, CardContent } from "../components/Card";
import dynamic from "next/dynamic";
import ChartWrapper from "./ChartWrapper";

const rubik = Rubik({ subsets: ["latin"] });

export default function ExtraPage() {
  return (
    <section className={rubik.className + " informationlist"}>
      <div className={styles.information}>
        <h1 className={styles.compheader}>Extra Page</h1>
      </div>

      <div className="p-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="h-[500px]">
          <CardContent className="h-full">
            {/* TODO: Insert interactive global map here */}
            <div />
          </CardContent>
        </Card>

        <Card className="h-[500px]">
          <CardContent className="h-full">
            <ChartWrapper />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
