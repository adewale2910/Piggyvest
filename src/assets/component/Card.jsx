import React from "react";
import img1 from "../component/piggycard.png";
import img2 from "../component/safelock.png";
import img3 from "../component/target.png";
import img4 from "../component/flex.png";

function Card() {
  return (
    <>
      <section className="border4 d-flex ">
        <div className="col-md-4 d-md-flex w-50  ">
          <div className="content  ">
            <h3 class="title">
              4 ways to build <br /> your savings
            </h3>

            <p className="textp">
              Earn 5%-15% when you save with any <br /> of these PiggyVest
              plans.
            </p>
            <a
              href="https://dashboard.piggyvest.com/register"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Start Saving
            </a>
          </div>
        </div>

        <div className=" col-md-4 box home hover w-50 ">
          <div className="carddiv d-flex flex-wrap ">
            <div className="card w-50 mb-3  wwww">
              <div className="card-body">
                <img src={img1} className="beans" alt="" />
                <h5 className="title">Automated Savings</h5>
                <p className="text">
                  Build a dedicated savings faster on your terms automatically
                  or manually.
                </p>

                <div className="sub-title"> Piggybank</div>
              </div>
            </div>

            <div className="card w-50 mb-3 wwww">
              <div className="card-body">
                <img src={img2} className="beans2" alt="" />
                <h5 className="title">Fixed Savings</h5>
                <p className="text">
                  Lock money away for a fixed duration with no access to it
                  until maturity. It’s like having a custom fixed deposit.
                </p>
                <div className="sub-title">Safelock</div>
              </div>
            </div>

            <div className="card w-50 mb-3 wwww">
              <div className="card-body">
                <img src={img3} className="beans3" alt="" />
                <h5 className="title">Goal-oriented Savings</h5>
                <p className="text">
                  Reach all your savings goals faster. Save towards multiple
                  goals on your own or with a group.
                </p>
                <div className="sub-title">Target Savings</div>
              </div>
            </div>

            <div className="card w-50 mb-3 wwww">
              <div className="card-body">
                <img src={img4} className="beans4" alt="" />
                <h5 className="title">Flexible Savings</h5>
                <p className="text">
                  Save, transfer, withdraw, manage and organise your money for
                  free at any time.
                </p>
                <div className="sub-title">Flex Naira</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="col-md-4 d-md-flex al-i-c">
  <div className="content">
    <h3 className="title">4 ways to build your savings</h3>
    <p className="text">Earn 5%-15% when you save with any of these PiggyVest plans.</p>
    <a href="https://dashboard.piggyvest.com/register" target="_blank" rel="noreferrer" className="btn btn-primary">Start Saving</a>
    </div>
    </div>

    <div className="col-md-4 box home hover ">
      <a href="/piggybank">
      <img src={img1} className="beans" alt="" />
          <h5 className="title">Automated Savings</h5>
          <p className="text">Build a dedicated savings faster on your terms automatically or manually.</p>
          Piggybank
        </a></div>

        <div className="col-md-4 box home hover " >
          <a href="/safelock">
          <img src={img2} className="beans2" alt="" />
              <h5 className="title">Fixed Savings</h5>
              <p className="text">Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.</p>
              <div className="sub-title">Safelock</div>
              </a>
              </div>

              <div className="col-md-4 box home hover ">
                <a href="/targets">
                <img src={img3} className="beans3" alt="" />

                    <h5 className="title">Goal-oriented Savings</h5>
                    <p class="text">Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
                    <div className="sub-title">Target Savings</div>
                    </a>
                    </div>
                 

                    <div className="col-md-4 box home hover " >
                      <a href="/flex-naira">
                      <img src={img4} className="beans4" alt="" />
                          <h5 className="title">Flexible Savings</h5
                          ><p className="text">Save, transfer, withdraw, manage and organise your money for free at any time.</p>
                          <div className="sub-title">Flex Naira</div>
                          </a>
                          </div> */}
    </>
  );
}

export default Card;
