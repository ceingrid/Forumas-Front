import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from "./styles.module.css";
import Navbar from '@/components/navbar/Navbar';

const NewQuestion = () => {

    const router = useRouter();
    const [question_text, setQuestionText] = useState('');

    const addNewQuestion = async () => {
        const response = await axios.post("http://localhost:8000/question", {
            questionText: question_text,
        });

        console.log("response", response);
        router.push("/");

    };

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.newQuestion}>
                <div className={styles.header}>Įrašykite naują klausima FEUA3 grupėje :</div>
                <input
                value={question_text}
                onChange={(event) => setQuestionText(event.target.value)}
                placeholder="Jūsų klausimas:"
                />
                <button className={styles.button} onClick={() => addNewQuestion()}>Įkelti klausimą</button>
            </div>
        </div>
    );
};

export default NewQuestion;