import React from "react";
import { useDataContext } from "../../DataContext";

function ProductCard({ product }) {
  const { addProduct,findProduct } = useDataContext();

  return (
    <div className="card flex flex-col rounded-lg">
      <div className="card-container-img relative">
        <img
          className="card-img"
          src={
            product.main_image ||
            "https://s3-alpha-sig.figma.com/img/9770/4857/474ae40ba3db089ba4ed61d8fa8f6efe?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kj9~8gmzCgc1hSpl~LqEHGQ4onSjYW6glcRnLVr1XpKMcpL2ylSetz0weGB8x9VodrhaRmwMZxNbVzROTscDYD60jBtJhd1R3nzrCWEb6J-9iEM-r0GUxF-19N~TwTWIMNteFvysd7xYcIFL8nunZA9Iu3SY-ggHJ~JHIVZHW~SlL4kKt6WNhIFLgMEbzgodP-3cJCPxF9YIeLKYvFNLOm053kf3E1KS9FF0EvDZDZpa~K-j1LaVWA7ipFYiiAukphWCyqGFN6mpsfuLutgicK15LFxBcahTbrfVAe72eKGg0p4wU0y0ER8gAd3vjQPhb~fT8bWYaYIgdoRK9doFOw__"
          } 
          alt={product.name}
          width={100}
          height={100}
        />
        <button className="zoom-icon flex justify-center items-center absolute bg-white p-3 rounded-full">
          <img src="/assets/zoom.svg" className="" alt="zoom" />
        </button>
       {findProduct(product.id)? <button
          onClick={() => {
            addProduct(product);
          }}
          className="clear-card  pointer flex justify-center items-center absolute  rounded-full"
        >
          <img src="/assets/Cancel.svg" className="" alt="zoom" />
        </button>:null}
      </div>

      <div className="card-container-content  gap-3  flex flex-col justify-between gap-2 p-3">
        <div className="w-full grid">
          <h3 className="card-title text-overflow  my-0 ">{product.ar_name}</h3>
          <div>
            {" "}
            <small dir="ltr">{product.name.split("-")[1]}</small>
          </div>
        </div>
        <div className="card-price flex items-center gap-1">
          <mark className="price">
            99
            <strong> {product.price} </strong>
            EGP
          </mark>
          {product.sale_price && (
            <small>
              <s>EGP {product.sale_price}</s>
            </small>
          )}
        </div>
        <div className="flex gap-1 w-full">
          <button
            className="flex-1 pointer flex justify-center items-center bg-primary p-2 text-white rounded-full"
            onClick={() => {
              addProduct(product);
            }}
          >
            <strong>اضف الى السلة</strong>
          </button>
          <button className="btn pointer flex justify-center items-center bg-gray p-2 rounded-full">
            <img src="/assets/heart.svg" className="" alt="wishlist" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
