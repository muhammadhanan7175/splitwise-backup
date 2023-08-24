import React from "react";
import "./DebitCreditSection.css";

const DebitCreditSection = ({ debitAmount, creditAmount }) => {
  return (
    <div className="debit-credit-section">
      <div className="debit-section">
        <h2>Debit</h2>
        <p>
          Total Debit:{" "}
          <span className="debit-amount">${debitAmount.toFixed(2)}</span>
        </p>
      </div>
      <div className="credit-section">
        <h2>Credit</h2>
        <p>
          Total Credit:{" "}
          <span className="credit-amount">${creditAmount.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default DebitCreditSection;
