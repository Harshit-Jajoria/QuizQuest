import React, { useState } from 'react';

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };  

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5694/5694744.png"
            className="h-10 mr-3 bg-white rounded-lg"
            alt="Flowbite Logo"
          />
          <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">
            QuizQuest
          </span>
        </div>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isNavbarOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isNavbarOpen ? '' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
            <div className="cursor-pointer text-2xl block py-3 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">
              Home
            </div>
            <div className="cursor-pointer text-2xl block py-3 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">
              About
            </div>
            <button className='text-2xl pt-0.5 pb-1 px-4 rounded-lg bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500'>Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
