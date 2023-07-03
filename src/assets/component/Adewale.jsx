import React from "react";
import pig from "../component/pigyvestimage.jpg";

function Adewale() {
  return (
    <>
      <section className="displaypiggy">
        <div className="right">
          <h2 className="titlemeet">Meet Saver</h2>

          <a
            className="link"
            target="_blank"
            href="https://blog.piggyvest.com/save/meetapiggyvestsaver-undefined/"
          >
            <svg
              style={{ width: "33", height: "33" }}
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16.2173"
                cy="16.1587"
                r="16.0254"
                fill="white"
              ></circle>
              <path
                d="M18.6211 10.5498L17.4913 11.6796L21.1611 15.3574L8.20461 15.3574L8.20461 16.96L21.1611 16.96L17.4833 20.6378L18.6211 21.7676L24.23 16.1587L18.6211 10.5498Z"
                fill="#2295F2"
              ></path>
            </svg>
            Meet saver of the month
          </a>
        </div>
        <div className="left">
          <img src={pig} className="piggy8" alt="" />
        </div>
      </section>
    </>
  );
}

export default Adewale;
