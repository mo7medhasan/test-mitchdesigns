import React from "react";
import CartCount from "../ui/CartCount";
import InputSearch from "../ui/InputSearch";

export default function Header() {
  return (
    <header className="container flex  item-center ">
      <div className="cart-container flex item-center ">
       <CartCount/>
      </div>
      <div className="search-container flex-1 justify-center ">
        <InputSearch />
      </div>
    </header>
  );
}
