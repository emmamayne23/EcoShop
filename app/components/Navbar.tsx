"use client";

import { FaRegCompass } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
// import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Cart } from "./Cart";
import { Favorites } from "./Favorites";

import Link from "next/link";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { toggleCart, cart } = useCart();

  return (
    <nav className="p-3 pb-0 md:pb-3 px-5 border border-amber-300">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-3xl text-green-400 font-bold"
        >
          <FaRegCompass />
          <p className="text-xl">EcoShop</p>
        </Link>

        <ul className="hidden md:flex gap-10">
          <Link href={"/"} className="hover:text-green-400">
            Home
          </Link>
          <Link href={"/shop"} className="hover:text-green-400">
            Shop
          </Link>
          <Link href={"/"} className="hover:text-green-400">
            Categories
          </Link>
          <Link href={"/"} className="hover:text-green-400">
            Deals
          </Link>
          <Link href={"/"} className="hover:text-green-400">
            About
          </Link>
        </ul>

        <div className="flex gap-5 text-xl items-center">
          <SignedIn>
            <UserButton className="text-base cursor-pointer" />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              className="text-base cursor-pointer hover:text-green-600"
            />
          </SignedOut>
          {/* <FiUser className="hover:cursor-pointer hover:text-green-400" /> */}

          <Favorites />
          <span className="relative cursor-pointer" onClick={toggleCart}>
            <FiShoppingCart className="hover:text-green-400" />
            {cart.length > 0 && (
              <p className="text-xs bg-orange-500 text-white rounded-full p-0.5 px-2 flex justify-center items-center absolute -top-2 -right-3">
                {cart.length}
              </p>
            )}
          </span>
          <button onClick={() => setIsOpen((prevState) => !prevState)}>
            <FaBars className="md:hidden hover:cursor-pointer hover:text-green-400" />
          </button>
        </div>
      </div>

      {/* the cart component */}
      <Cart />

      <div className="flex items-center rounded-4xl my-5 h-11 relative bg-gray-800 md:hidden">
        <CiSearch className="text-2xl text-gray-400 absolute left-3 top-2" />
        <input
          type="search"
          placeholder="Search products..."
          className="px-5 pl-11 w-full rounded-4xl h-full text-lg focus:ring-2 focus-within:outline-none focus:ring-green-400"
        />
      </div>
      {isOpen && (
        <ul className="flex flex-col gap-5 bg-gray-800 fixed top-0 z-30 right-0 w-3/4 px-10 py-10 pt-24 h-full">
          <button
            className="absolute right-10 top-10 hover:cursor-pointer"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <RiCloseLargeLine />
          </button>
          <Link
            href={"/"}
            className="hover:text-green-400 rounded-xl hover:pl-4 duration-300 hover:bg-gray-900 p-2"
          >
            Home
          </Link>
          <Link
            href={"/shop"}
            className="hover:text-green-400 rounded-xl hover:pl-4 duration-300 hover:bg-gray-900 p-2"
          >
            Shop
          </Link>
          <Link
            href={"/"}
            className="hover:text-green-400 rounded-xl hover:pl-4 duration-300 hover:bg-gray-900 p-2"
          >
            Categories
          </Link>
          <Link
            href={"/"}
            className="hover:text-green-400 rounded-xl hover:pl-4 duration-300 hover:bg-gray-900 p-2"
          >
            Deals
          </Link>
          <Link
            href={"/"}
            className="hover:text-green-400 rounded-xl hover:pl-4 duration-300 hover:bg-gray-900 p-2"
          >
            About
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
