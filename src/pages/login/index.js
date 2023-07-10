import React, {useState} from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/Navbar";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Slaptažodis"); // New state variable for password placeholder

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });

      console.log("response", response.data);
      localStorage.setItem("forumUserToken", response.data.jwt);
      localStorage.setItem("forumUserId", response.data.id);

      router.push("/");
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.form}>
        <input className={styles.input}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="El. pašto adresas"
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
        <button onClick={login} className={styles.button}>
          Prisijungti
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
