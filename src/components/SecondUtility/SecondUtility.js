import React from "react";
import mobile3 from "../../assets/svgs/Mobile3.png";
import mobile4 from "../../assets/svgs/Mobile4.png";

import "./SecondUtility.css";
function SecondUtility() {
  return (
    <>
      <div className="container">
        <div className="demo-third">
          <div className="text">
            <h2>Add expenses easily</h2>
            <p>Quickly add expenses on the go before you forget who paid.</p>
          </div>
          <div className="img1">
            <img src={mobile3} alt="mobile"></img>
          </div>
        </div>
        <div className="demo-fourth">
          <div className="text">
            <h2>Pay friends back</h2>
            <p>
              Settle up with a friend and record any cash or online payment.
            </p>
          </div>
          <div className="img2">
            <img src={mobile4} alt="mobile"></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default SecondUtility;
