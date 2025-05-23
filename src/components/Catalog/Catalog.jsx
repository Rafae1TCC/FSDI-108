import "./Catalog.css";
import Product from "../Product/Product";
import { mock_catalog, mock_categories } from "../../services/DataService";
import { useState } from "react";

function Catalog() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const filteredProducts = selectedCategories.length === 0
    ? mock_catalog
    : mock_catalog.filter(prod => selectedCategories.includes(prod.category));

  return (
    <div className="catalog">
      <h1>Check out our amazing Catalog!</h1>
      <img src="/images/Shop.webp" alt="Shop banner" />
      
      <div className="filters">
        {mock_categories.map(({category, image}) => (
          <div
            key={category}
            className={`filter-image ${selectedCategories.includes(category) ? "active" : ""}`}
            onClick={() => toggleCategory(category)}
          >
            <img src={image} alt={category} />
          </div>
        ))}
      </div>
      
      <div className="product-content">
        {filteredProducts.map(prod => <Product key={prod.id} data={prod} />)}
      </div>
    </div>
  );
}

export default Catalog;