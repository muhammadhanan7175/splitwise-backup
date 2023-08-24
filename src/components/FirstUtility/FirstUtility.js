import React from "react";
import "./FirstUtility.css";
import mobile1 from "../../assets/svgs/Mobile1.png";
import mobile2 from "../../assets/svgs/Mobile2.png";
function Section2() {
  return (
    <>
      <div className="section">
        <div className="demo-first">
          <div className="text">
            <h2>Track balances</h2>
            <p>Keep track of shared expenses, balances, and who owes who.</p>
          </div>
          <div className="image">
            <img src={mobile1} alt="mobile"></img>
          </div>
        </div>
        <div className="demo-second">
          <div className="text">
            <h2>Organize expenses</h2>
            <p>
              Split expenses with any group: trips, housemates, friends, and
              family.
            </p>
          </div>
          <div className="image">
            <img src={mobile2} alt="mobile"></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section2;
