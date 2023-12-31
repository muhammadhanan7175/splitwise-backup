import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../Firebase/Firebase-config";
import DebitCreditSection from "../../components/DebitCredit/DebirCreditSection";
import RectangularCard from "../../components/Card/Card";
import "./History.css";

function History() {
  const [cardData, setCardData] = useState([]);
  const [debitAmount, setDebitAmount] = useState(0);
  const [creditAmount, setCreditAmount] = useState(0);

  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let totalDebit = 0;
        let totalCredit = 0;

        const adminCollection = await db.collection("admin").get();
        const fetchedCardData = adminCollection.docs
          .filter((doc) => {
            const data = doc.data();
            return data.adminDetails.loggerEmail === user?.email;
          })
          .map((doc) => {
            const data = doc.data();
            const loggerToPay = parseFloat(data.adminDetails.loggerToPay);
            const loggerPaid = parseFloat(data.adminDetails.loggerPaid);
            const balance = loggerPaid - loggerToPay;
            const debitCreditField = balance >= 0 ? "Debit" : "Credit";
            const guestDetails = data.guestDetails;
            const guestBalances = guestDetails.map((guest) => {
              const guestToPay = parseFloat(guest.toPay);
              const guestPaid = parseFloat(guest.paid);
              const guestBalance = guestPaid - guestToPay;
              return {
                userId: guest.userId,
                balance: guestBalance,
              };
            });
            const additionalInfo =
              debitCreditField === "Debit"
                ? guestBalances
                    .filter((guest) => guest.balance < 0)
                    .map(
                      (guest) =>
                        `${guest.userId} owes ${Math.abs(guest.balance)}`
                    )
                : guestBalances
                    .filter((guest) => guest.balance > 0)
                    .map(
                      (guest) => `you owe ${guest.userId} : ${guest.balance}`
                    );

            if (debitCreditField === "Debit") {
              totalDebit += balance;
            } else {
              totalCredit += -balance;
            }

            return {
              date: data.date,
              description: data.description,
              price: `$${data.price}`,
              paid: data.adminDetails.loggerPaid,
              debit: debitCreditField === "Debit" ? balance.toString() : "0",
              credit:
                debitCreditField === "Credit" ? (-balance).toString() : "0",
              additionalInfo,
            };
          });

        setDebitAmount(totalDebit);
        setCreditAmount(totalCredit);

        setCardData(fetchedCardData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user?.email]);

  return (
    <>
      <div className="app">
        <h1>Financial Transactions</h1>
        <DebitCreditSection
          debitAmount={debitAmount}
          creditAmount={creditAmount}
        />
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
