import React from "react";
import useCart from "../hooks/useCart ";

export default function CartCount() {
  const { cart } = useCart();
  return (
    <div className="cart-icon badge flex justify-center items-center p-3 rounded-full bg-main">
      <div className="cart-count badge-label p-2">{cart?.length}</div>

      <img src="/assets/Icon.png" alt="cart" width={20} height={20} />
    </div>
  );
}
