import React, { useState, useEffect } from "react";
import DebitCreditSection from "../components/DebirCreditSection";
import RectangularCard from "../components/Card";
import { db,auth } from "../components/Firebase-config";
import { useAuthState } from 'react-firebase-hooks/auth';
import "./History.css";

function History() {
  const [cardData, setCardData] = useState([]);
  // const [user] = useAuthState(auth);
  // console.log(user)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminCollection = await db.collection("admin").get();
        const fetchedCardData = adminCollection.docs.map((doc) => {
          const data = doc.data();
          return {
            date: data.date, // Set the date field from Firestore data
            description: data.description, // Set the description field from Firestore data
            price: `$${data.price}`, // Set the price field from Firestore data
            debit: "500", // Set the debit field (example value)
            credit: "0", // Set the credit field (example value)
          };
        });
        setCardData(fetchedCardData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="app">
        <h1>Financial Transactions</h1>
        <DebitCreditSection />
        <div className="card-container">
          {cardData.map((card, index) => (
            <RectangularCard key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default History;
