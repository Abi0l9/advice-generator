import React from "react";

const Spinner = ({ spin }) => {
  return (
    <div
      className={`{${
        spin && "animate-spin"
      } rounded-full bg-green-400 flex flex-col items-center justify-center h-[40px] w-[40px] -mb-[20px]`}
    >
      <div className="bg-black w-1/2 h-[50%] rounded-sm flex flex-col">
        <div className="w-full flex flex-row justify-evenly my-[3px]">
          <div className="rounded-full bg-green-400 w-[2px] h-[2px]"></div>
          <div className="rounded-full bg-green-400 w-[2px] h-[2px]"></div>
        </div>
        <div className="w-full flex flex-row justify-evenly">
          <div className="rounded-full bg-green-400 w-[2px] h-[2px]"></div>
        </div>
        <div className="w-full flex flex-row justify-evenly my-[3px]">
          <div className="rounded-full bg-green-400 w-[2px] h-[2px]"></div>
          <div className="rounded-full bg-green-400 w-[2px] h-[2px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
