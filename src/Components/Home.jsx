import React from "react";
import SliderSection from "./SliderSection";
import SocialBar from "./SocialBar";
import NewsletterForm from "./NewsletterForm";
import Foter from "./Foter";

const Home = () => {
  return (
    <>
      <div>
        <SocialBar />
        <div className="max-w-full max-h-full bg-fixed  mx-auto">
          <img
            className="w-full h-full object-cover"
            src="./Wedding2.jpg"
            // autoPlay
            // loop
            // muted
          ></img>
        </div>
        <div className=" text-center mx-auto">
          <div className="text-center ">
            <h1 className="text-4xl md:text-5xl lg:text-[69px] text-yellow-500 mt-28 font-dancing">
              A Modern Venue <br /> in the Midst of Rustic Ones{" "}
            </h1>
          </div>
          <div className="pt-14">
            <h1 className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-gray-500 font-wixui tracking-wide">
              Centrally located in Corinth, Texas making us the perfect
              destination <br /> for surrounding cities in the Dallas-Fort Worth
              Metroplex.
            </h1>
          </div>
          <div className="pt-14">
            <h1 className=" font-raleway text-[14px] text-gray-400 tracking-wide">
              The Latin word “apricus” means “warmed by the sun” reflecting the
              state of mind we want our <br />
              clients to gain through our services – revealing their sense of
              delight and gratitude from <br /> working with us.
            </h1>
          </div>
          <div className="pt-5">
            <h1 className=" font-raleway text-[14px] text-gray-400 tracking-wide">
              From our venue staff to our list of preferred vendors, Apricus
              Venue strives to make your <br />
              dreams a reality by helping coordinate some of the highest quality
              events.
            </h1>
          </div>
          <div className="flex justify-center pt-10">
            <img src="/tali.png" alt="" />
          </div>

          <div className="pt-6">
            <button
              type="button"
              className="  mx-9 font-raleway text-base text-black border border-yellow-40 bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded border-black border text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 hover:bg-gray-500"
            >
              <id className="px-6">SCHEDULE A TOUR</id>
            </button>
          </div>
        </div>
        <div className="relative bg-custom Bg-50 h-[150vh] mt-10">
          <div className="pt-10 h-screen absolute inset-0 z-6 bg-cover bg-[url('/Phuls.png')]"></div>
          <div className="absolute z-8 bottom-[4%] top-[4%] left-[23%] w-[55%] bg-[#2f2f2a] border-solid border-2 rounded-tl-[35px] rounded-br-[35px] border-[#f8b95d] overflow-x-auto md:overflow-hidden">
            <div className="flex flex-col justify-center items-center py-4">
              <div>
                <img className="" src="/Tali2.png" alt="Tali2" />
              </div>
              <div>
                <h1 className="text-white text-2xl tracking-wide text-center">
                  HOW IT WORKS
                </h1>
              </div>
            </div>
            <div className="flex flex-wrap p-2 justify-between">
              <div className="card w-full sm:w-[48%] md:w-[32%] lg:w-[22%] p-2">
                <div className="flex flex-col justify-center items-center ">
                  <img src="/icon1.png" alt="" />
                  <small className="text-white font-semibold ">INQUIRE</small>
                </div>
                <div className="text-center px-2 tracking-wider leading-[1em]">
                  <small className="text-white text-[0.60rem]">
                    You have come across our services online and our venue has
                    peaked your interest. Let us know what kind of event you are
                    looking to host, your anticipated date and guest count as
                    well as your own personalized message. Someone from our
                    sales team will be in contact to discuss the details with
                    you between 24-48 hours.
                  </small>
                </div>
              </div>
              <div className="card w-full sm:w-[48%] md:w-[32%] lg:w-[22%] p-2">
                <div className="flex flex-col justify-center items-center py-2">
                  <img src="/icon2.png" alt="" />
                  <small className="text-white font-semibold">
                    TOURING THE VENUE
                  </small>
                </div>
                <div className="text-center px-2 tracking-wider leading-[1em]">
                  <small className="text-white  text-[0.60rem]">
                    You have had a chance to connect with someone from our sales
                    team and discuss the details of your special upcoming event
                    and it sounds like we could be a good match. Now it is time
                    to visit the venue in person. Explore our facility with one
                    of our experts to dive deeper into understanding the vision
                    you have for your special upcoming event.
                  </small>
                </div>
              </div>
              <div className="card w-full sm:w-[48%] md:w-[32%] lg:w-[22%] p-2">
                <div className="flex flex-col justify-center items-center py-2">
                  <img src="/icon3.png" alt="" />
                  <small className="text-white font-semibold ">
                    MOCK PROPOSAL
                  </small>
                </div>
                <div className="text-center px-2 tracking-wider leading-[1em]">
                  <small className="text-white text-[0.60rem]">
                    Once you have toured with us, our sales team will be in
                    contact with you to provide you with a mock proposal which
                    will give you a better understanding of the cost for the
                    services you are seeking for your event. The proposal may be
                    customized and adjusted based on the needs for your event.
                  </small>
                </div>
              </div>
              <div className="card w-full sm:w-[48%] md:w-[32%] lg:w-[22%] p-2">
                <div className="flex flex-col justify-center items-center py-2">
                  <img src="/icon4.png" alt="" />
                  <small className="text-white font-semibold ">
                    SECURING THE VENUE
                  </small>
                </div>
                <div className="text-center px-2 tracking-wider leading-[1em]">
                  <small className="text-white text-[0.60rem]">
                    You’ve concluded your tour, received your mock proposal, and
                    have decided that Apricus is the right fit for your
                    celebrations. The only thing left to do is save the date! To
                    secure the venue for your upcoming event Apricus does
                    require a signed contract on file, the booking downpayment,
                    and refundable security deposit.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[100vh]  bg-cover bg-center bg-no-repeat  bg-fixed bg-[url('/Venue.png')]"></div>
        <SliderSection />
        <div>
          <div className="flex flex-wrap gap-1 mt-3">
            <div className="w-[45%] sm:w-[50%] md:w-[33%] lg:w-[14%] relative group">
              <img
                src="/Wedding1.jpg"
                alt=""
                className="w-full h-[100px] sm:h-auto lg:h-[123px] transition duration-300 transform group-hover:scale-105"
              />
            </div>
            <div className="w-[45%] sm:w-[50%] md:w-[33%] lg:w-[14%] relative group">
              <img
                src="/Wedding2.jpg"
                alt=""
                className="w-full h-[100px] sm:h-auto lg:h-[123px] transition duration-300 transform group-hover:scale-105"
              />
            </div>
            <div className="w-[45%] sm:w-[50%] md:w-[33%] lg:w-[14%] relative group">
              <img
                src="/Wedding3.jpg"
                alt=""
                className="w-full h-[100px] sm:h-auto lg:h-[123px] transition duration-300 transform group-hover:scale-105"
              />
            </div>
            <div className="w-[45%] sm:w-[50%] md:w-[33%] lg:w-[14%] relative group">
              <img
                src="/Wedding4.jpg"
                alt=""
                className="w-full h-[100px] sm:h-auto lg:h-[123px] transition duration-300 transform group-hover:scale-105"
              />
            </div>
            <div className="w-[45%] sm:w-[50%] md:w-[33%] lg:w-[14%] relative group">
              <img
                src="/Wedding5.jpg"
                alt=""
                className="w-full h-[100px] sm:h-auto lg:h-[123px] transition duration-300 transform group-hover:scale-105"
              />
            </div>
            <div className="w-[45%] sm:w-[50%] md:w-[33%] lg:w-[14%] relative group">
              <img
                src="/Wedding6.jpg"
                alt=""
                className="w-full h-[100px] sm:h-auto lg:h-[123px] transition duration-300 transform group-hover:scale-105"
              />
            </div>
            <div className="w-[45%] sm:w-[50%] md:w-[33%] lg:w-[14%] relative group">
              <img
                src="/Wedding7.jpg"
                alt=""
                className="w-full h-[100px] sm:h-auto lg:h-[123px] transition duration-300 transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
        <NewsletterForm />
        <Foter />
      </div>
    </>
  );
};

export default Home;
