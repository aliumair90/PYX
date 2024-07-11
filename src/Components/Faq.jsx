import React, { useState } from "react";
import NewsletterForm from "./NewsletterForm";
import Foter from "./Foter";
const questions = [
  {
    question: "WHERE IS PYX PLACE ?",
    answer: "PYX PLACE is located at: 2330 Langford Street Dallas TX 75208.",
  },
  {
    question: "WHAT IS THE SIZE OF THE VENUE ?",
    answer: "Our venue is 3769 square feet with white walls & concrete floors.",
  },
  {
    question: "HOW MUCH TIME DO I HAVE TO SET - UP & TAKE - DOWN ?",
    answer:
      "Your set-up and take-down time are included within your booking. If you would like additional time, hours may be added per additional hour at $250. If you need extra time to decorate and/or tear down, please include this time in your booking. The earliest booking time accepted is 10 AM. The latest rental end time accepted is 12AM. ",
  },
  {
    question: "WHERE DO I PARK ?",
    answer:
      "There are several parking spaces on the side of the building along with plenty of free street parking for additional guests.",
  },
  {
    question: "ARE OUT SIDE CATERERS AND VENDORS ALLOWED ?",
    answer:
      "Currently, approved outside caterers are allowed, at no additional fee - ALL caterers must be licensed + insured and must have staff onsite for the entire duration of your event, until the very end of your booked time. To find out if your caterer of choice will be accepted, just let us know who you’d like to use and send their contact information so we can confirm their level of service will be suitable for your event.",
  },
  {
    question: "HOW DO I BOOK THE VENUE ?",
    answer:
      "Please complete the contact us and let us know what date(s) you are interested in, and someone will respond within 24-48 hours. Once you have seen the venue and are ready to book, we will send you a Rental Contract + Invoice for your 50% deposit. Once both items are completed, you will be confirmed! No booking is confirmed until we receive this payment. The remaining balance is due 30 days prior to your event date.",
  },
];

const Faq = () => {
  const [isRentalOpen, setIsRentalOpen] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="">
        <img
          className=" w-full object-cover object-center"
          src="/Faq.jpg "
          alt="nature image"
        ></img>
      </div>
      <div className="mt-20">
        <h1 className="text-3xl text-yellow-500 text-center">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="my-10 flex justify-center text-center">
        <img src="./tali.PNG"></img>
      </div>

      <div className="max-w-4xl mx-auto py-10">
        <div className="flex mb-8 gap-8 font-bold   hover:text-yellow-500">
          <h1
            onClick={() => setIsRentalOpen(true)}
            className={isRentalOpen ? "text-yellow-500" : "text-black"}
          >
            Venue Rental
          </h1>
        </div>

        {isRentalOpen
          ? questions.map((item, index) => (
              <div key={index} className="mb-4 border-b">
                <h2
                  className="text-l mb-5 font-semibold cursor-pointer flex items-center justify-between py-2"
                  onClick={() => toggleDropdown(index)}
                >
                  {item.question}
                  <svg
                    className={`ml-2 h-5 w-5 transition-transform transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06-.02L10 10.614l3.71-3.405a.75.75 0 111.04 1.08l-4 3.674a.75.75 0 01-1.04 0l-4-3.674a.75.75 0 01-.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </h2>
                {openIndex === index && (
                  <p className="mt-2 mb-5 text-gray-700">{item.answer}</p>
                )}
              </div>
            ))
          : question.map((item, index) => (
              <div key={index} className="mb-4 border-b">
                <h2
                  className="text-l mb-5 font-semibold cursor-pointer flex items-center justify-between py-2"
                  onClick={() => toggleDropdown(index)}
                >
                  {item.question}
                  <svg
                    className={`ml-2 h-5 w-5 transition-transform transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06-.02L10 10.614l3.71-3.405a.75.75 0 111.04 1.08l-4 3.674a.75.75 0 01-1.04 0l-4-3.674a.75.75 0 01-.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </h2>
                {openIndex === index && (
                  <p className="mt-2 mb-5 text-gray-700">{item.answer}</p>
                )}
              </div>
            ))}
      </div>
      <div className="mt-20 bg-customBg-50">
        <div className="py-6 mb-3 text-center">
          <button
            type="button"
            className=" font-raleway text-base text-white bg-yellow-500 hover:bg-black font-medium rounded border-black border text-sm px-10 py-2.5 text-center  "
          >
            <id className="px-6">Contact Us</id>
          </button>
        </div>
      </div>
      <NewsletterForm />
      <Foter />
    </>
  );
};

export default Faq;
