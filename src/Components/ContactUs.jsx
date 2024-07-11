import React from "react";
import Nav from "./Nav";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaThumbsUp,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import NewsletterForm from "./NewsletterForm";
import Foter from "./Foter";
const ContactUs = () => {
  return (
    <>
      <div>
        {" "}
        <Nav />{" "}
      </div>

      <div className="flex  flex-col lg:flex-row 2xl:flex-row w-full">
        <div className="w-[100%]">
          <br />
          <br />
          <br />
          <br />
          <h1 className="text-3xl text-center text-yellow-500 font-dancing">
            Let's Connect!!
          </h1>
          <br />
          <br />
          <div className=" mx-[20%]">
            <p className=" text-center text-sm text-gray-500">
              The first step to planning any event is securing your venue.
              Whether you are looking to host a wedding, sweet-sixteen,
              quinceanera, or school event, we want to hear from you.
              <br />
              <br />
              Contact us today to schedule a tour and kickstart the planning
              process for your special upcoming event!
            </p>
          </div>
          <div className="flex justify-center mt-16 rotate-180 ">
            <img src="/Sun.png" alt="" />
          </div>
          <div className="max-w-lg mx-auto p-8 bg-white shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-b-2 border-yellow-500 focus:outline-none focus:border-yellow-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-b-2 border-yellow-500 focus:outline-none focus:border-yellow-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full border-b-2 border-yellow-500 focus:outline-none focus:border-yellow-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="mt-1 block w-full border-b-2 border-yellow-500 focus:outline-none focus:border-yellow-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select your Event type
                  </label>
                  <select className="mt-1 block w-full border-b-2 border-yellow-500 focus:outline-none focus:border-yellow-600">
                    <option>Event Type 1</option>
                    <option>Event Type 2</option>
                    <option>Event Type 3</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Budget
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-b-2 border-yellow-500 focus:outline-none focus:border-yellow-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date of the Event
                  </label>
                  <input
                    type="date"
                    className="mt-1 block w-full border-b-2 border-yellow-500 focus:outline-none focus:border-yellow-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full border-b-2 border-yellow-500 focus:outline-none focus:border-yellow-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    How Did You Hear About Us
                  </label>
                  <select className="mt-1 block w-full border-b-2 border-yellow-500 focus:outline-none focus:border-yellow-600">
                    <option>Search Engine(Google)</option>
                    <option>Social Media</option>
                    <option>E-mail</option>
                    <option>Advertising</option>
                    <option>Word of Mouth</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Type your message here...
                </label>
                <textarea
                  className="mt-1 block w-full border-b-2 border-yellow-500 focus:outline-none focus:border-yellow-600"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="">
          <img
            className="h-full overflow-hidden"
            src="/WeddingVenue.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-white py-8 pt-16">
        <div className=" mx-auto flex  flex-col lg:flex-row md:flex-row 2xl:flex-row justify-between items-center space-x-2 text-yellow-500">
          <div className="flex flex-col items-center">
            <FaEnvelope size={20} />
            <a
              href="mailto:adewale@pyxplace.com"
              className="text-black text-sm hover:underline"
            >
              adewale@pyxplace.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope size={20} />
            <a
              href="mailto:adewale@pyxplace.com"
              className="text-black text-sm hover:underline"
            >
              bookings@pyxplace.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <FaPhone size={20} />
            <a
              href="tel:214-785-2233"
              className="text-black pt-1 text-sm hover:underline"
            >
              214-785-2233
            </a>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt size={20} />
            <div className="text-center text-sm pt-1 text-black">
              2330 Langford Street Dallas TX 75208
            </div>
          </div>
          {/* <div className="flex flex-col items-center">
            <FaThumbsUp size={20} />
            <div className="flex space-x-2 mt-2 text-sm text-black">
              <a href="https://facebook.com" className="hover:text-gray-700">
                <FaFacebook size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-700">
                <FaLinkedin size={20} />
              </a>
              <a href="https://youtube.com" className="hover:text-gray-700">
                <FaYoutube size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-gray-700">
                <FaInstagram size={20} />
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <NewsletterForm />
      <Foter />
    </>
  );
};

export default ContactUs;
