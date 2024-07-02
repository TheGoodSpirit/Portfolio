import React from "react";
import "../App.css";

const Header = () => {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between flex-wrap p-4">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a href="/">
              <img
                src="./logo.png"
                alt="Logo"
                className="h-10 w-10 md:h-20 md:w-20 lg:h-30 lg:w-30 rounded-full"
              />
            </a>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:bg-transparent">
              <ion-icon className="text-2xl" name="menu-outline"></ion-icon>
            </button>
          </div>
          <div className="w-full block flex-grow hidden lg:flex lg:items-center lg:w-auto">
            <div className="text-md lg:flex-grow gap-5">
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-neutral-500 mr-4"
              >
                Home
              </a>
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-neutral-500 mr-4"
              >
                Activities
              </a>
              <a
                href="/About"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-neutral-500 mr-4"
              >
                About
              </a>
              <a
                href="/Portfolio"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-neutral-500 mr-4"
              >
                Portfolio
              </a>
              <a
                href="/Blog"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-neutral-500 mr-4" 
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