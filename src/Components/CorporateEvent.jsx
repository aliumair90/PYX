import React from "react";
import Nav from "./Nav";
import NewsletterForm from "./NewsletterForm";
import Foter from "./Foter";
import { useNavigate } from "react-router-dom";

const CorporateEvent = () => {
  const navigate = useNavigate();
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
            Corporate Events
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
      <div className="w-[70%] mx-auto">
        <div className="relative min-h-screen flex items-center justify-center mt-20">
          <div className="absolute bottom-4 w-[100%] md:w-[35%] lg:w-[35%] 2xl:w-[35%] left-4 z-10 bg-black bg-opacity-50 text-white p-4">
            <p className="border-yellow-500 border-2 py-10 px-5">
              We will also provide the set-up of tables and chairs for your
              guest count, which means Apricus can provide services that are
              ideal for educational seminars, roundtable discussions, and more.
            </p>
          </div>

          <div className="absolute ml-[50%] top-0 w-36 h-full z-0 bg-yellow-500">
            {/* Add any additional styling or content here if needed */}
          </div>

          <div className="relative  z-8 max-w-3xl">
            <img src="/Wedding6.jpg" alt="Event" className=" " />
          </div>
        </div>
      </div>
      <div className="mt-14 w-[70%] mx-auto flex">
        <div>
          <img src="/tali.PNG" alt="" />
        </div>
        <p className="text-l pt-4">
          LUNCHEONS - BOARD MEETINGS - AWARD BANQUETS - HOLIDAY PARTIES - GALAS
        </p>
        <div>
          <img src="tali.PNG" alt="" />
        </div>
      </div>
      <div className="w-[70%] mx-auto">
        <div className="relative min-h-screen flex items-center justify-center mt-20">
          <div className="absolute sm:left-0 xs:left-0 max-sm:left-0 bottom-4 w-[100%] md:w-[35%] lg:w-[35%] right-36 z-10 bg-black bg-opacity-50 text-white p-4">
            <p className="border-yellow-500 border-2 py-10 px-5">
              We will also provide the set-up of tables and chairs for your
              guest count, which means Apricus can provide services that are
              ideal for educational seminars, roundtable discussions, and more.
            </p>
          </div>

          <div className="absolute mr-[50%] top-0  w-36 h-full z-0 bg-yellow-500">
            {/* Add any additional styling or content here if needed */}
          </div>

          <div className="relative  z-8 max-w-3xl">
            <img src="/Wedding6.jpg" alt="Event" className=" " />
          </div>
        </div>
      </div>
      <div className="mt-14 w-[70%] mx-auto flex">
        <div>
          <img src="/tali.PNG" alt="" />
        </div>
        <p className="text-l pt-4">
          LUNCHEONS - BOARD MEETINGS - AWARD BANQUETS - HOLIDAY PARTIES - GALAS
        </p>
        <div>
          <img src="tali.PNG" alt="" />
        </div>
      </div>
      <div className="w-[70%] mx-auto">
        <div className="relative min-h-screen flex items-center justify-center mt-20">
          <div className="absolute left-0 bottom-4 w-[100%] md:w-[35%] lg:w-[35%]  z-10 bg-black bg-opacity-50 text-white p-4">
            <p className="border-yellow-500 border-2 py-10 px-5">
              We will also provide the set-up of tables and chairs for your
              guest count, which means Apricus can provide services that are
              ideal for educational seminars, roundtable discussions, and more.
            </p>
          </div>

          <div className="absolute  top-0 left-0 w-[50%] h-[30%] z-0 bg-yellow-500">
            {/* Add any additional styling or content here if needed */}
          </div>

          <div className="relative  z-8 max-w-3xl">
            <img src="/Wedding6.jpg" alt="Event" className=" " />
          </div>
        </div>
      </div>
      <div className="mt-20 bg-yellow-500">
        <div className="py-6 mb-3 text-center">
          <button
            type="button"
            onClick={navigate("/contact-us")}
            className=" font-raleway text-base text-white  bg-black font-medium rounded border-black border text-sm px-5 py-2.5 text-center  "
          >
            <id className="px-6">SCHEDULE A TOUR</id>
          </button>
        </div>
      </div>
      <NewsletterForm />
      <Foter />
    </>
  );
};

export default CorporateEvent;
