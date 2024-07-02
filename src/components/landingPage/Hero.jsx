import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto  px-10 flex items-center justify-center font-tertiaryFont">
      <div className="w-[65%] ">
        <div className="text-5xl font-bold font-tertiaryFont leading-[3.5rem]">
          {" "}
          Money & Sense: <br />
          Master your wealth with <br />{" "}
          <span className="text-primary ">Finance-Paddy</span>
        </div>

        <div className="text-xl mt-7 w-[89%] text-appGrey font-tertiaryFont">
          Allocate your income to{" "}
          <span className="text-primary">
            investments, savings, and expenses.
          </span>
          Discover the art of budgeting and manage your money wisely for a
          brighter financial future.
        </div>
        <div className="mt-10 flex space-x-16 w-[70%] text-lg text-appGrey">
          <div className="inline-flex flex-col gap-1">
            <span className="text-[34px] font-bold">8+</span>
            Budget
            <br /> Principles
          </div>

          <div className="inline-flex flex-col gap-1">
            <span className="text-[34px] font-bold">50+</span>
            Financial
            <br />
            Advises
          </div>

          <div className="inline-flex flex-col gap-1">
            <span className="text-[34px] font-bold">8+</span>
            Financial <br />Forums
          </div>
        </div>
      </div>

      <div className="grow">
        <img src="https://frugal-finesse.vercel.app/static/media/landing.0b2a130527113b8a09e1e303de91cdfc.svg" className="h-[38rem] " alt="" srcset="" />
      
      </div>
    </div>
  );
};

export default Hero;
