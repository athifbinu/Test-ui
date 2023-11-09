import React from "react";
import { Link } from "react-router-dom";
import mobile from "../assets/Component 6.png";
import mask from "../assets/Mask group.png";

import { BiSearchAlt } from "react-icons/bi";

import all from "../assets/all.png";

import music from "../assets/music.png";
import pesandage from "../assets/pesandage.png";

import car from "../assets/car.png";

const Home = () => {
  return (
    <div>
      <section className="bg-slate-100 mb-14">
        <div className="container">
          <div className="p-4">
            <img className="w-10" src={mobile} alt="" />
          </div>
          <div className="">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-blue-800 font-semibold text-4xl mb-2 ">
                  What are You
                </h1>
                <span className="text-green-800 text-2xl">
                  looking{" "}
                  <span className="text-blue-800 text-2xl font-semibold">
                    for ....?
                  </span>
                </span>
              </div>

              <div>
                <img src={mask} alt="" />
              </div>
            </div>
          </div>

          <div
            className="px-[30px] py-6 max-w-[1170px] 
      mx-auto flex flex-col lg:flex-row justify-between
      gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-1 bg-white 
      lg:bg-transparent lg:backdrop-blur rounded-lg"
          >
            <div>
              <input
                type="text"
                placeholder="Search anything"
                className="p-2.5 w-full text-gray-500
  
          rounded-md shadow-sm outline-none appearance-none
      
          font-bold"
              />
            </div>

            <div>
              <button className="bg-blue-700 shadow-xl  p-14 rounded-lg font-semibold hover.bg-indigo-600 py-3 text-sm text-white uppercase">
                search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <section className="">
            <div className="p-4">
              <img className="" src={all} alt="" />
            </div>
          </section>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-between p-5 ">
            <img className="w-96" src={music} alt="" />
            <img className="w-96" src={pesandage} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-blue-100">
        <div className="container">
          <div className="flex justify-between p-9 font-semibold">
            <p className="text-blue-500">Vehicle services</p>
            <p className="text-green-400">View More</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 p-5">
            <img className="w-40" src={car} alt="" />
            <img className="w-40" src={car} alt="" />
            <img className="w-40" src={car} alt="" />
            <img className="w-40" src={car} alt="" />
            <img className="w-40" src={car} alt="" />
            <img className="w-40" src={car} alt="" />
            <img className="w-40" src={car} alt="" />
            <img className="w-40" src={car} alt="" />
            <img className="w-40" src={car} alt="" />
            <img className="w-40" src={car} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
