import React from "react";
import phone from "../assets/images/phone.png";
import Blcover from "../assets/images/blcover.png";
import Yellowbg from "../assets/images/yellowbg.png";
import Man from "../assets/images/man.png";

const Hero = () => {
  return (
    <>
      <div className=" w-full h-[750px]  px-[80px] pb-[50px]">
        <div className="w-full h-[217px]  flex justify-between">
          <div className=" w-[40%] ">
            <div className="flex flex-col gap-[10px]">
              {" "}
              <h1 className="text-[48px]">CONTACT</h1>
              <p>Le’s build your next big idea with rounddigital.</p>
              <div className="flex items-center gap-[5px]">
                <div className="bg-[#E14242] w-[50px] rounded-[15px] h-[40px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="40"
                    viewBox="0 0 40 40"
                    id="phone"
                  >
                    <defs>
                      <linearGradient
                        id="a"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stop-color="#E14242"></stop>
                        <stop offset="100%" stop-color="#E14242"></stop>
                      </linearGradient>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                      <circle cx="20" cy="20" r="20" fill="url(#a)"></circle>
                      <path
                        fill="#FFF"
                        d="M23.1179863,24.9844003 C22.7849875,25.1958537 22.3681546,25.2262713 22.0079863,25.0654003 C21.2939863,24.6694003 19.9919863,23.7244003 18.1859863,21.9184003 C16.3799863,20.1124003 15.3509863,18.7234003 14.9519863,18.0184003 C14.7911153,17.658232 14.8215329,17.2413991 15.0329863,16.9084003 L16.0709863,15.0904003 C16.4429863,14.4454003 16.5269863,14.0374003 16.1219863,13.4104003 L13.4549863,9.32740033 C12.6959863,8.12740033 12.3089863,8.18140033 11.6549863,8.48140033 C8.25298626,10.0294003 6.92398626,12.2194003 11.7509863,19.8424003 C13.0529863,21.8974003 17.0309863,26.2474003 20.4239863,28.4494003 C27.6899863,33.1684003 30.0809863,31.7494003 31.4999863,28.4494003 C31.7999863,27.7834003 31.9319863,27.3964003 30.7889863,26.6494003 L26.6609863,24.0244003 C26.0339863,23.6224003 25.7279863,23.5174003 25.0799863,23.8924003 L23.1179863,24.9844003 Z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p>call us today 44211</p>
              </div>
            </div>
          </div>
          <div className=" w-[665px] ">
            <div className="w-[]  pl-[39px]">
              <button className="bg-[#E14242] rounded-[10px] text-white">
                BUSINESS
              </button>
              <h1 className="text-[72px] relative pr-[0px]   ">
                Grow Your Business With Our Help
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-[506px]  flex items-center justify-between">
          <div
            style={{ backgroundImage: `url(${Blcover})` }}
            className="w-[445px] h-[417px] bg-no-repeat bg-bottom"
          >
            <img className="w-full h-full object-cover" src={phone} alt="" />
            <div className=" w-[181px] h-[108px] text-white relative bottom-[200px] left-[250px]">
              <h1 className="text-[20px]">Who We Are</h1>
              <p>Learn how to become a sales machine</p>
              <a className="underline " href="">
                Learn more
              </a>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Yellowbg})` }}
            className="w-[665px] h-[417px] bg-no-repeat bg-bottom"
          >
            <img
              className="w-full h-full object-contain relative left-[20px]"
              src={Man}
              alt=""
            />
            <div className=" w-[181px] h-[108px] text-black relative bottom-[200px] left-[50px]">
              <h1 className="text-[20px]">Small Business</h1>
              <p>See how can we help your business</p>
              <a className="underline " href="">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
