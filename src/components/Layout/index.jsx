import React from "react";
import Header from "./Header";
import "./style.css";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container grid gap-5 " dir="rtl">
        <div className="flex  gap-2 items-center text-primary">
          الرئيسية
          <img
            src={"/assets/chevron-left.svg"}
            width={15}
            height={15}
            alt="chevron-left"
          />
          القهوة
        </div>
        

        {children}
      </main>
    </>
  );
}
