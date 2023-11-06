import React from "react";
import heroimg from "../assets/heroimg.png";
import fncyunderline from "../assets/fncyunderline.png";

const Hero = () => {
  return (
    <div id="home">
      <div className="bg-red-100 align-element grid grid-row pb-28 md:grid-cols-2 items-center pt-6">
        <div className="text-center pt-8 h-full font-sans">
          <h1 className="text-5xl">Customer Reviews</h1>
          <p className="text-2xl mt-6 italic">
            "I love this pizza! I order it every week!"
          </p>
          <p className="text-2xl mt-6 italic">"My favorite Pizza in town!"</p>
          <p className="text-2xl mt-6 italic">
            "Fast and super friendly service."
          </p>
          <p className="text-2xl mt-6 italic">
            "Eating pizza here I feel like I'm in NYC."
          </p>
          <p className="text-2xl mt-6 italic">"The sauce is so so good!"</p>
          <center className="pt-8">
            <img src={fncyunderline} alt="Fancy Underline" />
          </center>
        </div>
        <div className="hidden md:block">
          <img
            src={heroimg}
            alt="Pizza"
            className="mx-auto w-196 h-92 object-cover opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
