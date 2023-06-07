import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showTag, setShowTag] = useState(false);
  function displayTag() {
    setShowTag(true);
  }
  function hideTag() {
    setShowTag(false);
  }
  return (
    <div className="bg-[#fefffe] hidden md:w-[220px] lg:w-[280px] h-screen fixed left-0 top-0 border-r-2 border-[#eef0f7] py-4 text-[#15152b] md:flex flex-col gap-10">
      <Link to="/">
        <p className="font-bold md:text-[1.5rem] lg:text-[1.85rem] pl-12">
          Show<span className="text-[#5e2eeb]">Flix</span>
        </p>
      </Link>

      <ul className="w-full font-bold flex flex-col gap-5 ">
        <Link to="/">
          <li className="py-1 pl-12 rounded-lg relative flex gap-3 items-center hover:bg-[#5e2eeb]/10 cursor-pointer transition-all duration-300">
            <div className="w-2 h-full bg-[#5e2eeb] absolute left-0 top-0 rounded-full"></div>
            <div className="w-6 h-6 p-1 rounded-md bg-[#5e2eeb] flex justify-center items-center">
              <img
                alt="search icon"
                src="/images/icons8-search-50.png"
                className="w-3 h-3"
              />
            </div>
            <p>Search</p>
          </li>
        </Link>

        <li
          onMouseOver={displayTag}
          onMouseOut={hideTag}
          className="py-1 pl-12 rounded-lg relative flex gap-3 items-center hover:bg-[#5e2eeb]/10 cursor-pointer transition-all duration-300"
        >
          {showTag && (
            <div className="w-2 h-full bg-[#5e2eeb] absolute left-0 top-0 rounded-full"></div>
          )}
          <img
            alt="search icon"
            src="/images/icons8-love-50.png"
            className="w-6 h-6"
          />
          <p className="text-[#5e2eeb]/40 ">Watchlist</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
