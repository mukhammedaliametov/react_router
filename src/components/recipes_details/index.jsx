import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";

const RecipesDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!data)
    return (
      <div className="w-full h-[70vh] flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-gray-300 border-t-black rounded-full"></div>
      </div>
    );

  return (
    <div className="max-w-[1220px] mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={data.image}
            alt={data.name}
            className="w-full rounded-xl shadow-md"
          />
        </div>
        <div>
          <h1 className="text-[32px] font-bold text-[#1F2026]">{data.name}</h1>
          <div className="flex items-center gap-2 mt-3">
            <IoIosStar className="text-yellow-400 text-[24px]" />
            <p className="font-semibold text-[18px]">{data.rating}</p>
            <p className="text-gray-500 text-[14px]">
              ({data.reviewCount} reviews)
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-[15px]">
            <p>
              <span className="font-semibold">Prep Time:</span>{" "}
              {data.prepTimeMinutes} min
            </p>
            <p>
              <span className="font-semibold">Cook Time:</span>{" "}
              {data.cookTimeMinutes} min
            </p>
            <p>
              <span className="font-semibold">Servings:</span> {data.servings}
            </p>
            <p>
              <span className="font-semibold">Difficulty:</span>{" "}
              {data.difficulty}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {data.tags?.map((tag, i) => (
              <span
                key={i}
                className="text-[13px] bg-gray-200 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-3 text-gray-700 text-[15px]">
            <span className="font-semibold">Calories per serving:</span>{" "}
            {data.caloriesPerServing}
          </p>
          <button className="mt-6 cursor-pointer bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition">
            Add to Favorites
          </button>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-[24px] font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc pl-6 text-[15px] text-gray-700">
            {data.ingredients.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[24px] font-semibold mb-3">Instructions</h2>
          <ol className="list-decimal pl-6 text-[15px] text-gray-700">
            {data.instructions.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
