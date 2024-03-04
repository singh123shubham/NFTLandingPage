
const NavBar0 = () => {
  

  return (
    <nav className="">
      <div className="container  flex justify-between items-center">
        {/* Logo/Name on the left */}
        <h1 className=" p-2 ml-2 sm:ml-10 text-2xl text-white font-extrabold transition-all duration-300 hover:text-green-500">Trending:</h1>


        {/* Login/Logout buttons on the right */}
        <div className="flex items-center space-x-4">
          <button
            className="border-2 border-green-500  text-green-500 rounded-2xl px-4 py-1 rounded"
          >
            Sign in
          </button>

          <button
            className=" border-2 border-green-500 text-green-500 rounded-2xl px-4 py-1 rounded"
          >
            Sign out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar0;
