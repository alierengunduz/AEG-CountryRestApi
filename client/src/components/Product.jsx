import React from "react";
import { IoRadioButtonOnOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <div className="border w-full h-[22rem] rounded-lg shadow-md shadow-white  hover:scale-105 transition-all duration-200">
      <div className="h-[50%] p-2">
        <img
          src={product.flag}
          alt="flag"
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="h-[50%] flex flex-col gap-y-4 p-4">
        <div>
          <h1 className="font-bold text-xl tracking-wider uppercase">
            {product.name}
          </h1>
        </div>
        <ul className="flex justify-between gap-y-2">
          <div className="flex flex-col gap-y-2">
            <li>
              Population:{" "}
              <span className="text-red-500">{product.population}</span>{" "}
            </li>
            <li>
              Region: <span className="text-yellow-500">{product.region}</span>{" "}
            </li>
            <li>
              Capital: <span className="text-blue-500">{product.capital}</span>{" "}
            </li>
          </div>

          <Link
            className="bg-gradient-to-tr from-cyan-400 w-[30%] flex items-center justify-center rounded-full"
            to={`/${product.name}`}
          >
            <IoRadioButtonOnOutline className="text-white" size={25} />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Product;
