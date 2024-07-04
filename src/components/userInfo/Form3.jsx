import React from "react";

const Form3 = () => {
  return (
    <div className="relative flex flex-col space-y-3">
      <label className="font-semibold text-appGrey text-xl ">
        Preferred Budget Rule?{" "}
      </label>
      <select
        className="border rounded-xl focus:outline-primary py-4 text-center"
        type="number"
      >
        <option value="">The 50-30-20 Rule</option>
        <option value="">The 70-20-10 Rule</option>
        <option value="">The 80-20 Rule</option>
        <option value="">The 50-50 Rule</option>
      </select>
      <span className="absolute bottom-4 left-4 font-semibold text-primary opacity-70">
        NGN
      </span>
    </div>
  );
};

export default Form3;
