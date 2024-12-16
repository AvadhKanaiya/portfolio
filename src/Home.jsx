import React from "react";
import { AboutCarousel } from "./AboutCarousel";
import { Hobbies } from "./Hobbies";

const Home = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-24 lg:space-x-52 xl:space-x-64 mt-12">
        <div>
          <img
            src="Profile.jpeg"
            alt="hero"
            className="w-52 h-52 rounded-full border-4 shadow-lg"
          />
        </div>
        <div className="text-lg font-semibold text-center md:text-left">
          <p className="font-heading">Hi👋🏻, I'm Avadh Kanaiya</p>
          <p className="font-heading">Software Engineer</p>
        </div>
      </div>
      <div className="flex flex-col items-center justifu-center">
        <AboutCarousel />
        <div className="font-heading text-3xl mb-14 mt-20">
          <p>Hobbies</p>
        </div>
        <Hobbies />
      </div>
    </div>
  );
};

export default Home;
