import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/Navbar";
import styles from "./styles.module.css";

const Question = () => {
    const [question, setQuestion] = useState();
    const router = useRouter();
    const { id } = router.query;

const fetchEvent = async () => {
const response = await axios.get(
`http://localhost:8000/question/${id}`
);

const { data } = response;
setQuestion(data);
console.log("response", response);
};
useEffect(() => {
if (id) {fetchEvent();
}}, [id]);


return (
    <>
    <Navbar />
    <div className={styles.pageWrapper}>
        {question && (
            <div className={styles.wrapper}>
                <h1>{question.question_text}</h1>
                    <button className={styles.button}>Atsakyti</button>
            </div>
        )}
    </div>
    </>
    );
}

export default Question;