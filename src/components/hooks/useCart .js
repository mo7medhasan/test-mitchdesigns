// useCart.js

import { useState, useEffect } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../utils/localStorageUtils';

const CART_KEY = 'shoppingCart';

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getFromLocalStorage(CART_KEY);
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    setToLocalStorage(CART_KEY, cart);
  }, [cart]);

  const findProduct = (productId, size) => {
    return cart.find(item => item.id === productId && item.size === size);
  };

  const addProduct = (product) => {
    setCart(prevCart => {
      const existingProduct = findProduct(product.id, product.size);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id && item.size === product.size
            ? { ...item, count: item.count + product.count }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  const deleteProduct = (productId, size) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === productId && item.size === size)));
  };

  const getProductCount = (productId, size) => {
    const product = findProduct(productId, size);
    return product ? product.count : 0;
  };

  return {
    cart,
    addProduct,
    deleteProduct,
    findProduct,
    getProductCount,
  };
};

export default useCart;
