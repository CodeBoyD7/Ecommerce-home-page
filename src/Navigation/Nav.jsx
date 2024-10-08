import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { StoreContext } from "../Store/storeContext";
import { useContext, useState } from "react";

function Nav() {
  const [searchTerm, setSearchTerm] = useState("");
  const { state, setState } = useContext(StoreContext);
  const searchProduct = (product) => {
    setSearchTerm(product);
    setState({ ...state, searchItem: product });
  };

  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search the items"
          name="search"
          id="search"
          value={searchTerm}
          onChange={(e) => searchProduct(e.target.value)}
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
