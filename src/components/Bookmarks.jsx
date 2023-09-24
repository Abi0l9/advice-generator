import { useEffect, useState } from "react";

const Bookmarks = () => {
  const [bookmarkedAdvices, setBookmarkedAdvices] = useState([]);

  useEffect(() => {
    const savedAdvices = JSON.parse(localStorage.getItem("advices"));
    if (savedAdvices.length) {
      //   const ids = [...new Set(savedAdvices.map((adv) => adv.id))];
      //   const filtered = savedAdvices.filter((adv) => ids.includes(adv.id));
      const filteredd = savedAdvices.reduce((a, b) => {
        const exists = a.find((adv) => adv.id === b.id);
        if (!exists) {
          a.push(b);
        }
        return a;
      }, []);
      setBookmarkedAdvices(filteredd);
    }
  }, []);

  console.log(bookmarkedAdvices);
  return (
    <div className="">
      <div className="text-center w-full">
        <p className="text-2xl text-gray-200">Saved Advices</p>
      </div>
    </div>
  );
};

export default Bookmarks;
