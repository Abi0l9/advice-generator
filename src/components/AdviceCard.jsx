import React, { useEffect } from "react";
import { useState } from "react";
import { getAdvice } from "../services/advice";

const AdviceCard = () => {
  const [spin, setSpin] = useState(false);
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    getAdvice().then((data) => setAdvice(data?.slip));
  }, []);

  const activateSpin = () => {
    setSpin(true);
    getAdvice();
  };
  const deactivateSpin = () => {
    setSpin(false);
  };

  const fetchNewAdvice = async () => {
    console.log(advice);
    activateSpin();
    const newAdvice = await getAdvice();
    deactivateSpin();
    console.log(advice);
    setAdvice(newAdvice?.slip);
  };

  return (
    <div className="w-full min-h-[100px] px-4 md:min-h-[200px]  flex flex-col items-center md:w-2/4 bg-gray-700 rounded-md ">
      <div className="text-green-400 text-1xl my-4">Advice #{advice?.id}</div>
      <div className="font-bold text-gray-200 text-center ">
        {advice?.advice || "advice loading..."}
      </div>
      <div className="w-full flex flex-row items-center my-5">
        <div className="h-[1px] w-full bg-gray-500"></div>
        <div className="mx-2 flex flex-row justify-between w-[25px]">
          <div className="h-[10px] w-[4px] bg-gray-200 rounded-lg"></div>
          <div className="h-[10px] w-[4px] bg-gray-200 rounded-lg"></div>
        </div>
        <div className="h-[1px] w-full bg-gray-500"></div>
      </div>
      <div onClick={fetchNewAdvice}>
        <div
          className={`{ rounded-full bg-green-400 flex flex-col items-center justify-center h-[40px] w-[40px] -mb-[20px]`}
        >
          <div
            className={`${
              spin ? "animate-spin rounded-full" : "rounded-sm"
            } bg-black w-1/2 h-[50%]  flex flex-col`}
          >
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
      </div>
    </div>
  );
};

export default AdviceCard;
