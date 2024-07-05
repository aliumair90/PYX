import React from "react";
import { Link } from "react-router-dom";

const Foter = () => {
  return (
    <div className="bg-white flex h-full">
      <div
        className="
      max-w-7xl  py-6  sm:px-6 lg:px-8 pt-24"
      >
        <div className=" ">
          <div className="w-72">
            <img
              src="/Logo1.png"
              alt="Apricus_Logo"
              className="w-[70%] h-auto"
            />
          </div>
          <div>
            <h3 className="text-3xl italic font-bold text-yellow-500 font-dancing">
              A modern venue with water views
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-6 mr-40 border-l-yellow-500 border-l-2 px-4 sm:px-6 lg:px-8">
          <div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-xs font-semibold">
                <Link to="/" className="underline hover:no-underline">
                  HOME
                </Link>
              </p>
              <p className="text-xs font-semibold">
                <Link to="/about-us" className="underline hover:no-underline">
                  ABOUT US
                </Link>
              </p>
              <p className="text-xs font-semibold">
                <Link to="/venue" className="underline hover:no-underline">
                  THE VENUE
                </Link>
              </p>
            </div>
            <p className="text-xs font-semibold">PLANNING</p>
            <ul className="list-disc pl-4">
              <li className="text-xs">
                <Link to="/faq" className="underline hover:no-underline">
                  FAQ
                </Link>
              </li>
              <li className="text-xs">
                <Link to="/blog" className="underline hover:no-underline">
                  Blog
                </Link>
              </li>
              <li className="text-xs">
                <Link
                  to="/price-guide"
                  className="underline hover:no-underline"
                >
                  Price Guide
                </Link>
              </li>
              <li className="text-xs">
                <Link
                  to="/convenience"
                  className="underline hover:no-underline"
                >
                  For Your Convenience
                </Link>
              </li>
              <li className="text-xs">
                <Link
                  to="/explore-nearby"
                  className="underline hover:no-underline"
                >
                  Explore Nearby
                </Link>
              </li>
            </ul>
            <p className="text-xs font-semibold">
              <Link to="/events" className="underline hover:no-underline">
                EVENTS
              </Link>
            </p>
            <p className="text-xs font-semibold">
              <Link to="/portal" className="underline hover:no-underline">
                PORTAL
              </Link>
            </p>
          </div>
          <p className="text-xs font-semibold">OUR SERVICES</p>
          <ul className="list-disc pl-4">
            <li className="text-xs">
              <Link to="/weddings" className="underline hover:no-underline">
                Wedding
              </Link>
            </li>
            <li className="text-xs">
              <Link
                to="/corporate-event"
                className="underline hover:no-underline"
              >
                Corporate Events
              </Link>
            </li>
            <li className="text-xs">
              <Link to="/social-event" className="underline hover:no-underline">
                Social Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-xs font-semibold">OUR SERVICES</p>
      <ul className="list-disc pl-4">
        <li className="text-xs">
          <Link to="/weddings" className="underline hover:no-underline">
            Wedding
          </Link>
        </li>
        <li className="text-xs">
          <Link to="/corporate-event" className="underline hover:no-underline">
            Corporate Events
          </Link>
        </li>
        <li className="text-xs">
          <Link to="/social-event" className="underline hover:no-underline">
            Social Events
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Foter;
