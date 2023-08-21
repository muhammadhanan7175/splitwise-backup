import React from "react";
import plane from "../assets/svgs/plane.png"
import './Section1.css';
import Button from '@mui/material/Button';
function Section1 (){
    return (
        <>
        <div className="container" >

            <div className="text-section">
           <div className="text">
           <h3>Less Stress When 
                sharing expense 
                with your bestfreind</h3>
           </div>

            <div className="text2"> 
            <p>Keep track of your shared expenses and balances with housemates,
                 trips, groups, friends, and family</p>
            </div >
            <div className="btn">
            <Button variant="contained" color='success'size = "large">Signup</Button>
            </div>
            <h6> Free for iphone android and web </h6>
            </div>

            <div className="image-section">
            <img src={plane} alt="plane"></img>
            </div>

        </div>
        </>
    )
}
export default Section1