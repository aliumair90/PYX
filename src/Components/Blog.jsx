import React from "react";
import NewsletterForm from "./NewsletterForm";
import Foter from "./Foter";

const Blog = () => {
  return (
    <>
      <div className="text-8xl text-center mt-20 text-yellow-500">
        <h1> Blog</h1>
      </div>
      <div className="flex w-[70%] mt-20 mx-auto border-2 border-yellow-500">
        <div className="w-[30%]">
          <img src="Phuls.png" alt="" />
        </div>
        <div className="w-[65%] pl-5 pt-10">
          <h1>
            7 days ago 3 min{" "}
            <p className="font-bold text-l">
              It’s the Little Things - 8 Wedding Details You Don’t Want to
              Forget
            </p>{" "}
            At Apricus Venue, we've seen firsthand how these seemingly small
            touches can transform a wedding from beautiful to unforgettable.
          </h1>
        </div>
      </div>
      <div className="flex w-[70%] mt-20 mx-auto border-2 border-yellow-500">
        <div className="w-[30%]">
          <img src="Phuls.png" alt="" />
        </div>
        <div className="w-[65%] pl-5 pt-10">
          <h1>
            7 days ago 3 min{" "}
            <p className="font-bold text-l">
              It’s the Little Things - 8 Wedding Details You Don’t Want to
              Forget
            </p>{" "}
            At Apricus Venue, we've seen firsthand how these seemingly small
            touches can transform a wedding from beautiful to unforgettable.
          </h1>
        </div>
      </div>
      <div className="flex w-[70%] mt-20 mx-auto border-2 border-yellow-500">
        <div className="w-[30%]">
          <img src="Phuls.png" alt="" />
        </div>
        <div className="w-[65%] pl-5 pt-10">
          <h1>
            7 days ago 3 min{" "}
            <p className="font-bold text-l">
              It’s the Little Things - 8 Wedding Details You Don’t Want to
              Forget
            </p>{" "}
            At Apricus Venue, we've seen firsthand how these seemingly small
            touches can transform a wedding from beautiful to unforgettable.
          </h1>
        </div>
      </div>
      <NewsletterForm />
      <Foter />
    </>
  );
};

export default Blog;
