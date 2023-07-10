import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from "./styles.module.css";
import Navbar from '@/components/navbar/Navbar';


    const NewQuestion = () => {

        const router = useRouter();
        const [question_text, setQuestionText] = useState('');
    
        const addNewQuestion = async () => {
            const token = localStorage.getItem("forumUserToken");
    
            try {
                const response = await axios.post("http://localhost:8000/question", {
                    question_text: question_text,
                }, {
                    headers: {
                        'Authorization': token
                    }
                });
    
                console.log("response", response);
                router.push("/");
            } catch (err) {
                console.error("Error adding new question:", err);
            }
        };        
    

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.newQuestion}>
                <div className={styles.header}>Įrašykite naują klausimą FEUA3 grupėje :</div>
                <div className={styles.inputWrapper}>
                <input className={styles.input}
                value={question_text}
                onChange={(event) => setQuestionText(event.target.value)}
                placeholder="Vieta Jūsų klausimui"
                />
                </div>
                <button className={styles.button} onClick={() => addNewQuestion()}>Įkelti klausimą</button>
            </div>
        </div>
    );
};

export default NewQuestion;