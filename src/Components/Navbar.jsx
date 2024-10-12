// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="text-gray-600 body-font w-full bg-white shadow-md">
//       <div className="container w-full mx-auto flex flex-wrap p-5 items-center justify-evenly">
//         {/* Logo Section */}
//         <div className="flex items-center flex-grow">
//           <Link to="/" className="flex title-font font-medium text-gray-900">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="ml-3 text-xl">Hey there!</span>
//           </Link>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           onClick={toggleMenu}
//           className="inline-flex p-3 md:hidden ml-auto rounded hover:bg-indigo-500 focus:outline-none"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             {isOpen ? (
//               <path d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path d="M4 6h16M4 12h16m-7 6h7" />
//             )}
//           </svg>
//         </button>

//         {/* Navigation Links */}
//         <nav
//           className={`md:ml-auto flex flex-wrap items-center text-base justify-center w-full md:w-auto ${
//             isOpen ? 'block' : 'hidden'
//           } md:block`}
//         >
//           <Link className="mx-4 hover:text-gray-900" to="/articles">
//             Skills
//           </Link>
//           <Link className="mx-4 hover:text-gray-900" to="/allalumni">
//             Projects
//           </Link>
//           <Link className="mx-4 hover:text-gray-900" to="/aboutus">
//             About Me
//           </Link>
//           <Link className="mx-4 hover:text-gray-900" to="/contactus">
//             Contact Me
//           </Link>
//         </nav>

//         {/* Desktop Sign Up Button */}
//         <Link to="/loginsections" className="hidden md:inline-block ml-4">
//           <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//             Sign Up
//           </button>
//         </Link>

//         {/* Sign Up Button in the Hamburger Menu */}
//         <div className="md:hidden mt-4">
//           <Link to="/loginsections">
//             <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//               Sign Up
//             </button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font w-full bg-white shadow-lg">
      <div className="w-full flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo Section */}

        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
            <path d="M12 6v12M6 12h12"></path>
            <path d="M7 9h2v6H7z"></path>
            <path d="M15 9h2v6h-2z"></path>
            <path d="M4 12h1M19 12h1"></path>
          </svg>

          <span className="ml-3 text-xl">Dev Madhu</span>
        </a>

        {/* Navigation Links */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center w-full md:w-auto">
          <a className="mr-5 hover:text-gray-900" href='#myskills'>Skills</a>
          <a className="mr-5 hover:text-gray-900"><a href='#projects'>Projects</a></a>
          <a className="mr-5 hover:text-gray-900" href='#aboutme' >About Me</a>
          <a className="mr-5 hover:text-gray-900" href='#contactme'>Contact Me</a>
        </nav>

        {/* Button */}
        <a href="#contactme">
          <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Hire
          </button></a>
      </div>
    </header>
  );
};

export default Navbar;
