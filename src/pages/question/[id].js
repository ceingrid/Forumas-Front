import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/Navbar";
import styles from "./styles.module.css";

const Question = () => {
  const [question, setQuestion] = useState();
  const [comment, setComment] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const fetchEvent = async () => {
    const response = await axios.get(`http://localhost:8000/question/${id}`);

    const { data } = response;
    setQuestion(data.question);
    console.log("response", response);
  };

  useEffect(() => {
    if (id) {
      fetchEvent();
    }
  }, [id]);

  const addNewComment = async () => {
    const token = localStorage.getItem("forumUserToken");

    try {
      const response = await axios.post(
        `http://localhost:8000/question/${id}/comment`,
        {
          comment_text: comment,
        },
        {
          headers: {
            'Authorization': token,
          },
        }
      );

      console.log("response", response);
      fetchEvent();
      setComment('');
    } catch (err) {
      console.error("Error adding new comment:", err);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.pageWrapper}>
        {question && (
          <>
            <div className={styles.question}>{question.question_text}</div>
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="Vieta Jūsų komentarui"
              />
            </div>
            <button className={styles.button} onClick={addNewComment}>
              Pridėti komentarą
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Question;
