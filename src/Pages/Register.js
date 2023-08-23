import React from "react";
import './Register.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../components/Firebase-config";

function Register() {
    const direction = useNavigate();
    const [registerPassword, setRegisterPassword] = useState("");
    const [email, setEmail] = useState("");

    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const register = async () => {
        if (!isEmailValid(email)) {
            alert("Improper email entered");
            return;
        }

        try {
            const user = await createUserWithEmailAndPassword(auth, email, registerPassword);
            const usersRef = db.collection("users").doc(email);
            const res = await usersRef.set({
                email: email
            });
            console.log('resss', res);
        } catch (error) {
            console.log('errrr', error);
        }

        direction("/Userportal");
    }

    return (
        <>
            <div className="formContainer">
                <form className="form">
                    <input
                        type="email"
                        placeholder="E-mail Address"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={registerPassword}
                        onChange={(event) => setRegisterPassword(event.target.value)}
                    />
                    <button type="button" onClick={register}>
                        Register
                    </button>
                </form>
            </div>
        </>
    );
}

export default Register;



// <input type="email" placeholder="E-mail Address" id="email" name="email"
// value={email} onChange={(e) => setEmail(e.target.value)}/>
// <input type="password" placeholder="Password" id="password" name="password"
// value={pass} onChange={(e) => setPass(e.target.value)}/>
// <button type="submit"  onClick={""}>Login</button>
// <button type="submit"  onClick={""}>Register</button>

