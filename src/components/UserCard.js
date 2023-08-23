import React from "react";

const UserCard = ({ date, description, price, paid, additionalInfo }) => {
  return (
    <div className="user-card">
      <div className="card-field">Date: {date}</div>
      <div className="card-field">Description: {description}</div>
      <div className="card-field">Price: {price}</div>
      <div className="card-field">Paid: {paid}</div>
      <div className="card-field">Additional Info:</div>
      <ul>
        {additionalInfo.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserCard;

        
