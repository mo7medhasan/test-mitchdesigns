import React from "react";

export default function FilterCategory() {
  return (
    <div className="flex items-center gap-5 overflow-x-auto flex-wrap">
      {[
        "كل القهوة",
        "قهوة منكهة",
        "قهوة تركية",
        "قهوة سريعة التحضير",
        "قهوة فرنسية",
      ].map((category) => (
        <div
          key={category}
          className="flex items-center gap-2 rounded-full p-4 py-2 bg-gray"
        >
          <span className=" text-primary "> {category}</span>
          <img
            src={"/assets/Cancel.svg"}
            width={15}
            height={15}
            alt="clear search"
          />
        </div>
      ))}
    </div>
  );
}
