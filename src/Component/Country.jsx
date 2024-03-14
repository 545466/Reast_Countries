import React from "react";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import CountryDetails from "./CountryDetails";
import { useState } from "react";
const Country = ({ dark }) => {
  const options = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];
  const [search, setSearch] = useState("");
  return (
    <>
      <div className={dark ? "dark" : ""}>
        <section className="bg-LMB dark:bg-DMB  text-LMB">
          <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-20 py-10">
            <div className="flex items-center w-full lg:w-2/5 py-3 rounded-md shadow bg-LMB dark:bg-DarkBlue">
              <FaSearch className=" text-DarkBlue dark:text-DMT mx-5 " />
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="bg-LMB text-DarkBlue dark:text-DMT dark:bg-DarkBlue lg:pr-40 outline-none"
                placeholder="Search for a Country..."
                type="search"
                name=""
                id=""
              />
            </div>
            <div className=" shadow flex items-center justify-between w-3/5 lg:w-1/5 mt-10 rounded-md py-3 px-5 bg-LMB dark:bg-DarkBlue">
              <p className="text-DarkBlue dark:text-DMT">Filter by Region</p>
              <FaAngleDown className=" text-xl itm" />
            </div>
            <div className=" hidden dark:bg-DarkBlue py-3 px-5 w-3/5 lg:w-1/5 rounded-md mt-2">
              {options.map((option) => {
                return (
                  <p className="pt-2" value={option}>
                    {option}
                  </p>
                );
              })}
            </div>
          </div>
        </section>
        <CountryDetails dark={dark} search={search} />
      </div>
      {/* <Router >
        <Routes path ="./Details">
         <Details/>
        </Routes>
      </Router> */}
    </>
  );
};

export default Country;
