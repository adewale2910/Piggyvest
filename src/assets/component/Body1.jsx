import React from "react";
import img1 from "../component/piggy.png";
import img2 from "../component/card1.png";
import img3 from "../component/card2.png";
import img4 from "../component/rect.png";

function Body1() {
  return (
    <>
      <section className="header  mt-5 py-5">
        <div className="container">
          <div className="row ">
            <div className="col-6 w-50 ">
              <div className="text">
                <h1 className="text3">
                  The Better Way <br /> to Save  Invest.
                </h1>
                <p className="mt-10 mb-40">
                  PiggyVest helps over 4 million customers achieve their
                  financial
                  <br />
                  goals by helping them save and invest with ease.
                </p>
              </div>
              <div className="mt-10">
                <a
                  className="btn btn-primary"
                  target="_blank"
                  href="https://dashboard.piggyvest.com/register"
                >
                  Create free account
                </a>
                <div className="download mt-50 ">
                  <div className="down1">
                    {" "}
                    <a
                      className="download-btn font-14 fw-medium mr-16  "
                      target="_blank"
                      href="https://apps.apple.com/ng/app/piggyvest/id1263117994"
                    >
                      <img
                        src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/apple_icon_32ccc572ff/apple_icon_32ccc572ff.svg"
                        alt="download-apple"
                        style={{ width: "18", height: "22" }}
                      />
                      Get on iPhone
                    </a>{" "}
                  </div>

                  <div className="down2">
                    <a
                      className="download-btn font-14 fw-medium"
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.piggybankng.piggy"
                    >
                      <img
                        src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/google_icon_9867fc9be6/google_icon_9867fc9be6.svg"
                        alt="download-google"
                        style={{ width: "24", height: "24" }}
                      />
                      Get on Android
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 w-50 ">
              <div style={{ width: "auto", position: "relative" }}>
                <img src={img4} className="cada" alt="" />
                <div className="up">
                  <img src={img1} className="cad" alt="" />
                  <img src={img2} className=" cad1" alt="" />
                  <img src={img3} className="cad2" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body1;
