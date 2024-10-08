import { useContext, useState } from "react";
import "./Colors.css"; // Make sure this imports the CSS
import { StoreContext } from "../../Store/storeContext";

const colors = [
  {
    id: 1,
    gradients: [
      "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
      "linear-gradient(45deg, #ff7e5f, #feb47b)",
      "linear-gradient(45deg, #00c6ff, #0072ff)",
    ],
    name: "All",
  },
  {
    id: 2,
    gradients: ["black", "rgba(0, 0, 0, 0.8)", "rgba(50, 50, 50, 0.7)"],
    name: "Black",
  },
  {
    id: 3,
    gradients: ["blue", "rgba(0, 0, 255, 0.7)", "rgba(0, 102, 204, 0.7)"],
    name: "Blue",
  },
  {
    id: 4,
    gradients: ["red", "rgba(255, 0, 0, 0.8)", "rgba(255, 99, 71, 0.7)"],
    name: "Red",
  },
  {
    id: 5,
    gradients: ["green", "rgba(0, 128, 0, 0.8)", "rgba(34, 139, 34, 0.7)"],
    name: "Green",
  },
  {
    id: 6,
    gradients: [
      "white",
      "rgba(255, 255, 255, 0.8)",
      "rgba(240, 240, 240, 0.7)",
    ],
    name: "White",
  },
];

function Colors() {
  const { state, setState } = useContext(StoreContext);
  const [selectedItem, setSelectedItem] = useState("All");

  const setChecked = (item) => {
    setState((prevState) => ({
      ...prevState,
      color: item.toLowerCase(),
    }));
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>Colors</h1>
      <div className="card-container">
        {colors.map((item) => (
          <div key={item.id} className="flex">
            <input
              type="radio"
              id={item.name}
              name="color"
              value={item.name}
              checked={selectedItem === item.name}
              onChange={() => setChecked(item.name)}
            />
            <label
              htmlFor={item.name}
              style={{
                background: item.gradients.join(", "), // Join gradients for the background
              }}
            ></label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Colors;
