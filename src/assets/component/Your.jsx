import React from "react";
import imgsec from "../component/security.png";

function Your() {
  return (
    <>
      <div className="ml-auto">
        <img src={imgsec} className="sec" alt="security icon" />
      </div>
      <div className="priority">
        <h4 className="title security-title securitryicon">
          Your security is our priority{" "}
        </h4>
        <p className="text2">
          PiggyVest uses the highest level of Internet Security and it is
          secured by 256 bits SSL security encryption to ensure that your
          information is comepletely protected from fraud.
        </p>
        <a className="link fw-medium" href="/security">
          Learn more &gt;
        </a>
      </div>
    </>
  );
}

export default Your;
