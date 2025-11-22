import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Recipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => setData(res.data.recipes))
      .catch((err) => console.log(err, " Xatolik"));
  }, []);

  console.log(data);

  return (
    <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 pt-[20px]">
      <h2 className="text-[24px] font-semibold text-text mb-[-10px]">
        Recipes
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[6px]">
        {data.map((item, index) => {
          return (
            <Link
              to={`/recipes/${index + 1}`}
              key={item.id}
              className="w-full flex flex-col justify-between pb-[5px] md:w-[232px] my-[20px] rounded-[10px] overflow-hidden group hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <div className="bg-[#eee] absolute w-full top-0 left-0 h-full -z-20"></div>
                <img
                  src={item.image}
                  alt="test_card"
                  className="w-full -z-10 scale-100 hover:scale-105 duration-500 transition-all h-full md:h-[300px]"
                />
                <GoHeart className="absolute top-[10px] right-[10px] text-[30px] p-[6px] bg-white rounded-full cursor-pointer" />
                <p className="absolute bottom-0 bg-[#FF3090] text-white text-[12px] px-[7px] py-[2px] rounded-full m-[5px]">
                  50% off
                </p>
              </div>
              <h3 className="text-[16px] text-[#1F2026] font-semibold mt-[10px] px-[5px]">
                {item.name.slice(0, 52)}
                {item.name.length > 50 ? "..." : null}
              </h3>
              <div className="mt-[40px] flex items-center justify-between px-[5px]">
                <div>
                  <p className="text-[#1F2026] font-semibold">
                    ${Math.round(item.userId)}
                  </p>
                </div>
                <div className="border border-[#36374033] p-[6px] rounded-full cursor-pointer">
                  <IoCartOutline className="text-[20px]" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
