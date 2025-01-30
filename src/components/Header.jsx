import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Logo from "../assets/img/foodie.jpeg";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggesIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <>
      <div className="flex flex-col justify-between bg-purple-100 shadow-lg sm:flex-row">
        <div className="flex justify-center">
          <img
            className="w-16 p-1 rounded-xl mx-7"
            src={Logo}
            alt="this is logo"
          />
        </div>

        <ul className="flex items-center flex-col sm:flex-row">
          <li className="p-2 mx-2 hover:text-purple-950 hover:font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 mx-2 hover:text-purple-950 hover:font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-2 mx-2 hover:text-purple-950 hover:font-bold">
            <Link to="/instamart">Instamart</Link>
          </li>
          {/* <li className="p-2 mx-2 hover:text-purple-950 hover:font-bold">
            Contact
          </li> */}
          <li className="p-2 mx-2 hover:text-purple-950 hover:font-bold">
            <Link to={"/cart"}>Cart🛒</Link>-{cartItems.length}
          </li>
        </ul>
        {/* {isOnline ? "✅" : "❌"} */}

        {/* <div className="text-bold text-red-900 mt-4">{user.name}</div> */}

        {isLoggedIn ? (
          <button
            className="bg-purple-600 shadow-md text-white text-sm px-2 rounded-md hover:bg-purple-800 h-7 m-4"
            onClick={() => setIsLoggesIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-purple-600 shadow-md text-white text-sm px-2 rounded-md hover:bg-purple-800 h-7 m-4"
            onClick={() => setIsLoggesIn(true)}
          >
            Log In
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
