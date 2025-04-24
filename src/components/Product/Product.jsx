import "./Product.css";
import QuantityPicker from "../QuantityPicker/QuantityPicker";

function Product(props) {
  function add() {
    console.log("Adding product");
  }

  return (
    <>
      <div className="card">
        <img src={props.data.image} alt="" />
        <h3>{props.data.title}</h3>
        <div>
          <label>Price: ${props.data.price.toFixed(2)}</label>
        </div>

        <div className="controls">
          <QuantityPicker></QuantityPicker>
          <button className="btn-success" onClick={add}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
