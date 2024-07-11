import React from "react";
import { PiChatSlash } from "react-icons/pi";
import NewsletterForm from "./NewsletterForm";
import Foter from "./Foter";

const Planing = () => {
  return (
    // <>
    //   <div className=" text-4xl mt-32 mb-10 text-yellow-500 font-dancing text-center">
    //     <h1>Planning Resources</h1>
    //   </div>
    //   {/* Background Image */}
    //   <div className="relative w-full h-screen bg-fixed">
    //     <img
    //       className="w-full h-[120%] object-cover absolute top-0 left-0 z-0"
    //       src="/Wedding1.jpg"
    //       alt="Wedding Background"
    //     />
    //   </div>

    //   {/* Overlay Content */}
    //   <div className="absolute top-10 left-0 w-full h-screen flex flex-col items-center opacity-95 justify-center z-10">
    //     <div className="mt-10 flex flex-col items-center justify-center py-12 ">
    //       <div className="max-w-6xl  py-64 mx-auto grid grid-cols-1 md:grid-cols-3 gap-1.5  ">
    //         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center ">
    //           <div>
    //             <svg
    //               preserveAspectRatio="none"
    //               data-bbox="4 4 92 92"
    //               viewBox="4 4 92 92"
    //               xmlns="http://www.w3.org/2000/svg"
    //               data-type="shape"
    //               role="presentation"
    //               aria-hidden="true"
    //               aria-label=""
    //             ></svg>
    //           </div>
    //           <h2 className="text-xl font-bold mb-4">FAQ</h2>
    //           <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded mb-2">
    //             VENUE RENTAL
    //           </button>
    //           <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded">
    //             POLICIES & PROCEDURES
    //           </button>
    //         </div>
    //         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
    //           <h2 className="text-xl font-bold mb-4">BLOG</h2>
    //           <p className="text-center text-gray-700 mb-4">
    //             Here at Apricus Venue, we are a host to many events type from
    //             weddings and receptions to birthday celebrations and corporate
    //             event. Let us help inspire your planning here in our blog
    //             section.
    //           </p>
    //           <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded">
    //             READ US!
    //           </button>
    //         </div>
    //         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
    //           <h2 className="text-xl font-bold mb-4">PRICING GUIDE</h2>
    //           <p className="text-center text-gray-700 mb-4">
    //             For pricing information, please click on the link below
    //           </p>
    //           <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded">
    //             FIND MORE
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex">
    //     <div className="absolute top-72  h-screen flex  items-center opacity-95 justify-center z-10">
    //       <div className="mt-20 flex w-[75%] mx-auto  items-center justify-center py-20 ">
    //         <div className="max-w-6xl   mx-auto grid grid-cols-1 md:grid-cols-2 gap-1.5  ">
    //           <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
    //             <h2 className="text-xl font-bold mb-4"> BLOG</h2>
    //             <p className="text-center text-gray-700 mb-4">
    //               Here at Apricus Venue, we are a host to many events type from
    //               weddings and receptions to birthday celebrations and corporate
    //               event. Let us help inspire your planning here in our blog
    //               section.
    //             </p>
    //             <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded">
    //               READ US!
    //             </button>
    //           </div>
    //           <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
    //             <h2 className="text-xl font-bold mb-4">PRICING GUIDE</h2>
    //             <p className="text-center text-gray-700 mb-4">
    //               For pricing information, please click on the link below
    //             </p>
    //             <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded">
    //               FIND MORE
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex">
    //     <div className="absolute top-[30rem] left-0 w-full  h-screen flex flex-col items-center opacity-95 justify-center z-10">
    //       <div className="mt-10 flex flex-col items-center  justify-center py-12 ">
    //         <div className="max-w-6xl   mx-auto grid grid-cols-1 md:grid-cols-3 gap-1.5  ">
    //           <div className="bg-white p-6  rounded-lg shadow-lg flex flex-col items-center"></div>
    //           <div className="bg-white p-6 px-16 rounded-lg shadow-lg flex flex-col items-center">
    //             <button className="bg-gray-700 text-white font-semibold py-2 px-16  rounded">
    //               Contact Us
    //             </button>
    //           </div>
    //           <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
    //             <h2 className="text-xl font-bold mb-4"></h2>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="text-3xl text-center font-dancing text-yellow-500">
        {" "}
        <h1>PRICING</h1>{" "}
      </div>
      <div className="text-center w-[50%] mx-auto">
        <p className="pt-5">
          ALL BOOKINGS INCLUDE SETUP & TAKE DOWN TIME (2hours)
        </p>
        <p className="pt-5">
          IN ORDER TO RESERVE YOUR DATE & TIME YOU MUST SUBMIT YOUR RENTAL
          AGREEMENT + DEPOSIT (50% off booking cost)
        </p>
      </div>
      <div className="w-[50%] pt-10 mb-5 mx-auto">
        <p>( NON - WEDDING PRICING ) :</p>
        <h1 className="text-xl font-bold pt-10">WEEKDAY:</h1>
        <h1 className="text-l font-bold pt-5">MONDAY- WEDNESDAY</h1>
        <p className="pt-5">5 - HOUR BOOKING : $ 1000 </p>
        <h1 className="text-l font-bold pt-10">THURSDAY</h1>
        <p className="pt-5">5 - HOUR BOOKING : $ 1500 </p>
        <h1 className="text-xl font-bold pt-10">WEEKEND DAY:</h1>
        <p className="pt-5">10 - HOUR BOOKING : $ 3200 </p>
        <p className="pt-5">6 - HOUR BOOKING : $ 2300 </p>
        <p className="pt-5">4 - HOUR BOOKING : $ 1800 </p>
        <p className="pt-14">Please inquire separately for wedding packages.</p>
        <h1 className="text-xl font-bold pt-10">PRICING INCLUDES:</h1>
        <p className="pt-5">
          All bookings already include setup and takedown time (2 hours){" "}
        </p>
        <p className="pt-5">Venue </p>
        <p className="pt-5">Restroom </p>
        <p className="pt-5">White Resin Folding Chairs (Up to 200) </p>
        <p className="pt-5">4 x Cocktail Tables </p>
        <p className="pt-5">High speed internet </p>
        <p className="pt-5">Parking </p>
        <p className="pt-5">Up to 25 Rectangular Banquet Tables </p>
        <p className="pt-5">
          Day-Of-Assistant (assistant for the day - this is not a planner){" "}
        </p>
        <p className="pt-5">
          House Sound System (For ambient/cocktail/background music){" "}
        </p>
        <p className="pt-5">
          Complimentary Set-up + Take-down of our tables and chairs (one hour
          set up/ one hour take down)
        </p>
        <p className="pt-5 flex">
          Additional Hours -{" "}
          <p className="font-bold">(add 1 hour to this package for $250)</p>
        </p>
        <p className="font-bold pt-5">**All events must end by midnight**</p>
      </div>
      <NewsletterForm />
      <Foter />
    </>
  );
};

export default Planing;
