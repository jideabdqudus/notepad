import React from "react";
import style from "./Header.module.css"

const Header = () => {
  return (
    <div>
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        What to do?
      </button>
    </div>
  );
};

export default Header;
