import { IoLogoNodejs } from "react-icons/io";
import Nav from "./Navigation/Nav";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import "./index.css";
import Category from "./Sidebar/Category/Category";
import Price from "./Sidebar/Price/Price";
import Colors from "./Sidebar/Colors/Colors";
const App = () => {
  return (
    <div className="main-container">
      <div className="primary">
        <div className="flex">
          <IoLogoNodejs className="logo" />
          <h1>Store</h1>
        </div>
        <div className="hide-scrollbar">
          <Category />
          <Price />
          <Colors />
        </div>
      </div>

      <div className="second">
        <Navigation />
        <Products />
      </div>
    </div>
  );
};
export default App;
