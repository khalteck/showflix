import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showTag, setShowTag] = useState(false);
  function displayTag() {
    setShowTag(true);
  }
  function hideTag() {
    setShowTag(false);
  }

  const [drop, setDrop] = useState(false);
  function toggleDrop() {
    setDrop((prev) => !prev);
  }

  return (
    <div className="w-full block md:hidden fixed top-0 left-0 z-10">
      <header className="w-full h-[70px] flex items-center bg-[#fefffe] border-b border-[#5e2eeb] relative">
        <img
          onClick={toggleDrop}
          alt="search icon"
          src="/images/icons8-menu-50.png"
          className="w-12 h-12 absolute top-[50%] left-3 translate-y-[-50%]"
        />
        <Link to="/" className=" mx-auto">
          <p className="font-bold text-[1.5rem]">
            Show<span className="text-[#5e2eeb]">Flix</span>
          </p>
        </Link>
      </header>
      {drop && (
        <div className="bg-[#fefffe] w-full h-screen fixed left-0 top-0 border-r-2 border-[#eef0f7] py-4 text-[#15152b] md:flex flex-col gap-10 slide">
          <img
            onClick={toggleDrop}
            alt="search icon"
            src="/images/icons8-close-50.png"
            className="w-12 h-12 mb-10"
          />

          <ul className="w-full font-bold flex flex-col gap-5 ">
            <Link to="/" onClick={toggleDrop}>
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
              onClick={toggleDrop}
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
      )}
    </div>
  );
};

export default Header;
