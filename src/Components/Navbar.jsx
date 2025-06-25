import React from "react";
import Vector from "../assets/icons/Vector.png";

const Navbar = () => {
  return (
    <div className="w-full flex h-[80px] items-center justify-between px-[80px] ">
      <h1 className="text-[25px]">ROUNDDIGITALS</h1>
      <div className="w-[600px] h-full flex items-center gap-[50px]">
        <a className="hover:text-[#E14242]" href="#">
          About Us
        </a>
        <a className="hover:text-[#E14242]" href="#">
          Services
        </a>
        <a className="hover:text-[#E14242]" href="#">
          Pricing
        </a>
        <a className="hover:text-[#E14242]" href="#">
          Blogs
        </a>
      </div>
      <button className="bg-[#E14242] text-[17px] font-thin text-white rounded-[10px] px-[25px] py-[10px] flex items-center gap-[20px]">
        <a href="tel:97946646">book a call</a>
        <div className=" w-[40px] h-[40px] ">
          <img className="w-full h-full object-cover" src={Vector} alt="" />
        </div>
      </button>
    </div>
  );
};

export default Navbar;
