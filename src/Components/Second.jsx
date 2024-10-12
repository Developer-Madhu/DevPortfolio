import React from 'react';
import { InstagramLogo, LinkedinLogo, GithubLogo } from 'phosphor-react';

const Second = () => {
  return (
    <div id='aboutme' className="about flex flex-col md:flex-row h-auto w-full p-6 bg-gray-50">
      {/* Text Section */}
      <div className="first-text w-full md:w-3/5 border-b md:border-b-0 md:border-r-2 border-gray-800 md:pr-8 mb-6 md:mb-0">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 px-4 md:px-8 py-4">
          As a developer, I create and develop static and dynamic websites which are interactive and attractive.
        </h3>
      </div>

      {/* About Me Section */}
      <div className="second-text w-full md:w-2/5 flex flex-col justify-between px-4 md:px-8 py-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">(About Me)</h2>
        <div className="icons flex space-x-4">
          <InstagramLogo className='bg-gray-900 text-white text-2xl p-2 rounded-full hover:bg-gray-700 transition duration-300' size={42} />
          <a target='_blank' href="https://www.linkedin.com/in/r-madhusudhan-235600296/">
          <LinkedinLogo className='bg-gray-900 text-white text-2xl p-2 rounded-full hover:bg-gray-700 transition duration-300' size={42} />
          </a>
          <a target='_blank' href="https://github.com/Developer-Madhu">
          <GithubLogo className='bg-gray-900 text-white text-2xl p-2 rounded-full hover:bg-gray-700 transition duration-300' size={42} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Second;
