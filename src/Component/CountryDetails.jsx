import React, { useState } from "react";
import Countries from "./Data";
import { Link } from "react-router-dom";
const CountryDetails = ({ search }) => {
  const [dark, setDark] = useState(false);
  function toggleDark() {
    setDark(!dark);
  }
  return (
    <>
      <section className={dark ? "dark" : ""}>
        <div className="dark:bg-DMB flex flex-wrap justify-between flex-col bg-LMB lg:flex-row lg:px-20">
          {Countries.filter((Country) => {
            return search.toLowerCase() === ""
              ? Country
              : Country.name.toLowerCase().includes(search);
          }).map((Country) => {
            return (
              <div
                className="dark:bg-DarkBlue w-4/5 flex flex-col rounded-md shadow flex-wrap m-auto mb-10 text-DarkBlue bg-LMB lg:mb-20 lg:mx-1 lg:w-1/5 dark:text-LMB"
                {...Country}
              >
                <Link to={`/CountryDetail/${Country.name.toLowerCase()}`}>
                  <img className="w-full h-40" src={Country.flags.png} alt="" />
                </Link>
                <h1 className="pl-5 py-5 font-bold">{Country.name}</h1>
                <p className="pl-5">Population: {Country.population}</p>
                <p className="pl-5">Region: {Country.region}</p>
                <p className="pl-5 pb-10">Capital: {Country.capital}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CountryDetails;
