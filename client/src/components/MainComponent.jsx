import React, { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { FcSearch } from "react-icons/fc";
import Product from "./Product";
import axios from "axios";
const MainComponent = ({ products, setProducts }) => {

  const [selectedRegion, setSelectedRegion] = useState(null);

  const filterByRegion = async (region) => {
    try {
      const response = await axios.get("/data.json");
      const filteredProducts = response.data.filter(
        (product) => product.region === region
      );
      setProducts(filteredProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("/data.json");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [setProducts]);

  const items = [
    {
      label: "Africa",
      value: "Africa",
    },
    {
      label: "Americas",
      value: "Americas",
    },
    {
      label: "Asia",
      value: "Asia",
    },
    {
      label: "Europe",
      value: "Europe",
    },
    {
      label: "Oceania",
      value: "Oceania",
    },
  ];
  return (
    <div className="bg-gray-900 min-h-[calc(100vh-80px)]">
      <div className="pt-5 flex items-center justify-between px-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for a country..."
            className="bg-gray-600 py-3 px-10 rounded-md text-white"
          />
          <FcSearch className="absolute left-2 top-3" size={25} />
        </div>
        <div className="text-gray-400">
          <Dropdown
            className="border py-3 px-7 rounded-lg w-[15rem]"
            overlay={
              <Space direction="vertical" className="bg-gray-700 w-full text-center font-bold tracking-wider">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="py-2 px-4 cursor-pointer text-gray-200"
                    onClick={() => {
                      setSelectedRegion(item.value);
                      filterByRegion(item.value);
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </Space>
            }
          >
            <div className="flex items-center justify-between cursor-pointer">
              <span className="mr-2">
                {selectedRegion ? selectedRegion : "Filter by Region"}
              </span>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
      {/* Product Components */}
      <div className="text-white p-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-6">
        {products &&
          products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default MainComponent;
