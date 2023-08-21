import React from "react";
import mobile5 from "../assets/svgs/Mobile1.png"
import Button from '@mui/material/Button';
import './Section4.css';
function Section4(){
    return(
        <>
        <div  className="containers" >
            
            <div className="texts">
                <div className="text box">
                    <h2>Get even more with PRO</h2>
                    <p>Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!</p>
                </div>
                <Button variant="contained" color="secondary" size = "large">Sign Up</Button>
            </div>
            <div className="images">
                <img src={mobile5} alt="mobile"></img>
            </div>
        </div>
        </>
    )
}
export default Section4