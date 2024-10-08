import { useContext, useEffect, useState } from "react";
import data from "../db/data.js";
import "./Recommended.css";
import { StoreContext } from "../Store/storeContext.jsx";

function Recommended() {
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const { state, setState } = useContext(StoreContext);

  useEffect(() => {
    const uniqueBrands = new Set();

    data.forEach((item) => {
      uniqueBrands.add(item.company); // Add brands to the Set
    });

    setBrands(Array.from(uniqueBrands)); // Convert Set back to an array
  }, []); // Run once on component mount

  const handleBrandClick = (item) => {
    // Update selected brands first
    const newSelectedBrands = selectedBrands.includes(item)
      ? selectedBrands.filter((brand) => brand !== item) // Deselect the brand
      : [...selectedBrands, item]; // Select the brand

    setSelectedBrands(newSelectedBrands); // Update local state

    // Use a callback to ensure we get the latest selectedBrands
    setState({ ...state, brands: newSelectedBrands }); // Update the global state
  };

  return (
    <div className="recommended">
      <h1>Recommended</h1>
      <div className="btn-container">
        {brands.map((item, index) => (
          <span key={index}>
            <button
              className="btn"
              onClick={() => handleBrandClick(item)}
              aria-pressed={selectedBrands.includes(item)}
            >
              {item + "   "} {selectedBrands.includes(item) ? "❌" : ""}
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Recommended;
