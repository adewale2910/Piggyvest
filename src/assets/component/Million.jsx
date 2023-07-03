import React from "react";

function Million() {
  return (
    <>
      <div className="t1234">
        <h4 className="million">4 Million + customers</h4>
        <p className="text">
          Since launching in 2016, over 4,000,000 people have used PiggyVest to
          manage their money better, avoid over-spending and be more
          accountable.
        </p>
        <div className="mt-10">
          <a
            className="btn btn-primary"
            target="_blank"
            href="https://dashboard.piggyvest.com/register"
          >
            Create free account
          </a>
          <div className="download mt-50">
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
    </>
  );
}

export default Million;
