import React, { useEffect } from "react";
import { useState } from "react";
import { getAdvice } from "../services/advice";
import { Icon } from "@iconify/react";
import bookmarkIcon from "@iconify/icons-mdi/bookmark";

const AdviceCard = ({ freshAdvice }) => {
  const [spin, setSpin] = useState(false);
  const [advice, setAdvice] = useState({});
  const [bookmarkedAdvice, setBookmarkedAdvice] = useState([]);

  useEffect(() => {
    if (freshAdvice) {
      setAdvice(freshAdvice);
    }
  }, [freshAdvice]);

  useEffect(() => {
    const savedAdvices = JSON.parse(localStorage.getItem("advices"));
    if (savedAdvices.length) {
      setBookmarkedAdvice(savedAdvices);
    }
  }, []);

  const activateSpin = () => {
    setSpin(true);
    getAdvice();
  };
  const deactivateSpin = () => {
    setSpin(false);
  };

  const fetchNewAdvice = async () => {
    activateSpin();
    const newAdvice = await getAdvice();
    deactivateSpin();
    setAdvice(newAdvice?.slip);
  };

  const bookmarkAdvice = (adv) => {
    if (adv) {
      if (bookmarkedAdvice.length) {
        const newAdvs = bookmarkedAdvice.concat(adv);
        setBookmarkedAdvice(newAdvs);
        localStorage.setItem("advices", JSON.stringify(newAdvs));
      } else {
        const newAdvs = bookmarkedAdvice.concat(adv);
        setBookmarkedAdvice(newAdvs);
        localStorage.setItem("advices", JSON.stringify(newAdvs));
      }
    }
  };

  console.log(bookmarkedAdvice);

  return (
    <div className="relative w-full shadow-md  px-4  flex flex-col items-center md:w-2/4 bg-gray-700 rounded-md ">
      <div className="absolute top-2 right-2 cursor-pointer ">
        <Icon
          icon={bookmarkIcon}
          onClick={() => bookmarkAdvice(advice)}
          height={24}
          width={24}
          color="white"
          className=""
        />
      </div>
      <div className="text-green-400 text-1xl my-4">Advice #{advice?.id}</div>
      <div className="font-bold text-gray-200 text-center ">
        "{advice?.advice || "advice loading..."}"
      </div>
      <div className="w-full flex flex-row items-center my-5">
        <div className="h-[1px] w-full bg-gray-500"></div>
        <div className="mx-2 flex flex-row justify-between w-[25px]">
          <div className="h-[10px] w-[4px] bg-gray-200 rounded-lg"></div>
          <div className="h-[10px] w-[4px] bg-gray-200 rounded-lg"></div>
        </div>
        <div className="h-[1px] w-full bg-gray-500"></div>
      </div>
      <div>
        <div
          className={`{ cursor-pointer rounded-full bg-green-400 hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.75)] flex flex-col items-center justify-center h-[40px] w-[40px] -mb-[20px] `}
        >
          <div
            onClick={fetchNewAdvice}
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
