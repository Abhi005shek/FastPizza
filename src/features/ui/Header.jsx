import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import Username from "../user/Username";

const Header = () => {
  return (
    <header className="bg-lime-400 px-4 py-2 flex justify-between items-center">
      <Link to="/" className="font-bold">
        Fast🍕Pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
