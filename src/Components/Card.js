import React from "react";
import image1 from "../assets/img.jpg";
const Card = () => {
  return (
<div className="bg-red-400 w-full md:w-6/12 lg:w-3/12 rounded-lg border-2 border-green-500 m-8 cursor-pointer">
    <div className="">
        <div className="absolute bg-lime-400 mt-4 w-auto p-2">
            <h2 className="font-bold text-xs sm:text-sm md:text-base">In 80 days</h2>
        </div>

        <div className="absolute bg-lime-400 mt-4 ml-56 w-10 p-2 rounded-lg flex justify-center items-center border-2 border-black">
            <h2 className="font-bold text-xs sm:text-sm md:text-base">3</h2>
        </div>

        <div className="absolute bg-lime-400 flex items-center justify-center w-36 mt-60 ml-16 rounded-lg border-2 border-black">
            <h1 className="m-2 font-bold text-xs sm:text-sm md:text-base">Azuki</h1>
        </div>

        <div className='absolute bg-lime-400 w-10 mt-56 ml-4 p-2 rounded-lg flex justify-center items-center border-2 border-black'>
            <h2 className="text-xs sm:text-sm md:text-base">I</h2>
        </div>
        <div className='absolute bg-lime-400 w-10 mt-56 ml-56 p-2 rounded-lg flex justify-center items-center border-2 border-black'>
            <h2 className="text-xs sm:text-sm md:text-base">W</h2>
        </div>
        <img src={image1} alt="image" className="w-full rounded-md shadow-lg"/>
    </div>

    <div className="flex flex-wrap bg-black justify-center p-4 rounded-lg">
        <h3 className="m-3 text-white text-xs sm:text-sm md:text-base">Price</h3>
        <h3 className="m-3 text-white text-xs sm:text-sm md:text-base">Supply</h3>
        <h3 className="m-3 text-white text-xs sm:text-sm md:text-base">Promote</h3>
        <h3 className="m-3 text-emerald-400 text-xs sm:text-sm md:text-base">256HGT</h3>
        <h3 className="m-3 text-emerald-400 text-xs sm:text-sm md:text-base">22222</h3>
        <h3 className="m-3 text-pink-500 text-xs sm:text-sm md:text-base">20XX</h3>
    </div>
</div>

  );
};

export default Card;