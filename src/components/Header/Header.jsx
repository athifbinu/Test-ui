import React from "react";
import logo from "../../assets/seclob click away logo RE.png";
import { Link } from "react-router-dom";
import { RiArrowDownSFill } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <nav className="bg-white px-4 lg:px-6 py-3.5 ">
        <div className="flex flex-wrap  mx-auto max-w-screen-xl justify-between items-center">
          <Link to="#" className="flex">
            <img src={logo} className="mr-4 h-4 sm:h-7" alt="Logo" />
          </Link>

          <div className="flex gap-14 items-center text-blue-600 font-semibold">
            <p>Home</p>
            <p>offer</p>
          </div>

          <div className="flex gap-5 items-center font-semibold">
            <button className="bg-common shadow-xl  p-2 rounded-lg font-semibold hover.bg-indigo-600 py-3 text-sm text-white uppercase">
              Register as Partner
            </button>
            <button className="bg-common shadow-xl flex items-center  p-2 rounded-lg font-semibold hover.bg-indigo-600 py-3 text-sm text-white uppercase">
              Kozhikode
              <span>
                <RiArrowDownSFill size={20} />
              </span>
            </button>

            <p>Log in</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
