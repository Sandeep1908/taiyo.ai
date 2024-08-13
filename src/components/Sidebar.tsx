import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

//Sidebar navigation
const Sidebar: React.FC = () => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const navigationItems = [
    {
      title: "Contacts",
      link: "/contacts",
    },
    {
      title: "Chart & Map",
      link: "/chatsandmap",
    },
  ];
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  return (
    <div className="">
      <div
        className={`w-10 md:w-20 flex justify-center items-start bg-gradient-to-r from-sky-500 to-blue-500 h-full  transition-all duration-300 ${
          isSidebar ? "hidden" : "block "
        }`}
      >
        <RxHamburgerMenu
          size={25}
          color="#fff"
          className="mt-20 cursor-pointer"
          onClick={() => setIsSidebar(true)}
        />
      </div>
      <div
        className={`w-60 h-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-300 ${
          isSidebar ? "w-60" : "hidden"
        }`}
      >
        <div className="w-full flex justify-between items-center p-2 ">
          <p className="text-2xl text-white ">Sidebar</p>

          <IoCloseCircleOutline
            size={25}
            color="#fff"
            onClick={() => setIsSidebar(false)}
          />
        </div>
        <hr />
        <ul className="w-full  h-full p-2 flex flex-col justify-center items-center space-y-5">
          {navigationItems.map((item, id) => {
            return (
              <Link
                to={item.link}
                key={id}
                className={`w-full p-3 text-white font-bold cursor-pointer rounded-md ${
                  currentIdx === id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                    : ""
                } `}
                onClick={() => setCurrentIdx(id)}
              >
                {item.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
