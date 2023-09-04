import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const ProductCard = ({ imgSrc, productName, price, sale, rating }) => {
  const prices = price.split(" ");
  const originalPrice = prices[0];
  const discountedPrice = sale ? prices[1] : null;

  const [inCart, setInCart] = useState(false);

  const toggleCartStatus = () => {
    setInCart(!inCart);
  };

  return (
    <div className="col mb-5">
      <div className={`card h-100 `}>
        {sale && (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        )}
        <img className="card-img-top" src={imgSrc} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{productName}</h5>
            <div className="d-flex justify-content-center small text-warning">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={index < rating ? solidStar : regularStar}
                  className="mr-1"
                />
              ))}
            </div>
            {sale ? (
              <div>
                <span className="text-muted text-decoration-line-through">
                  {originalPrice}
                </span>{" "}
                {discountedPrice}
              </div>
            ) : (
              price
            )}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {inCart ? (
              <button className="btn btn-outline-dark mt-auto" disabled>
                In Cart
              </button>
            ) : (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={toggleCartStatus}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  const products = [
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Fancy Product",
      price: "$40.00 - $80.00",
      sale: false,
      rating: 3,
    },
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Special Item",
      price: "$20 $18.00",
      sale: true,
      rating: 4,
    },
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      price: "$50.00 $25.00",
      sale: true,
      rating: 3,
    },
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      price: "$40.00",
      sale: false,
      rating: 4,
    },
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      price: "$50.00 $25.00",
      sale: true,
      rating: 4,
    },
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Fancy Product",
      price: "$120.00 - $280.00",
      sale: false,
      rating: 3,
    },
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Special Item",
      price: "$20 $18.00",
      sale: true,
      rating: 5,
    },
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      price: "$40.00",
      sale: false,
      rating: 4,
    },
   
  ];

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
