import React from "react";
import Man from "../assets/images/man2.png";
import Phone from "../assets/images/phone.png";
import Cal from "../assets/icons/cal.png";

const Section3 = () => {
  return (
    <>
      <div className="w-full h-[1520px] px-[80px] py-[50px]">
        <div className="text h-[772px]  w-full  flex flex-col justify-between">
          <div className="flex flex-col items-start gap-[5px]  h-[106px] w-[412px]">
            <button className="bg-[#E14242] font-bold text-white rounded-[10px]">
              BENEFITS
            </button>
            <h1 className="text-[40px] font-semibold text-gray-700">
              Our Rock and Roll
            </h1>
            <p className="text-[21px]">
              We bring ideas to life by combining years of
            </p>
          </div>
          <div className="div w-full h-[624px]  flex items-center justify-between pt-[10px]">
            <div className="bg-[#FFE1C5] w-[470px] h-[598px] rounded-[10px] border-b-[5px] border-b-black flex flex-col items-center justify-center pb-[80px]">
              <img src={Man} alt="" />
              <div className=" h-[198px]  text-white rounded-[10px] w-[393px] flex flex-col justify-between gap-[20px]">
                <div className="text flex justify-center items-center gap-[20px]   p-6 bg-[#312F2F] h-[128px] rounded-[10px] ">
                  <img src={Cal} alt="" />
                  <div className="text-white w-[238px]">
                    <h1 className="text-[24px]">Expert Team</h1>
                    <p className="text-[21px]">Start free while you learn</p>
                  </div>
                </div>
                <button className=" bg-[#312F2F] w-full h-[60px] rounded-full">
                  Try Us
                </button>
              </div>
            </div>
            <div className=" w-[563px] h-[300px]  flex flex-col items-start gap-[20px] px-[10px]">
              <button className="border-amber-600 border-[2px] rounded-full px-[20px] py-[10px]">
                DESIGN
              </button>
              <h1 className="text-[34px]">
                Pulsar was designed with the idea of being easy to use
              </h1>
              <p className="text-[21px]">
                Easy as just on click to edit and be online in on time
              </p>
              <h1 className="text-[20px]">Overview</h1>
              <p>
                Pulsar boasts a visually striking and modern design that is sure
                to leave a lasting impact on your visitors start today with
                Pulsar Template
              </p>
            </div>
          </div>
        </div>
        <div className="text h-[772px]  w-full  flex flex-col justify-between">
          <div className="div w-full h-[624px]  flex-row-reverse flex items-center justify-between pt-[10px]">
            <div className="bg-[#E14242] w-[470px] h-[598px] rounded-[10px] border-b-[5px] border-b-black flex flex-col items-center justify-center pb-[80px]">
              <img
                className="h-full w-full object-cover object-bottom-left relative top-[79px]"
                src={Phone}
                alt=""
              />
            </div>
            <div className=" w-[563px] h-[300px]  flex flex-col items-start gap-[10px] ">
              <h1 className="text-[34px] pr-[180px]">
                Seamless Responsiveness We are fully responsive
              </h1>
              <p className="text-[21px]">
                Lorem Ipsum is simply dummy text of the printing.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <button className="bg-[#E14242] text-white border-[2px] rounded-full px-[50px] py-[10px]">
                Try This Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
