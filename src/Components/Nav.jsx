import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu

  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to top
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  return (
    <>
      <nav className="fixed max-sm:justify-between sm:justify-between top-0 z-20 bg-customBg-50 flex w-full border-b-4 border-black">
        <div className="w-[25%] md:w-[12%] lg:w-[12%] 2xl:w-[12%] md:pl-10 lg:pl-10 2xl:pl-20 pt-5 pb-2">
          <img src="/Logo1.png" alt="Logo"  />
        </div>
        <div className="flex pt-7 pl-96 md:pl-20 gap-4 text-[0.8125rem] font-semibold hidden md:flex"> {/* Hide on mobile */}
          <div className="hover:text-yellow-500 ">
            <Link onClick={handleLinkClick} to="/about-us" >ABOUT US</Link>
          </div>
          <div className="hover:text-yellow-500">
            <Link onClick={handleLinkClick}  to="/venue">THE VENUE</Link>
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
                <Link onClick={handleLinkClick}
                  to="/weddings"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Weddings
                </Link>
                <Link onClick={handleLinkClick}
                  to="/corporate-event"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Corporate Event
                </Link>
                <Link onClick={handleLinkClick}
                  to="/social-event"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Social Event
                </Link>
              </div>
            )}
          </div>
          <div className="hover:text-yellow-500">
            <Link onClick={handleLinkClick} to="/planning">PRICING</Link>
          </div>
        </div>
        <div className="pl-40 mt-4 hidden md:block"> {/* Hide on mobile */}
          <Link onClick={handleLinkClick} to="/contact-us">
            <button
              type="button"
              className="text-base text-white border border-yellow-40 bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-l border-gray-300 border-2 text-sm px-12 py-1.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 hover:bg-gray-500"
            >
              Contact Us
            </button>
          </Link>
        </div>
        <div className="md:hidden float-end flex pr-4"> {/* Show on mobile */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className=" fixed w-full md:hidden max-sm:mt-[72px] sm:mt-[110px] bg-customBg-50 border-t border-gray-200">
          <div className="flex flex-col p-4">
            <Link onClick={handleLinkClick} to="/about-us" className="py-2 hover:text-yellow-500">ABOUT US</Link>
            <Link onClick={handleLinkClick} to="/venue" className="py-2 hover:text-yellow-500">THE VENUE</Link>
            <div className="relative">
              <span className="py-2 hover:text-yellow-500">OUR SERVICES</span>
              <div className="mt-2 w-full bg-customBg-50 border border-gray-200 rounded-md shadow-lg">
                <Link onClick={handleLinkClick} to="/weddings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Weddings</Link>
                <Link onClick={handleLinkClick} to="/corporate-event" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Corporate Event</Link>
                <Link onClick={handleLinkClick} to="/social-event" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Social Event</Link>
              </div>
            </div>
            <Link onClick={handleLinkClick} to="/planning" className="py-2 hover:text-yellow-500">PLANNING</Link>
            <Link onClick={handleLinkClick} to="/contact-us" className="py-2">
              <button
                type="button"
                className="text-base text-white border border-yellow-40 bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-l border-gray-300 border-2 text-sm px-12 py-1.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 hover:bg-gray-500"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
