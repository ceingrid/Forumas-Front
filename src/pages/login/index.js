import React, {useState} from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });

      console.log("response", response.data);
      localStrorage.setItem("forumUserToken", response.data.jwt);
      localStrorage.setItem("forumUserId", response.data.id);

      router.push("/questions");
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Prisijunkite</h1>
      <div className={styles.form}>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="El. pašto adresas"
          />
      </div>
      <div className={styles.form}>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Slaptažodis"
          />
        <button onClick={login} className={styles.button}>
          Prisijungti
        </button>
      </div>
    </div>
  );
};

export default LoginPage;