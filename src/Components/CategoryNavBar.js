import React, { useState } from "react";

const CategoryNavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCategory1, setShowCategory1] = useState(false);
  const [showCategory2, setShowCategory2] = useState(false);
  const [showCategory3, setShowCategory3] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
    setShowDropdown(true);
    setShowCategory1(true);
    setShowCategory2(false);
    setShowCategory3(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowCategory1(false);
    setShowCategory2(false);
    setShowCategory3(false);
  };

  const toggleCategory1 = () => {
    setShowCategory1(!showCategory1);
    setShowCategory2(false);
    setShowCategory3(false);
    setShowDropdown(false);
  };

  const toggleCategory2 = () => {
    setShowCategory2(!showCategory2);
    setShowCategory1(false);
    setShowCategory3(false);
    setShowDropdown(false);
  };

  const toggleCategory3 = () => {
    setShowCategory3(!showCategory3);
    setShowCategory1(false);
    setShowCategory2(false);
    setShowDropdown(false);
  };

  return (
    <nav className={`bg-lime-400 m-4 rounded-lg p-4 ${showNavbar ? "" : "hidden"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={toggleNavbar}
          className="text-white hover:text-gray-300 focus:outline-none lg:hidden"
        >
          ☰
        </button>

        <div
          className={`lg:flex space-x-4 ${showDropdown ? "block" : "hidden"}`}
        >
          <div className="relative lg:inline-block text-left">
            <button
              onClick={toggleCategory1}
              className="text-black font-bold hover:text-white focus:outline-none border-2 border-black px-3 py-1 rounded"
            >
              Category 1
            </button>
            {showCategory1 && (
              <div className="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Contact
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    About
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="relative lg:inline-block text-left">
            <button
              onClick={toggleCategory2}
              className="text-Black font-bold hover:text-white focus:outline-none border-2 border-black px-3 py-1 rounded"
            >
              Category 2
            </button>
            {showCategory2 && (
              <div className="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Man
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Woman
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Child
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="relative lg:inline-block text-left">
            <button
              onClick={toggleCategory3}
              className="text-black font-bold hover:text-white focus:outline-none border-2 border-black px-3 py-1 rounded"
            >
              Category 3
            </button>

            {showCategory3 && (
              <div className="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Category 3 Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Category 3 Item 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Category 3 Item 3
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 bg-black border border-gray-300 rounded-md focus:outline-none"
          />
          <button className=" bg-lime-400 text-white border-2 border-black px-4 py-1 rounded-md hover:b bg-lime-500 focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNavBar;
