import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 z-20 bg-customBg-50 flex w-full border-b-4 border-black">
        <div className="w-[12%] pl-20 pt-5 pb-2">
          <img src="/Logo1.png" alt="Logo" />
        </div>
        <div className="flex pt-7 pl-96 gap-4  text-[0.8125rem] font-semibold">
          <div className="hover:text-yellow-500">
            <Link to="/about-us">ABOUT US</Link>
          </div>
          <div className="hover:text-yellow-500">
            <Link to="/venue">THE VENUE</Link>
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="hover:text-yellow-500">
              <span>OUR SERVICES</span>
            </div>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-customBg-50 border border-gray-200 rounded-md shadow-lg">
                <Link
                  to="/weddings"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Weddings
                </Link>
                <Link
                  to="/corporate-event"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Corporate Event
                </Link>
                <Link
                  to="/social-event"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Social Event
                </Link>
              </div>
            )}
          </div>
          <div className="hover:text-yellow-500">
            <Link to="/planning">PLANNING</Link>
          </div>
        </div>
        <div className="pl-40 mt-4">
          <Link to="/contact-us">
            <button
              type="button"
              className=" text-base text-white border border-yellow-40 bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium  rounded-l border-gray-300 border-2 text-sm px-12 py-1.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 hover:bg-gray-500"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
