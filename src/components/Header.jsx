import React from "react";
import "../App.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between flex-wrap p-2">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-10 md:h-20 md:w-20 lg:h-30 lg:w-30 rounded-full"
              />
            </a>
          </div>
          <div className="block lg:hidden" >
            <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" className="flex items-center px-3 py-2 border rounded text-black border-black">
              <ion-icon className="text-2xl" name="menu-outline"></ion-icon>
            </button>
          </div>
          <div id="dropdownDelay" className=" z-10 w-full  flex-grow hidden lg:flex lg:items-center lg:w-auto">
            <div className="text-md lg:flex-grow gap-5" >
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:bg-primary rounded-md hover:text-secondary mr-4 p-2"
              >
                Home
              </a>
              <a
                href="/About"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:bg-primary rounded-md hover:text-secondary mr-4 p-2"
              >
                About
              </a>
              <a
                href="/Portfolio"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:bg-primary rounded-md hover:text-secondary mr-4 p-2"
              >
                Portfolio
              </a>
              <a
                href="/Blog"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:bg-primary rounded-md hover:text-secondary mr-4 p-2"
              >
                Blog
              </a>
            </div>
            <div>
              <a
                href="/Contact"
                className="inline-block text-sm px-4 py-2 border bg-primary rounded text-white border-black  hover:text-black hover:bg-transparent mt-4 lg:mt-0"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;