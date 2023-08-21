import React from "react";
import './Register.css';
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db , usersCollection } from "../components/Firebase-config";
import { doc, collection, setDoc } from "firebase/firestore";


function Register() {
    const direction = useNavigate();
    const [registerPassword, setRegisterPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPasssword] = useState("");
    // const emailCollection = collection(db,"mail")
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, registerPassword).then(async (userCred)=>{
                    console.log(userCred);
                
                });
                
            const usersRef = db.collection("users").doc(email)
            const res = await usersRef.set({
                email: email
            })
            console.log('resss', res)
        
        } 
        
        catch (error) {
            console.log('errrr', error);
        } 

       direction("/Userportal")
    }
    const logout = async () => {
        await signOut(auth)
    }
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((userCred)=>{
                console.log(userCred);
                
            });
            
        } catch (error) {
            console.log(error.message);
        }
    }

    // ... (other functions)

    return (
        <>
            <div className="formContainer">
                <form className="form">
                    <input type="email" placeholder="E-mail Address" id="email" name="email"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" id="password" name="password"
                        value={registerPassword} onChange={(event) => setRegisterPassword(event.target.value)} />
                    {/* <button type="button" onClick={""}>Login</button> */}
                    <button type="button" onClick={register}>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register;


// <input type="email" placeholder="E-mail Address" id="email" name="email"
// value={email} onChange={(e) => setEmail(e.target.value)}/>
// <input type="password" placeholder="Password" id="password" name="password"
// value={pass} onChange={(e) => setPass(e.target.value)}/>
// <button type="submit"  onClick={""}>Login</button>
// <button type="submit"  onClick={""}>Register</button>

