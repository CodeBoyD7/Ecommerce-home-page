import { useContext, useState } from "react";
import "./Price.css";
import { StoreContext } from "../../Store/storeContext";

function Price() {
  const prices = [
    { id: 1, price: "All", priceRange: [] },
    { id: 2, price: "$0-50", priceRange: [0, 50] },
    { id: 3, price: "$50-100", priceRange: [50, 100] },
    { id: 4, price: "$100-150", priceRange: [100, 150] },
    { id: 5, price: "Over $150", priceRange: [150, Infinity] },
  ];

  const { state, setState } = useContext(StoreContext);
  const [selectedItem, setSelectedItem] = useState("All");

  const setChecked = (item, priceRng) => {
    setSelectedItem(item);
    setState((prevState) => ({
      ...prevState,
      price: priceRng,
    }));
  };

  return (
    <div>
      <h1>Price</h1>
      <div className="list-items">
        {prices.map((item) => (
          <div
            key={item.id}
            className="flex"
            onClick={() => setChecked(item.price, item.priceRange)}
          >
            <input
              type="radio"
              name="price" // Adding name to group radio buttons
              value={item.price}
              checked={selectedItem === item.price}
              onChange={() => setChecked(item.price, item.priceRange)}
            />
            {item.price}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Price;
