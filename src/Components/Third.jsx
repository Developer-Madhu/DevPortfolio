import React from 'react';

const Third = () => {
  return (
    <div className="work-details flex flex-col md:flex-row justify-between p-6 bg-gray-50">
      {/* First Section */}
      <div className="firstdet md:w-1/2 w-full p-8 text-4xl md:text-5xl font-medium border-b-2 md:border-b-0 md:border-r-2 border-gray-800 mb-6 md:mb-0">
        What I Do?
      </div>

      {/* Second Section */}
      <div className="seconddet md:w-1/2 w-full flex flex-col">
        {/* First Block */}
        <div className="one w-full border-b-2 border-gray-800 p-5 mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold font-sans">Digital Developer</h2>
          <p className="text-lg md:text-base font-normal mt-2">
            I am a digital Web Developer creating smooth and best web pages which can give users a seamless experience.
          </p>
        </div>

        {/* Second Block */}
        <div className="two w-full p-5">
          <h2 className="text-2xl md:text-3xl font-semibold font-sans">Motion Design</h2>
          <p className="text-lg md:text-base font-normal mt-2">
            Smooth and best graphic transitions with animations can make your website attractive and engaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
