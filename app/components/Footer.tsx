"use client"
import React, { useState, useEffect } from "react";

import { FaRegCompass } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaAppStore } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
export const Footer = () => {
  const [now, setNow] = useState<number | null>()
  
  useEffect(() => {
    setNow(new Date().getFullYear())
  }, [])
  return (
    <footer >
      <div className="p-5 sm:px-10 space-y-10 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2 text-3xl text-green-400 font-bold">
          <FaRegCompass />
          <p className="text-xl">EcoShop</p>
        </div>
        <p className="text-gray-400">
          Your one-stop destination for sustainable and eo-frindly products.
          Join us in making the world a greener place, one purchase at a time.
        </p>
        <div className="flex gap-2 text-gray-400 text-3xl">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
          <FaGithub />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold">Quick Links</h2>
        <ul className="text-gray-300 space-y-2">
          <li className="flex items-center gap-2">
            <IoIosArrowForward /> Home
          </li>
          <li className="flex items-center gap-2">
            <IoIosArrowForward /> Shop All
          </li>
          <li className="flex items-center gap-2">
            <IoIosArrowForward /> New Arrivals
          </li>
          <li className="flex items-center gap-2">
            <IoIosArrowForward /> Bestsellers
          </li>
          <li className="flex items-center gap-2">
            <IoIosArrowForward /> Special Offers
          </li>
          <li className="flex items-center gap-2">
            <IoIosArrowForward /> Gift Cards
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold">Customer Service</h2>
        <ul className="text-gray-300 space-y-2">
          <li className="flex items-center gap-2">
            <IoIosArrowForward /> Contact Us
          </li>
          <li className="flex items-center gap-2">
            <IoIosArrowForward /> FAQs
          </li>
          <li className="flex items-center gap-2">
            <IoIosArrowForward /> Shipping Policy
          </li>
          <li className="flex items-center gap-2">
            <IoIosArrowForward /> Returns & Exchanges
          </li>
          <li className="flex items-center gap-2">
            <IoIosArrowForward /> Track Your Order
          </li>
          <li className="flex items-center gap-2">
            <IoIosArrowForward /> Privacy Policy
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold">Stay Connected</h2>
        <p>
          Subscribe to our newsletter for the latest products, eco-tips, and
          exclusive deals.{" "}
        </p>
        <form action="" className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            className="focus:outline-none focus:ring-2 focus:ring-green-400 border border-gray-800 p-2 rounded-lg"
          />
          <button
            type="submit"
            className="bg-orange-500 duration-300 hover:bg-orange-600 p-2 rounded-lg"
          >
            Subscribe
          </button>
        </form>
        <div>
          <p className="text-xl font-bold mb-3">Download Our App</p>
          <span className="flex gap-5">
            <p className="hover:bg-gray-800 flex items-center gap-2 p-2 px-5 rounded-lg">
              <FaAppStore /> IOS
            </p>
            <p className="hover:bg-gray-800 flex items-center gap-2 p-2 px-5 rounded-lg">
              <FaGooglePlay /> Android
            </p>
          </span>
        </div>
      </div>
      </div>

      <div className="border-t border-gray-600 flex items-center justify-center">
        <p>&copy; {now} EcoShop. All rights reserved.</p>
      </div>
    </footer>
  );
};
