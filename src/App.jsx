import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import ProductDetails from "./components/products_details";
import axios from "axios";
import RecipesDetails from "./components/recipes_details";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data);
        setLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data) {
      setLoading(true);
      const t = setTimeout(() => setLoading(false), 400);
      return () => clearTimeout(t);
    }
    else {
      setLoading(true);
    }
  }, [location.pathname]);

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-[9999]">
          <div className="animate-spin w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full"></div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/recipes/:id" element={<RecipesDetails />} />
          <Route path="*" element={<div className="text-center text-3xl h-[300px] flex items-center justify-center font-semibold">Opps! <br /> Error 404</div>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
