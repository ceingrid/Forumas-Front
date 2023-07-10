import React, {useState} from 'react';
import styles from './styles.module.css';
import axios from "axios";
import Navbar from '@/components/navbar/Navbar';
import { useRouter } from 'next/router'; // new import

const SignUp = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [passwordPlaceholder, setPasswordPlaceholder] = useState("Slaptažodis"); // New state variable for password placeholder

const router = useRouter(); // new line

const createUser = async () => {
    try {
  const response =  await axios.post("http://localhost:8000/user", {
    name: name,
    email: email,
    password: password,
  }); 

  console.log('response', response);
  router.push("/");
} catch (error) {
    console.error('Error creating user:', error);
}
};

  return (
    <>
    < Navbar />
    <p className={styles.title}>Naujo nario registracija:</p>
        <div className={styles.form}>
        <input className={styles.input}
        value={name} onChange={(event) => setName(event.target.value)}
        placeholder='Jūsų vardas'
        />
        </div>
        <div className={styles.form}>
        <input className={styles.input}
        value={email} onChange={(event) => setEmail(event.target.value)}
        placeholder='El. pašto adresas'
        />
        </div>
        <div className={styles.form}>
        <input className={styles.input}
        type="password"
        value={password} 
        onChange={(event) => {
            setPassword(event.target.value);
            setPasswordPlaceholder(event.target.value ? "New placeholder when text is input" : "Slaptažodis"); // Change placeholder based on input
          }}
        placeholder={passwordPlaceholder}
        />
    </div>
    <div className={styles.buttonWrapper}>
    <button onClick={createUser} className={styles.button}>Sukurti vartotoją</button>
    </div>
    </>
  )
}

export default SignUp;
