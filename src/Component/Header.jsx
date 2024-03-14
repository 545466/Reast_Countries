import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
const Header = ({ dark, toggleDark }) => {
  return (
    <>
      <header className={dark ? "dark" : ""}>
        <div className=" drop-shadow-sm dark:bg-DarkBlue bg-LMB h-20 px-5 lg:px-20 items-center text-DarkBlue dark:text-LMB flex justify-between ">
          <h1 className="font-bold text-sm lg:text-xl">Where in the world?</h1>
          <div className="flex items-center">
            <div onClick={toggleDark}>
              {dark ? (
                <FaMoon className=" text-sm lg:text-xl text-Violet mr-2 lg:mr-5" />
              ) : (
                <FaSun className="text-sm lg:text-xl text-Violet mr-2 lg:mr-5" />
              )}
            </div>
            <p className=" text-sm lg:text-lg">
              {dark ? "Dark Mode" : "Light Mode"}
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
