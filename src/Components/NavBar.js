import React from "react";

const NavBar = () => {
  return (
    <div className="w-full bg-black flex flex-col sm:flex-row items-center justify-between text-white">
      <div className="text-center sm:text-left">
      <h1 className="m-2 p-2 ml-2 sm:ml-10 text-2xl text-white font-extrabold transition-all duration-300 hover:text-green-500">NFT</h1>
      </div>
      <div className="flex items-center mt-4 sm:mt-0">
        <input
          className="m-2 p-1 rounded-lg"
          type="text"
          placeholder="Search..."
        />
        <button className="mx-2 sm:mx-4 bg-green-500 m-2 p-2 rounded-lg text-black font-bold">
          Submit Project
        </button>
      </div>
    </div>
  );
};

export default NavBar;
