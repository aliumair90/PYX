import React from "react";
import Nav from "./Nav";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import NewsletterForm from "./NewsletterForm";
import Foter from "./Foter";

const AboutUs = () => {
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  const slideImages = [
    {
      url1: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      url2: "https://static.wixstatic.com/media/8fd568_02f79a83aaf84bae9e84a55c4fdad5f2~mv2.jpg/v1/fill/w_180,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ILEA%20Logo%20Gray.jpg",
      url3: "https://static.wixstatic.com/media/8fd568_02f79a83aaf84bae9e84a55c4fdad5f2~mv2.jpg/v1/fill/w_180,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ILEA%20Logo%20Gray.jpg",
    },
    {
      url1: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      url2: "https://static.wixstatic.com/media/8fd568_02f79a83aaf84bae9e84a55c4fdad5f2~mv2.jpg/v1/fill/w_180,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ILEA%20Logo%20Gray.jpg",
      url3: "https://static.wixstatic.com/media/8fd568_02f79a83aaf84bae9e84a55c4fdad5f2~mv2.jpg/v1/fill/w_180,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ILEA%20Logo%20Gray.jpg",
    },
    {
      url1: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      url2: "https://static.wixstatic.com/media/8fd568_02f79a83aaf84bae9e84a55c4fdad5f2~mv2.jpg/v1/fill/w_180,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ILEA%20Logo%20Gray.jpg",
      url3: "https://static.wixstatic.com/media/8fd568_02f79a83aaf84bae9e84a55c4fdad5f2~mv2.jpg/v1/fill/w_180,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ILEA%20Logo%20Gray.jpg",
    },
  ];
  return (
    <>
      <Nav />
      <div className=" h-[100vh]  bg-cover bg-center bg-no-repeat  bg-fixed bg-[url('/WeddingVenue.jpg')]"></div>
      <div className=" text-center flex flex-col justify-center">
        <h1 className="text-gray font-semibold pt-6">About Us</h1>
        <div className="text-center ">
          <h1 className="  text-5xl text-yellow-500 mt-16 font-dancing">
            A Peek Into Modern Elegance
          </h1>
        </div>
        <div className="pt-14">
          <h1 className=" text-[15px] text-gray-500 font-raleway tracking-wide">
            Apricus Venue was established to bring people together and provide
            them with a space to <br />
            celebrate their loved ones. From intimate gatherings to large scale
            events, our contemporary <br /> ballroom is the perfect blank canvas
            to bring your vision to life
          </h1>
        </div>
        <div className="pt-5">
          <h1 className=" font-raleway text-[15px] text-gray-500 tracking-wide">
            We take pride in our modern and flexible design that highlights our
            simplistic approach. With full- <br />
            length windows, black trim, and hardwood floors, your guests will be
            blown away by our attention <br /> to detail. We also have an
            outdoor covered terrace accompanied by water-views that is sure to{" "}
            <br /> add a special touch to your big day!
          </h1>
        </div>
        <div className="pt-5">
          <h1 className=" font-raleway text-[15px] text-gray-500 tracking-wide">
            Once you decide Apricus is the wedding venue of your dreams, we
            would love to be an extension <br /> of your wedding dream team!
          </h1>
        </div>
        <div className="flex justify-center mt-16 rotate-180">
          <img src="/Sun.png" alt="" />
        </div>
        <div>
          <h1 className="text-yellow-500 mt-14 font-dancing text-3xl">
            MEET THE TEAM
          </h1>
        </div>
      </div>
      <div className="flex justify-center gap-9">
        <div className=" mt-20 relative w-72 h-[490px] flex justify-center items-center h-screen bg-gray-100">
          <img
            src="/ManOne.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className=" absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 hover:w-4/5 hover:ml-8">
            <h2 className="text-gray-500 text-xl font-bold ">Pablo Figgo</h2>
            <h3 className="text-yellow-400">Chief Inspiration Officer</h3>
            <div className="flex space-x-2 mt-4">
              <a href="https://www.facebook.com" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="text-gray-500 text-center mt-4 px-4 text-sm">
              Pablo is our co-founder and <br /> Chief Inspiration Officer. He{" "}
              <br /> heads the venues operation <br /> and is responsible for{" "}
              <br /> developing and managing <br />
              stakeholder relationships.He <br />
              also oversees new market <br /> development and uncovers <br />
              ways to inspire clients and <br /> partners along the way. <br />
              Pablo’s creative mind <br /> has shone through multiple <br />
              curated event experiences in <br />
              DFW. Under his leadership, <br /> Apricus has obtained multiple{" "}
              <br />
              industry recognitions and <br /> popularity among clients <br />{" "}
              from different cultural <br /> backgrounds.
            </p>
          </div>
        </div>
        <div className=" mt-20 relative w-72 h-[490px] flex justify-center items-center h-screen bg-gray-100">
          <img
            src="/ManOne.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className=" absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 hover:w-4/5 hover:ml-8">
            <h2 className="text-gray-500 text-xl font-bold ">Pablo Figgo</h2>
            <h3 className="text-yellow-400">Chief Inspiration Officer</h3>
            <div className="flex space-x-2 mt-4">
              <a href="https://www.facebook.com" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="text-gray-500 text-center mt-4 px-4 text-sm">
              Pablo is our co-founder and <br /> Chief Inspiration Officer. He{" "}
              <br /> heads the venues operation <br /> and is responsible for{" "}
              <br /> developing and managing <br />
              stakeholder relationships.He <br />
              also oversees new market <br /> development and uncovers <br />
              ways to inspire clients and <br /> partners along the way. <br />
              Pablo’s creative mind <br /> has shone through multiple <br />
              curated event experiences in <br />
              DFW. Under his leadership, <br /> Apricus has obtained multiple{" "}
              <br />
              industry recognitions and <br /> popularity among clients <br />{" "}
              from different cultural <br /> backgrounds.
            </p>
          </div>
        </div>
        <div className=" mt-20 relative w-72 h-[490px] flex justify-center items-center h-screen bg-gray-100">
          <img
            src="/ManOne.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className=" absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 hover:w-4/5 hover:ml-8">
            <h2 className="text-gray-500 text-xl font-bold ">Pablo Figgo</h2>
            <h3 className="text-yellow-400">Chief Inspiration Officer</h3>
            <div className="flex space-x-2 mt-4">
              <a href="https://www.facebook.com" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="text-gray-500 text-center mt-4 px-4 text-sm">
              Pablo is our co-founder and <br /> Chief Inspiration Officer. He{" "}
              <br /> heads the venues operation <br /> and is responsible for{" "}
              <br /> developing and managing <br />
              stakeholder relationships.He <br />
              also oversees new market <br /> development and uncovers <br />
              ways to inspire clients and <br /> partners along the way. <br />
              Pablo’s creative mind <br /> has shone through multiple <br />
              curated event experiences in <br />
              DFW. Under his leadership, <br /> Apricus has obtained multiple{" "}
              <br />
              industry recognitions and <br /> popularity among clients <br />{" "}
              from different cultural <br /> backgrounds.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-base font-raleway text-gray-500 mt-10  ">
        <h1>
          Founded and operated by seasoned event experts with ever-deepening
          cultural competency <br /> that embraces diversity.{" "}
        </h1>
      </div>
      <div className="flex justify-center mt-12 rotate-180">
        <img src="/Sun.png" alt="" />
      </div>
      <div className="text-center pt-24 font-dancing text-yellow-500 text-5xl">
        <h1>Community Involvement</h1>
      </div>

      <div className="slide-container">
        <Slide duration={1000}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div>
                <div
                  style={{
                    ...divStyle,
                    // backgroundImage: `url(${slideImage.url})`,
                  }}
                >
                  <div className="flex flex-row gap-20">
                    <img src={slideImage.url1} width={300} height={300} />
                    <img src={slideImage.url2} width={300} height={300} />
                    <img src={slideImage.url3} width={300} height={300} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="pt-24 text-center">
        <button
          type="button"
          className=" px-28 text-base text-white border rounded-md border-yellow-40 bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium  border-gray-300 border-2 text-sm px-12 py-1.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 hover:bg-gray-500"
        >
          Contact Us
        </button>
      </div>
      <NewsletterForm />
      <Foter />
    </>
  );
};

export default AboutUs;