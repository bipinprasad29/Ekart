import React, { useState } from "react";
import "./singleproduct.css";
const Singleprouct = ({ clickedItem, setClickedItem }) => {
  const [imgindex, setImgIndex] = useState(0);

  return (
    <>
      <div className="single__item__container">
        <div className="img__container">
          <img
            className="main__image"
            src={clickedItem.images[imgindex]}
            alt={clickedItem.title}
          />
          <div className="img__toggle_container">
            {clickedItem.images.map((elm, ind) => {
              return (
                <div className="img__toggle" key={ind}>
                  <img src={elm} onClick={() => setImgIndex(ind)} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="description">
          <div className="img__title">{clickedItem.title} </div>
          <div className="img__des">Brand - {clickedItem.brand}</div>

          <div className="img__des">Category - {clickedItem.category}</div>
          <div className="img__des"> Feature - {clickedItem.description} </div>

          <div className="img__des">Rating - {clickedItem.rating} out of 5</div>
          <div className="img__price">Price - ${clickedItem.price} </div>
          <div className="back__button" onClick={() => setClickedItem()}>
            Back
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleprouct;
