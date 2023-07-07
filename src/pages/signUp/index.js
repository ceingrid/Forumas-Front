import React, {useState} from 'react';
import styles from './styles.module.css';
import axios from "axios";
import Navbar from '@/components/navbar/Navbar';

const SignUp = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

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
    <h1 className={styles.title}>Naujo nario registracija:</h1>

    <div className={styles.form}>
        <input 
        value={name} onChange={(event) => setName(event.target.value)}
        placeholder='Jūsų vardas'
        />
        <input 
        value={email} onChange={(event) => setEmail(event.target.value)}
        placeholder='El. pašto adresas'
        />
        <input 
        value={password} onChange={(event) => setPassword(event.target.value)}
        placeholder='Slaptažodis'
        />

      <button onClick={createUser} className={styles.button}>Sukurti vartotoją</button>
    </div>
    </>
  )
}

export default SignUp;