import { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);

  function decrease() {
    console.log("Decreasing");
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  }

  function increase() {
    console.log("Increasing");
    setQuantity(quantity + 1);
  }

  return (
    <div className="picker">
      <button disabled={quantity == 1} onClick={decrease}>
        -
      </button>
      <label>{quantity}</label>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default QuantityPicker;
