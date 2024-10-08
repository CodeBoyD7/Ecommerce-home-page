import { useContext, useState } from "react";
import { StoreContext } from "../../Store/storeContext";

function Category() {
  const options = [
    { id: 1, label: "All" },
    { id: 2, label: "Sneakers" },
    { id: 3, label: "Flats" },
    { id: 4, label: "Sandals" },
    { id: 5, label: "Heels" },
  ];

  const { setState } = useContext(StoreContext); // Correctly destructuring context
  const [selectedItem, setSelectedItem] = useState("All");

  const setChecked = (item) => {
    setSelectedItem(item);
    // Update the context state whenever a category is selected
    setState((prevState) => ({
      ...prevState,
      category: item.toLowerCase(), // Assuming you want to update the category in context
    }));
  };

  return (
    <div>
      <h1>Category</h1>
      <div className="list-items">
        {options.map((item) => (
          <div
            key={item.id}
            className="flex select-item"
            onClick={() => setChecked(item.label)}
          >
            <input
              type="radio"
              value={item.label}
              checked={selectedItem === item.label}
              onChange={() => setChecked(item.label)} // Handle change directly
            />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
