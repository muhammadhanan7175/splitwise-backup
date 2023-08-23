import React from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../components/Firebase-config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
    const [emailList, setEmailList] = useState([]);
    const direction = useNavigate();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const logout = async () => {
        await signOut(auth);
    };

    const login = async () => {
        if (!isEmailValid(loginEmail)) {
            alert("Improper email entered");
            return;
        }

        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((userCred) => {
                console.log(userCred);
                setEmailList([...emailList, loginEmail]);
            });

        } catch (error) {
            console.log(error.message);
        }
        
        console.log(emailList);
        direction("/Userportal");
    };

    return (
        <>
            <div className="formContainer">
                <form className="form">
                    <input
                        type="email"
                        placeholder="E-mail Address"
                        id="email"
                        name="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={loginPassword}
                        onChange={(event) => setLoginPassword(event.target.value)}
                    />
                    <button type="button" onClick={login}>
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;
