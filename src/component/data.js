import React, { useEffect, useRef, useState } from "react";
import "./data.css";

const Data = ({ setClickedItem, product, setProduct }) => {
  const [reset, setReset] = useState(false);
  const inputref = useRef();

  const fecthingData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProduct(data.products);
  };

  // searching the product
  const searchHanler = () => {
    let p = inputref.current.value.toLowerCase();
    if (p) {
      setProduct(() =>
        product.filter(
          (elm) =>
            elm.category.toLowerCase().includes(p) ||
            elm.title.toLowerCase().includes(p)
        )
      );
      setReset(() => true);
    }
  };

  // resetting the product list to the initial list
  const resetData = (e) => {
    inputref.current.value = "";
    setReset(false);
    fecthingData();
  };

  useEffect(() => {
    let subscribed = true;
    if (subscribed === true) {
      fecthingData();
    }
    subscribed = false;
  }, []);

  return (
    <>
      <div className="seach__container">
        <input
          ref={inputref}
          type="text"
          className="searchbar"
          placeholder="Search Here"
          onKeyPress={(e) => e.key === "Enter" && searchHanler()}
        />
        <div
          className="button"
          style={reset ? { borderRadius: 0 } : null}
          onClick={() => searchHanler()}
        >
          Search
        </div>
        {reset && (
          <div className="button reset" onClick={() => resetData()}>
            Reset
          </div>
        )}
      </div>
      <div className="container">
        {product.length > 0 &&
          product.map((prod) => {
            return (
              <div
                className="item__container"
                key={prod.id}
                onClick={() => setClickedItem(prod)}
              >
                <img src={prod.thumbnail} alt="prod.title" />
                <div className="details">
                  <div className="ite__title"> {prod.title}</div>
                  <div>{prod.description} </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Data;
