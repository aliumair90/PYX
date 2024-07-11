import React from "react";
import Nav from "./Nav";
import NewsletterForm from "./NewsletterForm";
import Foter from "./Foter";
import { useNavigate } from "react-router-dom";

const Venue = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className="max-w-full max-h-full bg-fixed">
        <img src="/Venue.jpg" alt="" />
      </div>
      <div className="text-3xl mt-10 text-yellow-500 text-center font-dancing ">
        PYX PLACE AMENTIES
      </div>
      <div className="text-center pt-5">VENUE (3,769 SQUARE FEET)</div>
      <div className="text-center mt-5 w-[50%] mx-auto">
        <p>
          {" "}
          The number of people that can fit in a 3769 square foot event space
          can vary depending on the layout and purpose of the event. As a
          general guideline, for standing receptions or crowded events, you can
          estimate about 7 -10 square feet per person. For seated events with
          tables and chairs, you may need about 15 -20 square feet per person to
          allow for comfortable seating arrangements and space for movement.
        </p>
      </div>
      {/* <div className="text-center pt-10">About us</div> */}
      <div className="text-center pt-20 font-dancing text-yellow-500 text-4xl">
        {" "}
        The Venue Layout
      </div>
      <div className="text-center pt-10">
        <p>
          PYX PLACE offers a full-scale event space that is ideal for all
          meetings, events, and weddings alike.
        </p>
        <p className="pt-5">
          Based on these estimates, a 3769 square foot could potentially
          accommodate:{" "}
        </p>
      </div>
      <div className="w-[30%] pt-10 mx-auto">
        <img src="/Layout.jpg" alt="" />
      </div>
      {/* <div className="pt-20 flex  justify-center gap-2">
        <div className=" border border-yellow-500 border-2 p-10 h-3/5 ">
          <h1 className="text-yellow-700 font-semibold pt-16 ">
            CONTEMPORARY <br /> BALLROOM
          </h1>
          <p className="pt-8 text-gray-500">
            Full length windows that offer <br /> a beautiful unobstructed{" "}
            <br />
            water view and lots of natural <br /> light during the day can or{" "}
            <br /> you can utilize the motorized <br /> shades to block light
            which <br /> will accomplish an alluring <br />
            lighting ambiance to enhance <br /> your design experience.
          </p>
        </div>
        <div className="w-[40.5%]  border-yellow-500  border-2">
          <img className="  " src="/Venue.png" alt="" />
        </div>
      </div>
      <div className="pt-2 flex  justify-center gap-2">
        <div className="w-[40.5%]  border-yellow-500  border-2">
          <img className="  " src="/Venue.png" alt="" />
        </div>
        <div className=" border border-yellow-500 border-2 p-10 h-3/5 ">
          <h1 className="text-yellow-700 font-semibold pt-16 ">
            CONTEMPORARY <br /> BALLROOM
          </h1>
          <p className="pt-8 text-gray-500">
            Full length windows that offer <br /> a beautiful unobstructed{" "}
            <br />
            water view and lots of natural <br /> light during the day can or{" "}
            <br /> you can utilize the motorized <br /> shades to block light
            which <br /> will accomplish an alluring <br />
            lighting ambiance to enhance <br /> your design experience.
          </p>
        </div>
      </div>
      <div className="pt-2 flex  justify-center gap-2">
        <div className=" border border-yellow-500 border-2 p-10 h-3/5 ">
          <h1 className="text-yellow-700 font-semibold pt-16 ">
            CONTEMPORARY <br /> BALLROOM
          </h1>
          <p className="pt-8 text-gray-500">
            Full length windows that offer <br /> a beautiful unobstructed{" "}
            <br />
            water view and lots of natural <br /> light during the day can or{" "}
            <br /> you can utilize the motorized <br /> shades to block light
            which <br /> will accomplish an alluring <br />
            lighting ambiance to enhance <br /> your design experience.
          </p>
        </div>
        <div className="w-[40.5%]  border-yellow-500  border-2">
          <img className="  " src="/Venue.png" alt="" />
        </div>
      </div>
      <div className="pt-2 flex  justify-center gap-2">
        <div className="w-[40.5%]  border-yellow-500  border-2">
          <img className="  " src="/Venue.png" alt="" />
        </div>
        <div className=" border border-yellow-500 border-2 p-10 h-3/5 ">
          <h1 className="text-yellow-700 font-semibold pt-16 ">
            CONTEMPORARY <br /> BALLROOM
          </h1>
          <p className="pt-8 text-gray-500">
            Full length windows that offer <br /> a beautiful unobstructed{" "}
            <br />
            water view and lots of natural <br /> light during the day can or{" "}
            <br /> you can utilize the motorized <br /> shades to block light
            which <br /> will accomplish an alluring <br />
            lighting ambiance to enhance <br /> your design experience.
          </p>
        </div>
      </div>
      <div className="pt-2 flex  justify-center gap-2">
        <div className=" border border-yellow-500 border-2 p-10 h-3/5 ">
          <h1 className="text-yellow-700 font-semibold pt-16 ">
            CONTEMPORARY <br /> BALLROOM
          </h1>
          <p className="pt-8 text-gray-500">
            Full length windows that offer <br /> a beautiful unobstructed{" "}
            <br />
            water view and lots of natural <br /> light during the day can or{" "}
            <br /> you can utilize the motorized <br /> shades to block light
            which <br /> will accomplish an alluring <br />
            lighting ambiance to enhance <br /> your design experience.
          </p>
        </div>
        <div className="w-[40.5%]  border-yellow-500  border-2">
          <img className="  " src="/Venue.png" alt="" />
        </div>
      </div>
      <div className="flex pt-2 justify-center gap-1.5">
        <div className=" border border-yellow-500 border-2 p-8 h-3/5 ">
          <h1 className="text-yellow-700 font-semibold pt-16 ">
            CONTEMPORARY <br /> BALLROOM
          </h1>
          <p className="pt-8 text-gray-500">
            Full length windows that offer <br /> a beautiful unobstructed{" "}
            <br />
            water view and lots of natural <br /> light during the day can or{" "}
            <br /> you can utilize the motorized <br /> shades to block light
            which <br /> will accomplish an alluring <br />
            lighting ambiance to enhance <br /> your design experience.
          </p>
        </div>
        <div className=" border border-yellow-500 border-2 p-8 h-3/5 ">
          <h1 className="text-yellow-700 font-semibold pt-16 ">
            CONTEMPORARY <br /> BALLROOM
          </h1>
          <p className="pt-8 text-gray-500">
            Full length windows that offer <br /> a beautiful unobstructed{" "}
            <br />
            water view and lots of natural <br /> light during the day can or{" "}
            <br /> you can utilize the motorized <br /> shades to block light
            which <br /> will accomplish an alluring <br />
            lighting ambiance to enhance <br /> your design experience.
          </p>
        </div>
        <div className=" border border-yellow-500 border-2 p-8 h-3/5 ">
          <h1 className="text-yellow-700 font-semibold pt-16 ">
            CONTEMPORARY <br /> BALLROOM
          </h1>
          <p className="pt-8 text-gray-500">
            Full length windows that offer <br /> a beautiful unobstructed{" "}
            <br />
            water view and lots of natural <br /> light during the day can or{" "}
            <br /> you can utilize the motorized <br /> shades to block light
            which <br /> will accomplish an alluring <br />
            lighting ambiance to enhance <br /> your design experience.
          </p>
        </div>
      </div> */}
      <div className="flex justify-center mt-16 rotate-180 ">
        <img src="/Sun.png" alt="" />
      </div>
      <div className="flex justify-center">
        <div className="  w-1/2 text-center  mt-16 border-2 border-yellow-500">
          <div className=" pt-14">
            <h1 className="font-dancing text-3xl italic text-yellow-500">
              What's Included
            </h1>
            <p className="pt-5">CAPACITY 250 SEATED / 400 STANDING</p>
            <p className="pt-5">GORGEOUS NATURAL LIGHT (DAYTIME) </p>
            <p className="pt-5">INTIMATE LIGHTING (NIGHTTIME)</p>
            <p className="pt-5">HIGH SPEED INTERNET </p>
            <p className="pt-5">RESTROOMS</p>
            <p className="pt-5">200 WHITE FOLDING RESIN CHAIRS</p>
            <p className="pt-5">5 COCKTAIL TABLES</p>
            <p className="pt-5">29 6’ RECTANGULAR BANQUET TABLES</p>
            <br />
            <br />
            <p className="text-yellow-500">
              *Extended venue rental available for an additional fee* <br />{" "}
              *Ask about our vendor policies*
            </p>
            <div className="  pt-10 flex justify-center">
              <img src="/tali.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-24 flex justify-center">
        <button
          type="button"
          onClick={navigate("/contact-us")}
          className=" px-10 md:px-28 lg:px-28 2xl:px-28  text-base text-white border rounded-md border-yellow-40 bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium  border-gray-300 border-2 text-sm px-12 py-1.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 hover:bg-gray-500"
        >
          SCHEDULE A TOUR
        </button>
      </div>
      <NewsletterForm />
      <Foter />
    </>
  );
};

export default Venue;
