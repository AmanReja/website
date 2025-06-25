import React from "react";
import Man from "../assets/images/man2.png";
import Phone from "../assets/images/phone.png";
import Cal from "../assets/icons/cal.png";
import per1 from "../assets/persons/1.png";
import per2 from "../assets/persons/2.png";
import per3 from "../assets/persons/3.png";
import per4 from "../assets/persons/4.png";
import per5 from "../assets/persons/5.png";
import per6 from "../assets/persons/6.png";

const Section4 = () => {
  return (
    <>
      <div className="w-full h-[1520px]  px-[80px] ">
        <div className="flex flex-col items-start gap-[5px]   h-[200px] w-[412px]">
          <button className="bg-[#E14242] font-bold text-white rounded-[10px]">
            TEAM
          </button>
          <h1 className="text-[40px] font-semibold text-gray-700">
            Our Talented People
          </h1>
          <p className="text-[21px]">
            We bring ideas to life by combining years of experiences of our
            talented team.
          </p>
        </div>
        <div className="div w-full h-[624px]  flex items-center justify-between ">
          <div className="text h-[600px] w-[336px]  flex flex-col justify-between">
            <img src={per2} alt="" />
            <div className="w-full h-[90px] ">
              <h1 className="text-[34px]">Alfredo Ottis</h1>
              <p className="text-[21px] font-thin">CFO</p>
            </div>
          </div>
          <div className="text h-[600px] w-[336px]  flex flex-col justify-between">
            <img src={per3} alt="" />
            <div className="w-full h-[90px] ">
              <h1 className="text-[34px]">Jordan Sambo</h1>
              <p className="text-[21px] font-thin">CFO</p>
            </div>
          </div>
          <div className="text h-[600px] w-[336px]  flex flex-col justify-between">
            <img src={per6} alt="" />
            <div className="w-full h-[90px] ">
              <h1 className="text-[34px]">Tom Yhorke</h1>
              <p className="text-[21px] font-thin">CTO</p>
            </div>
          </div>
        </div>
        <div className="div w-full h-[624px]  flex items-center justify-between pt-[10px]">
          <div className="text h-[600px] w-[336px]  flex flex-col justify-between">
            <img src={per4} alt="" />
            <div className="w-full h-[90px] ">
              <h1 className="text-[34px]">Catty Hills</h1>
              <p className="text-[21px] font-thin">DESIGNER</p>
            </div>
          </div>
          <div className="text h-[600px] w-[336px]  flex flex-col justify-between">
            <img src={per5} alt="" />
            <div className="w-full h-[90px] ">
              <h1 className="text-[34px]">Brandon Murphy</h1>
              <p className="text-[21px] font-thin">CODER</p>
            </div>
          </div>
          <div className="text h-[600px] w-[336px]  flex flex-col justify-between">
            <img src={per1} alt="" />
            <div className="w-full h-[90px] ">
              <h1 className="text-[34px]">Maria Zurich</h1>
              <p className="text-[21px] font-thin">SUPPORT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
