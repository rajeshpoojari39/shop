import React, { useState } from "react";

const Card = ({ productData, onAddToCart }) => {
  const { name, price, discountPrice, sale, review } = productData;
  const [isAdded, setIsAdded] = useState(false);
  const cartHandler = () => {
    setIsAdded(!isAdded);
    onAddToCart(isAdded);
  };
  return (
    <div className='col mb-5'>
      <div className='card h-100'>
        {/*<!-- Sale tag -->*/}
        {sale && (
          <div
            className='badge bg-dark text-white position-absolute'
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        )}
        {/* <!-- Product image--> */}
        <img
          className='card-img-top'
          src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
          alt='...'
        />
        {/* <!-- Product details--> */}
        <div className='card-body p-4'>
          <div className='text-center'>
            {/* <!-- Product name--> */}
            <h5 className='fw-bolder'>{name}</h5>
            {/* <!-- Review--> */}
            {review && (
              <div className='d-flex justify-content-center small text-warning mb-2'>
                <div className='bi-star-fill'></div>
                <div className='bi-star-fill'></div>
                <div className='bi-star-fill'></div>
                <div className='bi-star-fill'></div>
                <div className='bi-star-fill'></div>
              </div>
            )}
            {/* <!-- Product price--> */}
            {sale ? (
              <>
                <span className='text-muted text-decoration-line-through'>
                  {price}
                </span>
                <span style={{ marginLeft: "5px" }}>{discountPrice}</span>
              </>
            ) : (
              price
            )}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
          <div className='text-center'>
            <a
              className='btn btn-outline-dark mt-auto'
              href='#'
              onClick={cartHandler}
            >
              {isAdded ? "Remove from Cart" : "Add to Cart"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
