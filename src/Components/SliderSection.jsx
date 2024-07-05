import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#2f2f2af2] w-full h-[500px] p-5 ">
        <div className="mx-2">
          <Slider {...settings} className="gap-2">
            {Array(6)
              .fill()
              .map((_, index) => (
                <div key={index} className="h-[370px] w-[280px] my-3 px-2">
                  <div
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    style={{
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="flex items-center p-4">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                      />
                      <div className="ml-4">
                        <h2 className="text-lg font-bold text-gray-800">
                          王廊
                        </h2>
                        <p className="text-sm text-gray-600">Jun 03, 2024</p>
                      </div>
                    </div>
                    <div className="px-4 pb-4">
                      <div className="flex items-center mt-4">
                        {[...Array(5)].map((star, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 text-yellow-500`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.062 3.264a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.032a1 1 0 00-.364 1.118l1.062 3.264c.3.921-.755 1.688-1.54 1.118l-2.8-2.032a1 1 0 00-1.176 0l-2.8 2.032c-.784.57-1.838-.197-1.54-1.118l1.062-3.264a1 1 0 00-.364-1.118L2.98 8.691c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.062-3.264z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-2 text-gray-600">
                        The surrounding environment was very beautiful. They
                        have clear and functional waiting room and big kitchen
                        with necessary equipments. The main venue was great and
                        has great natural light. A wonderful location for
                        even...
                      </p>
                      <div className="flex justify-center mt-4">
                        <img
                          className="w-5 h-5"
                          src="src\assets\google-icon-logo-svgrepo-com.svg"
                          alt="Google Logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
        <div className="flex justify-center">
          <img src="/Sun.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default SliderSection;
