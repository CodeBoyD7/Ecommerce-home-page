import { AiFillStar } from "react-icons/ai";
import "./products.css";
import { BsFillBagHeartFill, BsHeart } from "react-icons/bs";

import data from "../db/data.js";
import Recommended from "../Recommended/Recommended.jsx";
import { StoreContext } from "../Store/storeContext.jsx";
import { useContext, useEffect, useState } from "react";

function Products() {
  const { state } = useContext(StoreContext);
  const { category, price, color, rating, brands, searchItem } = state;
  const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    console.log("Data ", data);
    console.log("state ", state);

    const checkPrice = (priceRange) => (price) => {
      return price >= priceRange[0] && price <= priceRange[1];
    };

    const filteredData = data.filter((item) => {
      const isCategoryMatch = category === "all" || item.category === category;
      const isPriceMatch =
        price?.length === 0 || checkPrice(price)(parseInt(item.newPrice));
      const isColorMatch = color === "all" || color === item.color;
      const isRatingMatch = rating === "" || item.rating >= parseInt(rating);
      const isBrandMatch = brands.length === 0 || brands.includes(item.company);
      const isSearchMatch =
        searchItem === "" ||
        item.title.toLowerCase().includes(searchItem.toLowerCase());

      return (
        isCategoryMatch &&
        isPriceMatch &&
        isColorMatch &&
        isRatingMatch &&
        isBrandMatch &&
        isSearchMatch
      );
    });

    console.log("filteredData ", filteredData);
    setUpdatedData(filteredData); // Update state with filtered data
  }, [state, updatedData]);

  return (
    <>
      <Recommended />
      <section className="card-container hide-scrollbar">
        {updatedData.map((item) => (
          <section className="card" key={Math.random()}>
            <BsHeart className="favourite" />
            <img src={item.img} alt={item.title} />
            <div className="card-details">
              <h3 className="card-title">{item.title}</h3>
              <div className="card-star">
                <span>
                  {Array.from({ length: item.rating }, (_, index) => (
                    <AiFillStar key={index} />
                  ))}
                </span>
                <p>{item.reviews}</p>
              </div>
            </div>
            <div className="bottom">
              <span className="card-price">
                <span className="prev-price">
                  <del>{item.prevPrice}</del>
                </span>
                <span className="new-price"> ${item.newPrice}</span>
              </span>
              <button className="card-btn">
                <BsFillBagHeartFill className="card-icon" />
              </button>
            </div>
          </section>
        ))}
      </section>
    </>
  );
}

export default Products;
