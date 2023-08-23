import React from 'react';
import './Card.css'; // Import your CSS file for RectangularCard

const RectangularCard = ({ date, description, price, topay, paid, debit, credit, additionalInfo }) => {
  return (
    <div className="rectangular-card">
      <div className="card-field">Date: {date}</div>
      <div className="card-field">Description: {description}</div>
      <div className="card-field">Price: {price}</div>
      <div className="card-field">Paid: {paid}</div>
      <div className="card-field">Debit: {debit}</div>
      <div className="card-field">Credit: {credit}</div>
      <div className="card-field additional-info">Additional Info:</div>
      <ul className="additional-info-list">
        {additionalInfo.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>
    </div>
  );
};

export default RectangularCard;




