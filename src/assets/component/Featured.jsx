import React from "react";
import imga from "../component/featured1.png";
import imgb from "../component/featured2.png";
import imgc from "../component/featured3.png";

function Featured() {
  return (
    <>
      <section className="featured">
        <h4 className="gggg">As featured in</h4>

        <img src={imga} className="featuredstyle" alt="" />
        <img src={imgb} className="featuredstyle" alt="" />
        <img src={imgc} className="featuredstyle" alt="" />
      </section>
    </>
  );
}

export default Featured;
