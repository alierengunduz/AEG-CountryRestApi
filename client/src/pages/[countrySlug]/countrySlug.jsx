import React, { useState, useEffect } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const CountrySlug = () => {
  const [countryData, setCountryData] = useState({});
  const { countrySlug } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        const country = data.find((country) => country.name === countrySlug);
        setCountryData(country);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountryData();
  }, [countrySlug]);

 

  return (
    <div className="bg-gray-900 min-h-[calc(100vh-80px)] text-gray-300 flex md:flex-row flex-col items-center relative justify-between md:px-10 px-2">
      <Link
        to="/"
        className="flex  items-center gap-x-1 absolute top-10 text-xl font-bold left-10 border-2 py-2 hover:bg-gray-400 hover:text-black cursor-pointer hover:border-transparent transition-all duration-300  px-5 rounded-md border-dashed"
      >
        <button> Back</button>
        <span>
          <BsFillArrowLeftSquareFill size={25} />
        </span>
      </Link>
      <div className="md:w-[50%] w-full border md:h-[29rem] h-[15rem] md:mt-20 mt-32 rounded-md">
        <img
          className="w-full h-full object-contain rounded-md"
          src={countryData.flag}
          alt=""
        />
      </div>
      <div className="md:w-[50%] w-full h-[30rem] flex flex-col justify-around md:mt-16 mt-8">
        <h1 className="text-white text-4xl pb-5 font-bold uppercase text-center">
          {countryData.name}
        </h1>
        <ul className="grid grid-cols-2 text-center gap-y-3 p-2">
          <li className="font-bold tracking-wider text-lg">
            Native name:{" "}
            <span className="text-gray-400">{countryData.nativeName} </span>{" "}
          </li>
          <li className="font-bold tracking-wider text-lg">
            Population:{" "}
            <span className="text-gray-400">{countryData.population}</span>{" "}
          </li>
          <li className="font-bold tracking-wider text-lg">
            Region: <span className="text-gray-400">{countryData.region} </span>{" "}
          </li>
          <li className="font-bold tracking-wider text-lg">
            Sub Region:{" "}
            <span className="text-gray-400">{countryData.subregion} </span>{" "}
          </li>
          <li className="font-bold tracking-wider text-lg">
            Capital:{" "}
            <span className="text-gray-400">{countryData.capital}</span>{" "}
          </li>
          <li className="font-bold tracking-wider text-lg">
            Top Level Domain:{" "}
            <span className="text-gray-400">{countryData.topLevelDomain} </span>{" "}
          </li>
          <li className="font-bold tracking-wider text-lg">
            Currencies:{" "}
            <span className="text-gray-400">
              {countryData.currencies && countryData.currencies[0] && (
                <div className="font-bold tracking-wider text-lg">
                  <span className="text-gray-400">
                    {countryData.currencies[0].name}
                  </span>{" "}
                </div>
              )}
            </span>{" "}
          </li>
          <li className="font-bold tracking-wider text-lg">
            Languages:{" "}
            <span className="text-gray-400">
              {countryData.languages && countryData.languages[0] && (
                <div className="font-bold tracking-wider text-lg">
                  <span className="text-gray-400">
                    {countryData.languages[0].name}
                  </span>{" "}
                </div>
              )}
            </span>{" "}
          </li>
        </ul>
        <div className="flex items-center justify-center text-center gap-x-5 pt-10">
          <div>
            <h1 className="font-bold md:text-xl text-base tracking-wider border-b border-red-500">
              Border Countries:
            </h1>
          </div>
          <ul className="grid md:grid-cols-3 grid-cols-4 gap-y-4 gap-x-10 p-8">
            {
               countryData.borders && countryData.borders.map((border,index) => (
                <li key={index} className="font-bold tracking-wider text-lg">
                  <span className="text-gray-100 md:text-base text-sm bg-red-500 py-1 px-2.5 rounded-md">{border}</span>{" "}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountrySlug;
