"use client";
import { useEffect, useState } from "react";
import CategoryMenu from "../categoryMenu";
// import CategoryMenu from "../categoryMenu";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://api.shope.com.bd/api/v1/public/hero-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  console.log({ categories });

  return (
    <div>
      <div className="mt-[118px] absolute top-0 z-50">
        <CategoryMenu className="w-full bg-white" categories={categories} />
      </div>
    </div>
  );
};

export default Category;
