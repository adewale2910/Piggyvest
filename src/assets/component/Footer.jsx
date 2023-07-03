import React from "react";
import imgdog from "../component/1234.webp";

function Footer() {
  return (
    <>
      <footer classNameName="footer">
        <div className="container">
          <div className="row1">
            <div classNameName="col-md-2m img-container">
              <a className="logo py-5" href="/">
                <img
                  src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_40ddb359c1/logo_40ddb359c1.svg"
                  alt="PiggyVest Logo"
                  style={{ width: "191", height: "41" }}
                ></img>
              </a>
              <img src={imgdog} className="s1234567s" alt="" />
            </div>
            <div className="col-md-2s products">
              <p className="parage">Products</p>
              <a className="" href="/piggybank">
                Piggybank
              </a>
              <a className="" href="/invest">
                Invest
              </a>
              <a className="" href="/safelock">
                Safelock
              </a>
              <a className="" href="/targets">
                Target Savings
              </a>
              <a className="" href="/flex-naira">
                Flex Naira
              </a>
            </div>
            <div className="col-md-2s company">
              <p className="parage">Company</p>
              <a href="/about">About</a>
              <a href="/faq">FAQs</a>
              <a target="_blank" href="https://blog.piggyvest.com/">
                Blog
              </a>
            </div>
            <div className="col-md-2x legal">
              <p className="parage">Legal</p>
              <a href="/terms">Terms</a>
              <a href="/privacy">Privacy</a>
              <a href="/security">Security</a>
            </div>
            <div className="col-md-2m connect">
              <div className="socials">
                <ul
                  className="flex--1 jc-fe s
                                    ocials"
                >
                  <li className="mr-10">
                    <a
                      className=""
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.facebook.com/PiggyBankNG/"
                    >
                      <i className="fa fa-facebook-square fa-2x"></i>
                    </a>
                  </li>
                  <li className="mr-10">
                    <a
                      className=""
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://mobile.twitter.com/PiggyBankNG/"
                    >
                      <i className="fa fa-twitter-square fa-2x"></i>
                    </a>
                  </li>
                  <li className="">
                    <a
                      className=""
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.instagram.com/piggybankng/"
                    >
                      <i className="fa fa-instagram fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <a
                className="text-right"
                href="https://goo.gl/maps/NpjEYTjJuzxCUM9X7"
              >
                Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
                Nigeria.
              </a>
              <a className="text-right" href="mailto:contact@piggyvest.com">
                contact@piggyvest.com
              </a>
              <a className="text-right" href="tel:+234700933933933">
                +234 700 933 933 933
              </a>
            </div>
          </div>
          <div className="about">
            <p className="text-center m-auto">
              Piggyvest (formerly piggybank.ng) is the leading online savings
              &amp; investing platform in Nigeria. For over 6 years, our
              customers have saved and invested billions of Naira that they
              would normally be tempted to spend.
            </p>
            <p className="text-center primary">
              2016 - 2023 PiggyTech Global Limited - RC 1405222
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
