import axios from "axios";
import React, { useState } from "react";
import Link from 'next/link';
import styles from "./styles.module.css";
import QuestionCard from "../components/questionCard/QuestionCard";
import Navbar from "@/components/navbar/Navbar";

const MainPage = ({allQuestions}) => {
  
  const [questions, setQuestions] = useState (allQuestions);

  return (
    <div>
      <Navbar />
      <div className={styles.questionsWrapper}>
        {questions.map((question) => (
          <div key={question.id}>
            <QuestionCard
              id={question.id}
              question_text={question.question_text}
            />
          </div>
        ))}
      </div>
      <div className={styles.buttonsWrapper}>
        <Link href="/">VISI KLAUSIMAI</Link>
        <Link href="/newQuestion">UŽDUOTI SAVO KLAUSIMĄ</Link>
      </div>
      </div>
  );
};

export default MainPage;

export async function getServerSideProps(ctx) {
  console.log(ctx.query.id);
  try {
    const response = await axios.get("http://localhost:8000/questions");
    const { data } = response;

    return { props: { allQuestions: data.questions } }; 
  } catch (err) {
    console.log('Error during data fetch:', err);
    return { props: { allQuestions: [] } }; 
  }
}
