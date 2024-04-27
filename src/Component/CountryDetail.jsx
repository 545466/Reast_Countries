import React, { useEffect, useState } from "react";
import Countries from "./Data";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
const CountryDetail = () => {
  const [dark, setDark] = useState(false);
  function toggleDark() {
    setDark(!dark);
  }
  const params = useParams();
  const name = params.name;
  const currentCountry = Countries.find(
    (country) => country.name.toLowerCase() === name
  );
  return (
    <>
      <div className={dark ? "dark" : ""}>
        <section className="lg:pb-20 dark:bg-DMB bg-LMB dark:text-DMT text-LMT">
          <Header dark={dark} toggleDark={toggleDark} />
          <Link to={"/"}>
            <div className="mx-10 my-10 lg:mx-20 bg-LMB dark:bg-DarkBlue shadow w-24 h-10 flex items-center justify-center">
              <FaArrowLeft className="mr-2" />
              <p>Back</p>
            </div>
          </Link>
          {currentCountry ? (
            <div
              className="px-10 lg:px-20 py-10 flex flex-col  lg:justify-between lg:items-center lg:flex-row"
              key={currentCountry.name}
            >
              <img className="lg:w-2/4 shadow max-w-lg" src={currentCountry.flags.svg} alt="" />
              <div className="lg:pr-20 ml-20">
                  <div>
                    <div className="my-10 flex flex-col lg:items-center lg:justify-between lg:flex-row">
                      <div className="mb-10 lg:mb-0">
                        <h1 className="font-semibold text-xl  pb-5">
                          {currentCountry.name}
                        </h1>
                        <p>
                          Native Name: <span>{currentCountry.nativeName}</span>
                        </p>
                        <p>
                          Population: <span>{currentCountry.population}</span>
                        </p>
                        <p>
                          Region: <span>{currentCountry.region}</span>
                        </p>
                        <p>
                          Sub Region: <span>{currentCountry.subregion}</span>
                        </p>
                        <p>
                          Capital: <span>{currentCountry.capital}</span>
                        </p>
                      </div>
                      <div className="mb-10 lg:pl-10 lg:mb-0">
                        <p>Top Level Domain: {currentCountry.topLevelDomain}</p>
                        {currentCountry.currencies.map((cur) => {
                          return (
                            <p key={cur}>
                              Currencies: <span>{cur.name}</span>
                            </p>
                          );
                        })}
                        <div className="flex">
                          <p>Languages:</p>
                          {currentCountry.languages.map((lan) => {
                            return (
                              <p className="px-1" key={lan}>
                                {" "}
                                <span>{lan.name}</span>
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <h1 className="font-semibold pb-5">Border Countries</h1>
                    </div>
                    <div className="flex flex-wrap">
                      {currentCountry.borders
                        ? currentCountry.borders.map((bor) => {
                            return (
                              <p
                                className="px-5 py-2 mr-5 mb-5 text-center dark:bg-DarkBlue shadow w-20"
                                key={bor}
                              >
                                {bor}
                              </p>
                            );
                          })
                        : ""}
                    </div>
              </div>
            </div>
          ) : (
            "Not found"
          )}
        </section>
      </div>
    </>
  );
  // }
};

export default CountryDetail;
