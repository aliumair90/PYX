import React from "react";
import Nav from "./Nav";

const SocialEvent = () => {
  return (
    <>
      <Nav />

      <div className="max-w-full max-h-full bg-fixed">
        <img
          className="w-full h-full object-cover"
          src="/Images1.jpg"
          autoPlay
          loop
          muted
        ></img>
      </div>
      <div className=" text-center">
        <div className="text-center ">
          <h1 className="  text-5xl text-yellow-500 mt-28 font-dancing">
            Social Events
          </h1>
        </div>
        <div className="mt-24">
          <h1 className=" text-[19px] text-gray-700 font-wixui tracking-wide font-semibold">
            We love corporate events just as much as we love weddings!
          </h1>
        </div>
        <div className="pt-14">
          <h1 className=" font-raleway text-sm text-gray-600 tracking-wide">
            A new and exciting way to mix business and pleasure. Take your next
            meeting, workshop, or <br /> conference outside of your office doors
            and heighten your employee’s experience
          </h1>
        </div>
        <div className="pt-5">
          <h1 className=" font-raleway text-sm text-gray-600 tracking-wide">
            Apricus Venue offers full-day and half-day rentals depending on what
            kind of event you are looking <br /> to host. Venue rental
            timeframes range from 6 hours to 12 hours
          </h1>
        </div>
      </div>
      <div>
        <div className="relative min-h-screen flex w-[90%] pl-20 mt-20">
          <div className="absolute bottom-4 w-[35%]  z-10 bg-black bg-opacity-50 text-white p-4">
            <p className="border-yellow-500 border-2 py-10 px-5">
              We will also provide the set-up of tables and chairs for your
              guest count, which means Apricus can provide services that are
              ideal for educational seminars, roundtable discussions, and more.
            </p>
          </div>

          <div className="absolute left-10 top-0  w-36 h-[75%] z-0 bg-yellow-500">
            {/* Add any additional styling or content here if needed */}
          </div>

          <div className="relative left-0 z-8 max-w-2xl">
            <img src="/Wedding6.jpg" alt="Event" className=" " />
          </div>
        </div>
      </div>

      <div className="w-[90%] flex justify-end">
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="absolute right-20 top-0  w-36 h-full z-0 bg-yellow-500">
            {/* Add any additional styling or content here if needed */}
          </div>

          <div className="relative left-0 z-8 max-w-2xl">
            <img src="/Wedding6.jpg" alt="Event" className=" " />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialEvent;
