import React from "react";
import useQueryParams from "../hooks/useQueryParams";

export default function BtnMore() {
  const { limit, updateQuery } = useQueryParams();

  const handleClick = () => {
    updateQuery({ limit: parseInt(limit) + 12 });
  };

  return (
    <div className="flex w-full justify-center p-4">
      <button
        className="p-5 py-2 rounded-full pointer bg-white border-1"
        onClick={handleClick}
      >
        <strong>عرض المزيد</strong>
      </button>
    </div>
  );
}