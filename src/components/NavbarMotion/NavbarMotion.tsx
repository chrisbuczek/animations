"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const NavbarMotion = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [width, setWidth] = useState(50);
  const [hasScrolled100px, setHasScrolled100px] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setHasScrolled100px(scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className="bg-black border-b h-12 border-gray-200 sticky top-0 z-50"
      aria-label="Main navigation"
    >
      <div className="container h-12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-12 w-full bg-black absolute"></div>
        <div
          className={`flex-shrink-0 bg-red-500 absolute left-0 h-12 w-[${
            hasScrolled100px ? 100 : 50
          }%] transition-all`}
        >
          <div className="w-10 h-12 absolute top-0 left-full bg-[linear-gradient(105deg,theme(colors.red.500)_50%,theme(colors.black)_50%)]"></div>
        </div>
        <div className="h-12 w-full  absolute z-20 flex flex-row items-center gap-20">
          <Link
            href="#"
            className="text-xl font-bold text-white z-20"
            aria-label="Go to homepage"
            onClick={() => setWidth(100)}
          >
            Logo
          </Link>
          <div
            className={`text-white font-bold text-2xl uppercase transition-all ${
              hasScrolled100px ? "scale-0" : "scale-100"
            }`}
          >
            Event Name Event Name Event Name
          </div>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-8" role="menubar">
            <li role="none">
              <Link href="#" className="text-white" aria-label="Home page">
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button
            className="text-white p-2"
            onClick={() => {
              setShowMobileMenu((prev) => !prev);
            }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${!showMobileMenu && "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          <Link
            href="#"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            aria-label="Home page"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavbarStandard = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [width, setWidth] = useState(50);
  const [hasScrolled100px, setHasScrolled100px] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setHasScrolled100px(scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className="bg-black border-b h-12 border-gray-200 sticky top-0 z-50"
      aria-label="Main navigation"
    >
      <div className="container h-12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-12 w-full bg-black absolute"></div>
        <div
          className={`flex-shrink-0 bg-red-500 absolute left-0 h-12 w-[${
            hasScrolled100px ? 100 : 50
          }%] transition-all`}
        >
          <div className="w-10 h-12 absolute top-0 left-full bg-[linear-gradient(105deg,theme(colors.red.500)_50%,theme(colors.black)_50%)]"></div>
        </div>
        <div className="h-12 w-full  absolute z-20 flex flex-row items-center gap-20">
          <Link
            href="#"
            className="text-xl font-bold text-white z-20"
            aria-label="Go to homepage"
            onClick={() => setWidth(100)}
          >
            Logo
          </Link>
          <div
            className={`text-white font-bold text-2xl uppercase transition-all ${
              hasScrolled100px ? "scale-0" : "scale-100"
            }`}
          >
            Event Name Event Name Event Name
          </div>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-8" role="menubar">
            <li role="none">
              <Link href="#" className="text-white" aria-label="Home page">
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button
            className="text-white p-2"
            onClick={() => {
              setShowMobileMenu((prev) => !prev);
            }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${!showMobileMenu && "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          <Link
            href="#"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            aria-label="Home page"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMotion;
