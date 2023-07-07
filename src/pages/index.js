import axios from "axios";
import React, { useState } from "react";
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
    </div>
  );
};

export default MainPage;

export async function getServerSideProps(ctx) {
  console.log(ctx.query.id);
  try {
    const response = await axios.get("http://localhost:8000/questions_without_comments");
    const { data } = response;

    return { props: { allQuestions: data } }; 
  } catch (err) {
    console.log(err);
    return { props: { allQuestions: [] } }; 
  }
}