import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 flex flex-col items-center justify-center font-tertiaryFont md:flex-row">
      <div className="w-full md:w-[65%] ">
        <div className="text-3xl md:text-5xl font-bold font-tertiaryFont md:leading-[3.5rem]">
          {" "}
          Money & Sense: <br />
          Master your wealth with <br />{" "}
          <span className="text-secondary ">Finance-Paddy</span>
        </div>

        <div className="md:text-xl mt-7 w-[89%] text-appGrey font-tertiaryFont">
          Allocate your income to{" "}
          <span className="text-primary">
            investments, savings, and expenses.
          </span>
          Discover the art of budgeting and manage your money wisely for a
          brighter financial future.
        </div>
        <div className="mt-10 flex gap-4 md:space-x-16 w-[70%] md:text-lg text-appGrey">
          <div className="inline-flex flex-col gap-1">
            <span className="text-[30px] md:text-[34px] font-bold">8+</span>
            Budget
            <br /> Principles
          </div>

          <div className="inline-flex flex-col gap-1">
            <span className="text-[30px] md:text-[34px] font-bold">50+</span>
            Financial
            <br />
            Advises
          </div>

          <div className="inline-flex flex-col gap-1">
            <span className="text-[30px] md:text-[34px] font-bold">8+</span>
            Financial <br />Forums
          </div>
        </div>
      </div>

      <div className="md:grow flex justify-center">
        <img src="https://frugal-finesse.vercel.app/static/media/landing.0b2a130527113b8a09e1e303de91cdfc.svg" className="h-20 md:h-[38rem] " alt="" />
      
      </div>
    </div>
  );
};

export default Hero;
