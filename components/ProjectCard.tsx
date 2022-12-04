import React from "react";
import styles from "../styles/Card.module.css";

export default function ProjectCard() {
  return (
    <div className="group">
      <div className={styles.card}>
        <div className={styles.cardgradient}></div>
        <div className={styles.cardcontent}>
            <h3 className=" font-bold text-2xl">
                Card Title
            </h3>
            <p className=" opacity-0 group-hover:opacity-100 text-sm lg:text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, odio iure totam ullam 
            </p>
        </div>
      </div>
    </div>
  );
}
