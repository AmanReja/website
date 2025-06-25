import React from "react";
import Blcover from "../assets/images/black.png";
import vector1 from "../assets/icons/vector1.png";
import vector2 from "../assets/icons/vector2.png";
import vector3 from "../assets/icons/Group.png";

const Section1 = () => {
  return (
    <div className="w-full h-[886px]  flex flex-col items-center p-[80px] justify-center ">
      <img
        className="object-contain w-[1400px] h-full absolute "
        src={Blcover}
        alt=""
      />

      <div className=" w-[520px] h-[153px] relative right-[338px] mb-[30px] text-white ">
        <button>INTRO</button>
        <h1 className="text-[34px]">Let’s build your next big idea with us</h1>
        <p>As easy as just double click and type to edit</p>
      </div>
      <div className=" text-white w-full h-[333px] flex justify-between px-[80px]">
        <div className=" w-[299px] h-[333px] relative text-white flex flex-col gap-[20px] ">
          <div className="w-[87px] h-[87px] rounded-full bg-[#E14242] flex justify-center items-center">
            <img src={vector3} alt="" />
          </div>
          <h1 className="text-[34px]">About Us</h1>
          <p>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
          <a className="font-bold underline" href="">
            LEARN MORE
          </a>
        </div>
        <div className=" w-[299px] h-[333px] relative text-white  flex flex-col gap-[20px]">
          <div className="w-[87px] h-[87px] rounded-full bg-[#E14242]  flex justify-center items-center">
            <img src={vector1} alt="" />
          </div>
          <h1 className="text-[34px]">Our Services</h1>
          <p>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
          <a className="font-bold underline" href="">
            LEARN MORE
          </a>
        </div>
        <div className=" w-[299px] h-[333px] relative text-white flex flex-col gap-[20px] ">
          <div className="w-[87px] h-[87px] rounded-full bg-[#E14242]  flex justify-center items-center">
            <img src={vector2} alt="" />
          </div>
          <h1 className="text-[34px]">Contact Us</h1>
          <p>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
          <a className="font-bold underline" href="">
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
