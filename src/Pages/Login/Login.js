import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase-config";
import "./Login.css";

function Login() {
  const [emailList, setEmailList] = useState([]);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const Navigate = useNavigate();

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const login = async (e) => {
    e.preventDefault();
    if (!isEmailValid(loginEmail)) {
      alert("Improper email entered");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(
        (userCred) => {
          console.log(userCred);
          setEmailList([...emailList, loginEmail]);
        }
      );
    } catch (error) {
      console.log(error.message);
    }

    console.log(emailList);
    Navigate("/Userportal");
  };

  return (
    <>
      <div className="formContainer">
        <form className="form" autoComplete="off" onSubmit={login}>
          <input
            type="email"
            placeholder="E-mail Address"
            id="email"
            name="email"
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
            value={loginPassword}
            // error ={!loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
