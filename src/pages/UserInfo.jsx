import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form1 from "../components/userInfo/Form1";
import Form2 from "../components/userInfo/Form2";
import Form3 from "../components/userInfo/Form3";

const UserInfo = () => {
  const [stage, setStage] = useState(1);
  const navigate = useNavigate();
  const moveToNext = () => {
    if(stage < 3) {
      setStage(stage + 1)
    }
    
    if(stage === 3) {
      navigate("/dashboard")
    }
    
  }
  return (
    <div className="container mx-auto h-screen px-4 md:px-10 flex flex-col justify-center items-center">
      <div className="w-full md:w-[40%] text-center">
        <Link to="/" className="font-primaryFont text-2xl md:text-4xl font-bold ">
          Finance <span className="text-primary">Paddy</span>
        </Link>

        <form action="" className="mt-6 font-tertiaryFont">
          {/* What should we call you form */}
          {stage === 1 && <Form1 />}

          {/* What should we call you form form ends here */}

          {/* Monthly income form */}
          {stage === 2 && <Form2 />}
          {/* Monthly income form ends here */}

          {/* BUDGET RULE */}
          {stage === 3 && <Form3 />}
          {/* BUDGET RULE form ends here*/}

          <div className="w-full mt-2">
            <button type="button" className=" py-4 mt-2 w-full rounded-xl bg-primary text-white text-lg" onClick={moveToNext}>
              Proceed
            </button>
          </div>
        </form>

        <div>progressBar</div>
      </div>
    </div>
  );
};

export default UserInfo;
