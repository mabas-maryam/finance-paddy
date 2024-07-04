import React from "react";

const Form2 = () => {
  return (
    <div className="relative flex flex-col space-y-3">
      <label className="font-semibold text-appGrey text-xl ">
        Total Monthly Income?{" "}
      </label>
      <input
        className="border rounded-xl focus:outline-primary py-4 text-center "
        type="number"
        placeholder="Monthly income after tax"
      />
      <span className="absolute bottom-4 left-4 font-semibold text-primary opacity-70">
        NGN
      </span>
    </div>
  );
};

export default Form2;
