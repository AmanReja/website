import React from "react";
import Mask from "../assets/images/Mask.png";

const Section5 = () => {
  return (
    <>
      <div className="w-full h-[1934px] px-[80px] ">
        <div className="w-full h-[486px] bg-contain bg-no-repeat">
          <img className="w-full" src={Mask} alt="" />
          <div className="mt-[-200px] w-[400px] h-[419px] text-white border">
            <button className="bg-white text-black">WORK</button>
            <button className="bg-white text-[24px] text-black ">
              <button>Website Design for Digital Agency</button>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
