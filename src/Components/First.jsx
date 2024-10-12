import React from "react";
import mypic from '../Images/mypic.png'; // Assuming the image is available

const First = () => {
  return (
    <main className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 text-gray-800">
          Madhusudhan
        </h2>
        <h5 className="text-2xl md:text-5xl font-semibold tracking-tight mb-8 text-gray-600">
          Fullstack Web Developer
        </h5>

        <div className="w-full h-80 md:h-96 lg:h-1/2 bg-red-500 rounded-lg overflow-hidden mb-8 relative shadow-lg transition-transform duration-500 hover:scale-105">
          <img 
            src={mypic} 
            alt="Profile" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-4">
          Passionate about building responsive and efficient web applications. 
          Skilled in both front-end and back-end technologies, dedicated to creating 
          user-friendly experiences and robust functionalities.
        </p>

        <a href="#projects" className="mt-4">
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            View My Work
          </button>
        </a>
      </div>
    </main>
  );
};

export default First;
