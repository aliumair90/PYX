import React from "react";
import Nav from "./Nav";
import NewsletterForm from "./NewsletterForm";
import Foter from "./Foter";

const Weddings = () => {
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
      <div className="pt-16 flex justify-center">
        <div className="text-center">
          <h1 className="text-5xl text-yellow-500 font-dancing ">Weddings</h1>
          <div className="text-gray-500 text-sm w-[]">
            {" "}
            <p className="pt-16">
              Hosting your wedding at Apricus Venue allows you to create an
              elevated experience that is a <br /> representation of you!
            </p>
            <p className="pt-6">
              Our open concept was designed to encourage couples to have the
              wedding of their dreams. With <br /> plenty of space for a stage,
              dance floor, and other amenities there are no limitations to what
              your <br />
              wedding can entai
            </p>
            <p className="pt-6">
              You will be able to invite up to 300 of your closest friends and
              family members to be a part of your <br /> celebrations. Host your
              ceremony in our main ballroom or our outdoor setting underneath
              our <br />
              beautiful covered terrace.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-gray-500">
        <div className="  w-1/2 text-center  mt-16 border-2 border-yellow-500">
          <div className=" pt-14">
            <p className="pt-10">
              Venue rental includes set-up time, the duration of your event, and{" "}
              <br /> one hour reserved towards clean-up and breakdown. <br />{" "}
              <p className="text-yellow-700">-</p> Set-up of tables and
              chameleon chairs <p className="text-yellow-700">-</p> Two Private
              Suites <p className="text-yellow-700">-</p> Small Lounge Area{" "}
            </p>

            <div className="flex justify-center mt-16 rotate-180 ">
              <img src="/Sun.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="text-center text-sm text-gray-500">
        <p>
          Dedicated to superior service, you can be rest assured that your day
          will be memorable for you and <br /> your guests. To exceed your
          expectations and ensure that your event runs smoothly you will have{" "}
          <br />
          team members on site to provide their support and assistance
          throughout your wedding.
          <br />
          <br />
          We also pride ourselves on our flexibility to help envision, create,
          and execute all the details of <br /> your wedding. We have composed a
          list of hand-selected vendors within the metroplex for you to <br />{" "}
          choose from, but also understand that you may already have another
          vendor in mind that you would <br /> like to work with! Our vendors
          can provide you with catering services, audio and visual packages,{" "}
          <br /> and everything else in between. All our preferred vendors are
          verified and committed to excellence <br /> which will enhance the
          guest experience at your special event.
        </p>
      </div>
      <div className="pt-24 flex justify-center">
        <button
          type="button"
          className=" px-28 text-base text-white border rounded-md border-yellow-40 bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium  border-gray-300 border-2 text-sm px-12 py-1.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 hover:bg-gray-500"
        >
          SCHEDULE A TOUR
        </button>
      </div>

      <h1 className="text-yellow-500 text-3xl text-center pt-24">
        Real Weddings at Apricus
      </h1>
      <div className="flex pt-28 w-[90%]">
        <div className="border-r-2 bg-gray-100 border-yellow-500 w-[50%]  p-8 ">
          <h1 className="font-bold">Ann & Kevin | December 17th, 2022</h1>
          <p className="text-yellow-500">Photographer: Hurbert Huy</p>
          <br />
          <p
            className="text-sm text-gray-500"
            style={{
              textAlign: "justify",
              margin: "auto 0",
              width: "100%",
            }}
          >
            Ann and Kevin wed in a charming outdoor ceremony at Apricus Venue on
            a beautiful winter day. Despite the cold, they had each other to
            have and to hold. We are happy to feature their love for one another
            and share some of the special moments from their big day. They had
            an elegant four-tiered wedding cake, a giant dancing Pikachu, and a
            private firework show to end the night. We are wishing them a
            lifetime full of happiness and are delighted that we could be a part
            of their wedding.
          </p>
        </div>

        <div className="flex flex-col ">
          <div className="flex w-[100%]">
            <div className="flex-1">
              <img src="/Wedding1.jpg" alt="" width={200} height={200} />
            </div>
            <div className="flex-1">
              <img src="/Wedding2.jpg" alt="" width={200} height={200} />
            </div>
            <div className="flex-1 h-[150px]">
              <img
                src="/Wedding3.jpg"
                alt=""
                width={200}
                height={150}
                style={{ maxHeight: "132px" }}
              />
            </div>
          </div>
          <div className="flex w-[100%] gap-x-2">
            <div>
              <img src="/Wedding4.jpg" alt="" width={200} height={200} />
            </div>
            <div>
              <img src="/Wedding5.jpg" alt="" width={200} height={200} />
            </div>
            <div>
              <img src="/Wedding6.jpg" alt="" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex pt-16 w-[90%] float-end">
        <div className="flex flex-col ">
          <div className="flex w-[100%] gap-x-2">
            <div className="flex-1">
              <img src="/Wedding1.jpg" alt="" width={200} height={200} />
            </div>
            <div className="flex-1">
              <img src="/Wedding2.jpg" alt="" width={200} height={200} />
            </div>
            <div className="flex-1 h-[150px]">
              <img
                src="/Wedding3.jpg"
                alt=""
                width={200}
                height={150}
                style={{ maxHeight: "132px" }}
              />
            </div>
          </div>
          <div className="flex w-[100%] gap-x-2">
            <div>
              <img src="/Wedding4.jpg" alt="" width={200} height={200} />
            </div>
            <div>
              <img src="/Wedding5.jpg" alt="" width={200} height={200} />
            </div>
            <div>
              <img src="/Wedding6.jpg" alt="" width={200} height={200} />
            </div>
          </div>
        </div>
        <div className="border-l-2 bg-gray-100 border-yellow-500 w-[50%] text-start p-10 ">
          <h1 className="font-bold">Ann & Kevin | December 17th, 2022</h1>
          <p className="text-yellow-500">Photographer: Hurbert Huy</p>
          <br />
          <p className="text-sm text-gray-500  text-start">
            Ann and Kevin wed in a charming outdoor ceremony at Apricus Venue on
            a beautiful winter day. Despite the cold, they had each other to
            have and to hold. We are happy to feature their love for one another
            and share some of the special moments from their big day. They had
            an elegant four-tiered wedding cake, a giant dancing Pikachu, and a
            private firework show to end the night. We are wishing them a
            lifetime full of happiness and are delighted that we could be a part
            of their wedding.
          </p>
        </div>
      </div>
      <div className="flex pt-28 w-[90%]">
        <div className="border-r-2 bg-gray-100 border-yellow-500 w-[50%]  p-8 ">
          <h1 className="font-bold">Ann & Kevin | December 17th, 2022</h1>
          <p className="text-yellow-500">Photographer: Hurbert Huy</p>
          <br />
          <p
            className="text-sm text-gray-500"
            style={{
              textAlign: "justify",
              margin: "auto 0",
              width: "100%",
            }}
          >
            Ann and Kevin wed in a charming outdoor ceremony at Apricus Venue on
            a beautiful winter day. Despite the cold, they had each other to
            have and to hold. We are happy to feature their love for one another
            and share some of the special moments from their big day. They had
            an elegant four-tiered wedding cake, a giant dancing Pikachu, and a
            private firework show to end the night. We are wishing them a
            lifetime full of happiness and are delighted that we could be a part
            of their wedding.
          </p>
        </div>

        <div className="flex flex-col ">
          <div className="flex w-[100%]">
            <div className="flex-1">
              <img src="/Wedding1.jpg" alt="" width={200} height={200} />
            </div>
            <div className="flex-1">
              <img src="/Wedding2.jpg" alt="" width={200} height={200} />
            </div>
            <div className="flex-1 h-[150px]">
              <img
                src="/Wedding3.jpg"
                alt=""
                width={200}
                height={150}
                style={{ maxHeight: "132px" }}
              />
            </div>
          </div>
          <div className="flex w-[100%] gap-x-2">
            <div>
              <img src="/Wedding4.jpg" alt="" width={200} height={200} />
            </div>
            <div>
              <img src="/Wedding5.jpg" alt="" width={200} height={200} />
            </div>
            <div>
              <img src="/Wedding6.jpg" alt="" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16 rotate-180 ">
        <img src="/Sun.png" alt="" />
      </div>
      <br />
      <br />
      <div>
        <p className="text-center text-yellow-500 underline">
          Contact us today to start building your customizable package!
        </p>
      </div>
      <br />
      <br />
      <div className="flex mt-6 mb-8  justify-center">
        <div className="pt-8 px-28 border-r-2 border-yellow-500">
          <img src="/Market1.png" alt="" />
        </div>
        <div className="p-4 px-28 border-r-2 border-yellow-500">
          <img src="/Market2.png" alt="" />
        </div>
        <div className="px-28">
          <img src="/Market3.png" alt="" />
        </div>
      </div>
      <NewsletterForm />
      <Foter />
    </>
  );
};

export default Weddings;
