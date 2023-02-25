import "./styles.css";
import Data from "./component/data";
import Singleprouct from "./component/singleproduct";

import { useState } from "react";
import Footer from "./component/footer";

export default function App() {
  const [clickedItem, setClickedItem] = useState();
  const [product, setProduct] = useState([]);

  return (
    <div className="App">
      <h1 className="title">Ekart</h1>
      {clickedItem ? (
        <Singleprouct
          product={product}
          clickedItem={clickedItem}
          setClickedItem={setClickedItem}
        />
      ) : (
        <Data
          setClickedItem={setClickedItem}
          product={product}
          setProduct={setProduct}
        />
      )}
      <Footer />
    </div>
  );
}
