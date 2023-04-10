import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} type="button" className="text-white bg-cerulean-700 hover:bg-cerulean-800 focus:ring-4 focus:ring-cerulean-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full h-full dark:bg-cerulean-600 dark:hover:bg-cerulean-700 focus:outline-none dark:focus:ring-cerulean-800">
      {children}
    </button>
  );
}

export default Button;