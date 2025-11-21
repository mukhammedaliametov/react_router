import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import ProductDetails from "./components/products_details";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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
        </Route>
      </Routes>
    </>
  );
};

export default App;
