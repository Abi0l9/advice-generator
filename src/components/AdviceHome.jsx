import React, { useEffect, useState } from "react";
import AdviceCard from "./AdviceCard";
import { getAdvice } from "../services/advice";
import Bookmarks from "./Bookmarks";

const AdviceHome = () => {
  const [advice, setAdvice] = useState({});
  useEffect(() => {
    getAdvice().then((data) => setAdvice(data?.slip));
  }, []);

  return (
    <div className="w-full px-5 md:px-0 h-screen bg-gray-900 flex flex-col justify-center items-center">
      <Bookmarks />
      <AdviceCard freshAdvice={advice} />
    </div>
  );
};

export default AdviceHome;
