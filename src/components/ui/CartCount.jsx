import React, { useEffect, useState } from "react";
import {  useDataContext } from "../../DataContext";

export default function CartCount() {
  const { cart } = useDataContext()
  const [count, setCount] = useState(cart.length);

  useEffect(() => {
    setCount(cart.length);
  }, [cart]);

  return (
    <div className="cart-icon badge flex justify-center items-center p-3 rounded-full bg-main">
      <div className="cart-count badge-label p-2">{count}</div>
      <img src="/assets/Icon.png" alt="cart" width={20} height={20} />
    </div>
  );
}
