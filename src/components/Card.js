import React from 'react';

const RectangularCard = ({ date, description, price, topay, paid }) => {
  return (
    <div className="rectangular-card">
      <div className="card-field">Date: {date}</div>
      <div className="card-field">Description: {description}</div>
      <div className="card-field">Price: {price}</div>
      <div className="card-field">To Pay: {topay}</div>
      <div className="card-field">Paid: {paid}</div>
    </div>
  );
};

export default RectangularCard;
