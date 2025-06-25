import React from "react";
import Blcover from "../assets/images/black2.png";
import Women from "../assets/images/women.png";
import Pc from "../assets/images/pc.png";
import Frame from "../assets/images/Frame.png";
import Vector1 from "../assets/icons/Vector3.png";
import Vector2 from "../assets/icons/Vector4.png";
import Vector3 from "../assets/icons/Vector5.png";

const Section2 = () => {
  return (
    <>
      <div className="w-full h-[706px]  flex items-center p-[80px] justify-center ">
        <div
          style={{ backgroundImage: `url(${Blcover})` }}
          className="w-[60%]  h-full bg-no-repeat bg-bottom-left"
        >
          <div className="h-[200px] w-[350px]  ">
            <button className="bg-[#E14242] font-bold text-white rounded-[10px]">
              OVERVIEW
            </button>
            <h1 className="text-[40px] pr-[50px]">
              Welcome to <span className="text-[#E14242]">Rounddigitals</span>
            </h1>
            <p className="font-thin">An Overview Of Our Works</p>
          </div>
          <div className="w-full flex justify-center relative top-[43px] ">
            <div className="flex w-[600px] h-[301px]  text-white justify-between items-center pt-6">
              <div className="w-[268px] h-[90px] ">
                <h1 className="text-[58px]">97%</h1>
                <p>
                  Focus on what is more important to you and be more productive
                </p>
              </div>
              <img className="h-full object-cover" src={Women} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[40%]  h-full flex justify-end pt-[10px] items-end ">
          <div className="text w-[400px] h-full  pt-[100px] bg-[#E14242] rounded-[10px] flex gap-[50px] flex-col px-[20px] border-b-[5px] ">
            <img className="w-full object-contain h-[100px]" src={Pc} alt="" />
            <div className="text w-[250px] h-[196px]  flex gap-[15px] flex-col items-start">
              <button className="bg-[#E14242] font-bold text-white rounded-[10px]">
                OVERVIEW
              </button>
              <h1 className="text-white text-[24px]">
                With Pulsar you save time, money and stress
              </h1>
              <button className="bg-[#E14242]  text-white rounded-[20px] brder border-white border-[1px] px-[23px] py-[10px]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[268px] w-full px-[80px] flex justify-between mt-[-50px]">
        <div className="text w-[40%] bg-red-500 h-full rounded-[10px] border-b-[5px] border-b-black">
          <div className="text p-6 flex flex-col gap-[20px] items-start">
            <div className="text flex w-[200px]">
              <img className="object-contain" src={Vector1} alt="" />
              <img className="object-contain" src={Vector3} alt="" />
              <img className="object-contain" src={Vector2} alt="" />
            </div>
            <button className=" font-bold text-white rounded-[10px]">
              FEATURE
            </button>
            <h1 className="text-[24px] text-white pr-[50px]">
              Maximize the return over your investments with Pulsar Template
            </h1>
          </div>
        </div>
        <div className="text w-[50%] bg-black h-full rounded-[10px] flex">
          <div className="text-white w-[480px] p-6 flex flex-col gap-[20px] items-start ">
            <button className=" font-bold text-white rounded-[10px]">
              FEATURE
            </button>
            <h1 className="text-[32px] text-white pr-[50px]">
              Fast and supreme support 24/7 all year around for your company
            </h1>
          </div>
          <div className=" text-white h-full p-6 ">
            <img
              className="object-contain relative top-[15px]"
              src={Frame}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
