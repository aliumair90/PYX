import React, { useState } from "react";
import NewsletterForm from "./NewsletterForm";
import Foter from "./Foter";
const questions = [
  {
    question: "What is included in the rental price of the facility?",
    answer:
      "The venue rental includes a 12-hour rental, the set-up of tables and chameleon chairs, two private suites, a small lounge area, an illuminated top bar with plenty of space to refrigerate drinks as well as an ice machine, 150 self-parking spaces, and a covered terrace perfect for an intimate cocktail reception.",
  },
  {
    question: "Can I purchase additional hours for my event?",
    answer:
      "Yes, additional hours can be purchased for your event. Please contact our team for more details and pricing.",
  },
  {
    question: "Is there rehearsal time included in my rental?",
    answer:
      "Yes, a complimentary rehearsal time is included in your rental. Please coordinate with our team to schedule your rehearsal.",
  },
  {
    question: "Are taxes and fees included in the venue rental pricing?",
    answer:
      "Yes, all taxes and fees are included in the venue rental pricing. There are no hidden charges.",
  },
  {
    question: "What is the latest my event can end?",
    answer:
      "The latest your event can end is midnight. All events must conclude by this time to allow for clean-up and closure of the venue.",
  },
  {
    question: "How many guests can Apricus accommodate?",
    answer:
      "Pxy Place can accommodate up to 300 guests for a seated event and up to 365 guests for a cocktail reception",
  },
  {
    question: "Does Apricus offer any additional discounts?",
    answer:
      "Discounts may apply during promotions or seasonal dates. Please contact our sales team for more information. ",
  },
];
const question = [
  {
    question: "Do we need an appointment to tour the venue?",
    answer:
      "Walk-ins are welcome, but we do recommend scheduling an appointment to visit the venue to ensure that we are adequately prepared for your arrival. To schedule an appointment please call 940-400-3590.",
  },
  {
    question: "How do I reserve a date for my event?",
    answer:
      "Dates are available on a first come first served basis and no date is guaranteed until a signed contract, booking downpayment, and refundable security deposit are received.",
  },
  {
    question: "Does Apricus allow outside vendors? ",
    answer:
      "Apricus Venue does have a preferred vendor list for your reference, but you are more than welcome to work with vendors of your choice as well. However, some restrictions do apply to catering, bartenders, and security. For more information regarding our vendor policy please contact our sales team directly.",
  },
  {
    question: "Will there be someone on-site the day of my event?",
    answer:
      "You will have two members of Apricus staff on site throughout the duration of your event. While we do offer our support to provide added value at no additional cost to you, our team does have a clear outline of the dos and don’ts for your event.",
  },
  {
    question: "Is security required for my event?",
    answer:
      "Security is only required for functions that will be serving alcohol throughout the duration of their event. We work with the city of Corinth’s police department and officers are only required to be on site while the bar is open.",
  },
  {
    question: "When is my final balance due? ",
    answer:
      "When booking with Apricus payments are due every two months and the balance due must be paid in full no later than 30 days prior to the event.",
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
          src="src/assets/Wedding1.jpg "
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
          <h1
            onClick={() => setIsRentalOpen(false)}
            className={isRentalOpen ? "text-black" : "text-yellow-500"}
          >
            Policies & Procedures
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
