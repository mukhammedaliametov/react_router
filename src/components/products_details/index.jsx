import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";

const ProductDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const param = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${param.id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err + " Xatolik"));
  }, [param.id]);
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] py-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
        <div>
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full rounded-xl shadow-md mb-4"
          />
          <div className="flex gap-3 overflow-x-auto">
            {data.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="gallery"
                className="w-[100px] h-[100px] object-cover rounded-lg shadow cursor-pointer hover:opacity-80 transition"
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-[28px] font-bold text-text">{data.title}</h1>
          <p className="text-[16px] text-text mt-3">{data.description}</p>
          <div className="flex items-center gap-2 mt-3">
            <IoIosStar className="text-yellow-400 text-[22px]" />
            <p className="font-semibold text-[18px] text-text">{data.rating}</p>
          </div>
          <p className="text-[34px] font-bold text-text mt-6">
            ${Math.round(data.price)}
          </p>
          <p className="text-[15px] text-gray-500 mt-1">
            Stock: {data.stock} pcs
          </p>
          <div className="mt-2 text-[14px] text-gray-500">
            <p>
              Brand: <span className="font-semibold">{data.brand}</span>
            </p>
            <p>
              Category: <span className="font-semibold">{data.category}</span>
            </p>
          </div>
          <button className="mt-6 bg-black cursor-pointer text-white px-6 py-3 rounded-full hover:bg-gray-900 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
