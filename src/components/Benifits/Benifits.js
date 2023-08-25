import React from "react";
import icon from "../../assets/svgs/logo.png";
import "./Benifits.css";
function Benifits() {
  return (
    <>
      <div className="contained">
        <div className="headings">
          <h2>The Whole Nine Yards</h2>
        </div>
        <div className="list-container">
          <div className="listbox">
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Add groups and friends</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Split expenses, record debts</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Equal or unequal splits</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Split by % or shares</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Calculate total balances</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Suggested repayments</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Simplify debts</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Recurring expenses</h6>
            </div>
          </div>
          <div className="listbox">
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Offline mode</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Cloud sync</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Spending totals</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Categorize expenses</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Easy CSV exports</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>7+ languages</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>100+ currencies</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Payment integrations</h6>
            </div>
          </div>
          <div className="listbox">
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>A totally ad-free experience</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Currency conversion</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Receipt scanning</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Itemization</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Charts and graphs</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Expense search</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Save default splits</h6>
            </div>
            <div className="listitem">
              <img src={icon} alt="logo"></img>
              <h6>Early access to new features</h6>
            </div>
          </div>
        </div>
        <div className="headings">
          <div className="heading1">
            <img src={icon} alt="logo"></img>
            <h6>Core features</h6>
          </div>
          <div className="heading2">
            <img src={icon} alt="logo"></img>
            <h6>Pro features</h6>
          </div>
        </div>
      </div>
    </>
  );
}
export default Benifits;
