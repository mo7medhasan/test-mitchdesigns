import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./style.css";
// import useQueryParams from '../hooks/useQueryParams';
import { useDataContext } from "../../DataContext";

export default function ProductsContainer() {
  const { products, loading } = useDataContext();

  // const { category, limit, sort, key } = useQueryParams();
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch('https://woosonicpwa.com/MitchAPI/filter.php',
  //       // {
  //         // method: 'POST',
  //         // headers: {
  //         //   "Content-Type": "application/json",
  //         // },
  //         // body: JSON.stringify({
  //         //   // category: category || "",
  //         //   price_range: [0, 100000000],
  //         //   // products_per_page: limit,
  //         //   page: 1,
  //         //   sort: {
  //         //     criteria: sort || "date",
  //         //     arrangement: "DESC"
  //         //   },
  //           // keyword: key || ""
  //         // }),
  //       // }
  //     );
  //     const data = await response.json();
  //     console.log('data',data);
  //       setProducts(data || []);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, [category, limit, sort, key]);

  return (
    <>
      {loading ? (
        <div className="body">
          {" "}
          <div class="loader"></div>
        </div>
      ) : (
        <div className="products-container">
         { products.map((product) => (
          <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
