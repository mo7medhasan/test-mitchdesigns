import React from "react";
import useQueryParams from "../hooks/useQueryParams";

export default function FilterCategory() {
  const { category, updateQuery } = useQueryParams();

  const categories = [
    { category_slug: "coffee", category_name_ar: "القهوة" },
    { category_slug: "healthy-snacks", category_name_ar: "سناكس صحيه" },
    { category_slug: "nuts", category_name_ar: "المكسرات" },
    { category_slug: "ramadan-products", category_name_ar: "ياميش رمضان" },
    { category_slug: "beverages", category_name_ar: "مشروبات" },
    {
      category_slug: "gifting-seasonal",
      category_name_ar: "الهدايا والمناسبات",
    },
  ];
  const clearSearch = () => {
    updateQuery({ category: "" });
  };

  return (
    <div className="flex items-center gap-5 overflow-x-auto flex-wrap">
      {categories.map((categoryItem) => (
        <div className="relative"  key={categoryItem.category_slug}>
          {" "}
          <button
           
            onClick={() =>
              updateQuery({ category: categoryItem.category_slug })
            }
            className="flex pl-5 border items-center pointer gap-2 rounded-full p-4 py-2 bg-gray text-primary"
          >
            <span className="text-primary">
              {categoryItem.category_name_ar}
            </span>
          </button>{" "}
          {category === categoryItem.category_slug ? (
            <button onClick={clearSearch} className="absolute clear ">
              {" "}
              <img
                src={"/assets/Cancel.svg"}
                width={15}
                height={15}
                alt="clear search"
                className="pointer"
              />
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
}
