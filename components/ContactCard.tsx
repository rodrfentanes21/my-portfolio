import React from "react";
import styles from "../styles/Contact.module.css";
import { Email, Linkedin, Phone } from "./svgs";

export default function ContactCard(props: any) {
  return (
    <a href={props.link} target="__blank" className={styles.card}>
      <div className={styles.cardgradient}></div>
      <div className={styles.cardcontent}>
        <div className="w-full h-full flex flex-col justify-start items-center py-2">
          <h6 className="text-xl">{props.title}</h6>
          <div className="grow w-full grid place-items-center">
            {props.svg === "phone" ? <Phone className="w-16 h-16" /> : ""}
            {props.svg === "linkedin" ? <Linkedin /> : ""}
            {props.svg === "email" ? <Email className="w-16 h-16" /> : ""}
          </div>
          <p className="text-xs font-thin">{props.aditional}</p>
        </div>
      </div>
    </a>
  );
}
