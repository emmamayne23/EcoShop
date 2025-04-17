import React from "react";
import Image from "next/image";
import HeroImage from "@/public/hero.png"

export const Hero = () => {
  return (
    <div className="md:flex justify-between gap-20 md:h-screen p-5 space-y-5 bg-gray-700">
      {/* this is the hero section section */}
      <div className="flex-1 space-y-10 pt-10 my-auto">
        <h2 className="text-5xl font-bold">
          {" "}
          <span className="text-green-400">Eco</span>-Friendly Shopping{" "}
          <span className="text-orange-400">Experience</span>{" "}
        </h2>
        <p className="text-gray-300 text-lg">
          Discover sustainable products that match your style and values. Shop
          our curated collection today with free shipping on orders over $50.{" "}
        </p>
        <button className="bg-green-600 duration-300 text-white px-7 py-4 rounded-full hover:bg-green-800 m-3">
          Shop Now
        </button>
        <button className="bg-gray-700 duration-300 border border-green-400 text-white px-6 py-4 m-3 rounded-full hover:bg-gray-600">
          View Categories
        </button>
      </div>
      <div className="flex-1 border-2 border-amber-300 rounded-xl my-10 md:h-[390px] md:my-auto">
        <Image src={HeroImage} alt="hero image" className="rounded-xl h-full w-full object-cover"  />
      </div>
    </div>
  );
};
