import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import './Dashboard.css';
import EmailSelector from "../Main-Finctionality/Emailselector.js";
import TicketCreator from "../Main-Finctionality/TicketCreator";
import ExpenseList from "../Main-Finctionality/ExpenseList";
function Dashboard(){

 const [status,setStatus] = useState(false)
 const [status2,setStatus2] = useState(false)

 function updaetStatus(){
    setStatus(true)
 }
 // price = 1000 ;
    // const noOfUser = 3;

    // function selectUsers(){
    //   const list = [];
    //     users  = {
    //         name : "",
    //         topay : "",
    //         paid : "",
    //   }
    //   list.push(users) ;
    // }

    // function split(tp1,tp2,tp3){

    //     var sum =0; 
    //     for(var i=0;i<arguments.length;i++){
    //        sum += arguments[i];
    //         if(sum > price)
    //         {Error(splited shares mount to sum more than what is to be paid)}
    //         else if(sum < price)
    //         {
    //             error(amount splitted is less than the total price)
    //         }
            
    //     user1.toPay = tp1,
    //     user1.toPay = tp2,
    //     user1.toPay = tp3,
        

    // }
    // function paid (p1,p2,p3){
    //     //depending upon the selected user
    //     user1.pay = p1,
    //     user2.pay= p2,
    //     user3.pay= p3

    // }
    // // By default
    // function splitEqually(price,noOfUser){
    //     var temp = price / noOfUser
    // }
    // function payedByYou(){
    //     // user1 paid total price
    //     var owed = price - temp;
    //      var finalOwed = owed / (users-1)
    //      // update enetered user  object with details of owed and owe

    // }
    // function save(){
    //     // update in firerbase db owe,owed,balance
    //     // create an array of object orders (price , date, description, paid users ,borrowed / lent ) and store on firebase
    // }

    return(
        <>
        <div className="section">
            <div className="dashboard-head">
                <div className="heading">
                    <h3>Dashboard</h3>
                </div>
                <div className="button1">
                <Button variant="contained" color='warning'size = "large" onClick={updaetStatus}>Add expense</Button>
                </div>
                <div className="button2">
                <Button variant="contained" color='primary'size = "large">Settle Up</Button>
                </div>
            </div>
            <div className="detail-section">
                <div className="balance-section">
                    <p>Total Balance</p>
                </div>
                <div className="owe-section">
                    <p>
                        You owe
                    </p>
                </div>
                <div className="owed-section">
                    <p>You owed</p>
                </div>
            </div>
            <div className="detail-box">
                <div className="owe">
                    <h5>you owe</h5>
                </div>
                <div className="owed">
                <h5>you are owed</h5>
                </div>
            </div>
            {status && (<EmailSelector setStatus={setStatus} setStatus2={setStatus2}  />)}
            {status2 && (<TicketCreator setStatus2={setStatus2} />)}
            { (<ExpenseList />)}
        </div>
        </>
    )
}
export default Dashboard
// value={''} onChange={(e) =>setTemp(e.target.value)}