import React, { createContext, useState, useEffect, useContext } from 'react';
import useQueryParams from './components/hooks/useQueryParams'; 

const CART_KEY = 'shoppingCart';

const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState(() => getFromLocalStorage(CART_KEY));
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category, limit, sort, key } = useQueryParams();

  useEffect(() => {
    if (cart.length > 0) {
      setToLocalStorage(CART_KEY, cart);
    }
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://mocki.io/v1/a07af4c7-aed7-47a3-8f5d-a48540a7a586');
        const data = await response.json();
        setProducts(data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const findProduct = (productId) => cart.find(item => item.id === productId);

  const addProduct = (product) => {
    setCart(prevCart => {
      const existingProduct = findProduct(product.id);
      if (existingProduct) {
        return prevCart.filter(item =>
          item.id != product.id 
           
        );
      }
      return [...prevCart, { ...product, count: product.count || 1 }];
    });
  };

  const deleteProduct = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const getProductCount = (productId) => {
    const product = findProduct(productId);
    return product ? product.count : 0;
  };

  const filterProducts = () => {
    return products.filter(product => 
      (category === 'all' || product.category_slug === category) &&
      (product.name.toLowerCase().includes(key.toLowerCase())||product.ar_name.toLowerCase().includes(key.toLowerCase()))
    ).slice(0, limit);
  };

  return (
    <DataContext.Provider value={{ cart, products: filterProducts(), addProduct, deleteProduct, findProduct, getProductCount, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
