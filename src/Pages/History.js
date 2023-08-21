import React from "react";
import DebitCreditSection from '../components/DebirCreditSection';
import RectangularCard from '../components/Card';
import './History.css';
function History(){
   
    const cardData = [
        {
          date: '2023-08-21',
          description: 'Example expense',
          price: '$100',
          topay: '$100',
          paid: 'Yes',
        },
        // Add more card data here
      ];

    return(
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
    )
}
export default History