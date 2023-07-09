import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const QuestionCard = ({ question_text, id }) => {
  return (
    <Link  className={styles.linkStyle} href={`/question/${id}`} passHref>
      <div className={styles.link}>
          <p className={styles.question_text}>{question_text}</p>
      </div>
    </Link>
  );
};

export default QuestionCard;
