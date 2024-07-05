import React, { useState } from "react";

const NewsletterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For demonstration purposes, just console.log the values
    console.log("Name:", name);
    console.log("Email:", email);
    // Reset form fields
    setName("");
    setEmail("");
    // Set submitted state to true
    setSubmitted(true);
  };

  return (
    <div className="pt-3 ">
      <div className="  bg-[#2f2f2af2] flex justify-center items-center min-h-screen text-yellow-500  font-dancing ">
        <div className="w-3/4 p-8 ">
          <h3 className="text-center text-4xl font-bold italic mb-6">
            Do you want to know about our next events?
          </h3>
          <p className="text-center text-gray-100 text-lg mb-6">
            NEWSLETTER SUBSCRIBE
          </p>
          <div>
            <form onSubmit={handleSubmit} className=" flex  gap-60">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className=" px-3 py-0.5 w-[170%] border border-gray-300 focus:outline-none focus:border-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-[170%] px-3 py-0.5 border border-gray-300  focus:outline-none focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="  px-32 font-raleway text-base text-black border border-yellow-40 bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded border-black border text-sm  py-1 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-500  dark:focus:ring-yellow-900 hover:bg-black hover:text-yellow-500 hover:border-yellow-500"
            >
              Submit
            </button>
          </div>

          {submitted && (
            <p className="text-center text-sm italic mt-4">
              Thanks for submitting!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
