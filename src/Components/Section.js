import React from "react";
import image1 from "../assets/img.jpg";

const Section = () => {
  return (
    <div className="mx-4 my-8 p-4 border-2 rounded-lg border-green-500 flex flex-col lg:flex-row bg-black">
      <div className="lg:w-2/12 mb-4 lg:mb-0">
        <img className="w-full rounded-lg" src={image1} alt="Sample" />
      </div>

      <div className="lg:ml-4 w-full border-2 border-green-500 rounded-lg p-4">
        <div className="flex flex-col sm:flex-row justify-between mb-0">
          <div className="mb-4 sm:mb-0 text-center lg:text-left">
            <h1 className="font-bold text-white text-2xl">Shubham</h1>
          </div>

          <div className="sm:flex sm:justify-between " >
            <div className="mb-4 sm:mb-0 sm:flex">
              <span className="bg-green-500  text-black rounded-lg px-2 py-1 block mb-2 sm:inline-block sm:mr-4">
                No Rug
              </span>
              <span className="bg-green-500  text-black rounded-lg px-2 py-1 block mb-2 sm:inline-block sm:mr-4">
                Airdrop
              </span>
              <span className=" bg-violet-800 text-black rounded-lg px-2 py-1 block mb-2 sm:inline-block sm:mr-4">
                Verifed
              </span>
            </div>

            <div className="sm:flex">
              <span className="bg-green-500 rounded-lg px-2 py-1 block mb-2 sm:inline-block sm:mr-4">
                hjh
              </span>
              <span className=" bg-violet-800 rounded-lg px-2 py-1 block mb-2 sm:inline-block sm:mr-4">
                hjh
              </span>
              <span className=" bg-blue-600 rounded-lg px-2 py-1 block mb-2 sm:inline-block sm:mr-4">
                hjh
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 my-2">
          ddhgdjghdfghdkghdjkhgjhghjgjh Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>

        <div className="flex flex-wrap bg-slate-600 px-2 rounded-lg">
          <h1 className="text-lg font-semibold text-white rounded-lg m-2">
            Floor Price
          </h1>
          <h1 className="text-lg font-semibold text-white rounded-lg m-2">
            Supply
          </h1>
          <h1 className="text-lg font-semibold text-white rounded-lg m-2">
            BlockChain
          </h1>
          <h1 className="text-lg font-semibold text-white rounded-lg m-2">
            Mint Date
          </h1>
          <h1 className="text-lg font-semibold text-white rounded-lg m-2">
            Mint time
          </h1>
          <h1 className="text-lg font-semibold text-white rounded-lg m-2">
            Vote
          </h1>
          <h1 className="text-lg font-semibold text-white rounded-lg m-2">
            20000
          </h1>
          <h1 className="text-lg font-semibold text-white rounded-lg m-2">
            2000TV
          </h1>
          <h1 className="text-lg font-semibold text-white rounded-lg m-2">
            HHHHH
          </h1>
          <h1 className="text-lg font-semibold text-white rounded-lg m-2">
            popopo
          </h1>
          <h1 className="text-lg font-semibold text-white rounded-lg m-2">
            1:00 PM
          </h1>
          <h1 className="text-lg font-semibold text-white rounded-lg m-2">
            3 M 2023
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section;
