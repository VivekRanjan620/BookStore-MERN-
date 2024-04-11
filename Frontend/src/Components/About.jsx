import React from "react";
import VivekBook from '../assets/VivekBook.png'
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
          <h1 className="text-2xl md:text-3xl font-bold underline flex justify-center">
            About Us
            </h1>
            <p className="text-sm   ">
            As publishers it was our dream to open a bookshop that
                understood art and design books enough to dedicate an entire
                space to the genre; to create an atmosphere as beautiful, luring
                and sleek as the books it would house; and to initiate a
                movement in keeping with the exciting leaps and bounds the
                country was making in design.
                <br />
                <br />
                 Over a decade later we feel we
                have succeeded. In these trying times when books are competing
                for your attention, money and time, and when bookshops are
                succumbing to the intense pressure placed on them, CMYK
                Bookstore has managed to stay true to its values in providing
                the best art and design books sourced from around the world.
            </p>
            <label >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
              </svg>
            </label>
          </div>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={VivekBook}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="author-img"
          />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
