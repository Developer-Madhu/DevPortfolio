import React from "react";
import '../index.css'; // Import the custom CSS for scrolling animation
import devrahul from '../Images/devrahul.jpg';
import genai from '../Images/genai.png';
import hpagile from '../Images/hpagile.png';
import nptel from '../Images/nptel.png';
import p1 from '../Images/p1.jpg';
import p2 from '../Images/p2.jpg';
import p3 from '../Images/p3.png';
import mpy from '../Images/mpy.png';
import hackerrankpy from '../Images/hackerrankpy.png';

const certificates = [
  {
    id: 1,
    imgSrc: devrahul,
    category: "Developer Rahul",
    title: "MERN Stack Development",
    description: "Completed HTML, CSS & JS with React, Express, and MongoDB",
    link: "#",
  },
  {
    id: 2,
    imgSrc: genai,
    category: "Microsoft",
    title: "Gen AI Fundamentals",
    description: "Covered Generative AI fundamentals and more.",
    link: "#",
  },
  {
    id: 3,
    imgSrc: hpagile,
    category: "HP",
    title: "Agile Project Management",
    description: "Learned best techniques about using Agile in projects.",
    link: "#",
  },
  {
    id: 4,
    imgSrc: nptel,
    category: "NPTEL",
    title: "Python for Data Science",
    description: "Covered Basic fundamentals of Data Science with Python.",
    link: "#",
  },
  {
    id: 5,
    imgSrc: p1,
    category: "Infosys Springboard",
    title: "Python Fundamentals",
    description: "Explored some of the important topics in Python.",
    link: "#",
  },
  {
    id: 6,
    imgSrc: p2,
    category: "Infosys Springboard",
    title: "Python Fundamentals Part 1",
    description: "Got deep into exploring python fundamentals.",
    link: "#",
  },
  {
    id: 7,
    imgSrc: p3,
    category: "Infosys Springboard",
    title: "Fundamentals of Python 2",
    description: "Covered advanced topics in python fundamentals.",
    link: "#",
  },
  {
    id: 8,
    imgSrc: mpy,
    category: "Infosys Springboard",
    title: "Mastering Python",
    description: "Perfectly learned python's important topics.",
    link: "#",
  },
  {
    id: 9,
    imgSrc: hackerrankpy,
    category: "HackerRank",
    title: "Basics of Python",
    description: "The first step towards learning python basics.",
    link: "#",
  },
];

const CertificateCard = ({ imgSrc, category, title, description, link }) => {
  return (
    <div className="p-4 flex-shrink-0 w-80"> {/* Increased width for better readability */}
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="h-48 w-full object-cover object-center"
          src={imgSrc}
          alt={title}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3 text-ellipsis overflow-hidden">
            {description}
          </p>
          <div className="flex items-center flex-wrap">
            {/* Optional link can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

const CertificatesSection = () => {
  // Create a duplicated list of certificates for seamless scrolling
  const duplicatedCertificates = [...certificates, ...certificates];

  return (
    <section className="text-gray-600 body-font">
      <div className="overflow-hidden w-full">
        <div className="scrolling-wrapper whitespace-nowrap">
          <div className="flex space-x-4 animate-scroll">
            {duplicatedCertificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                imgSrc={certificate.imgSrc}
                category={certificate.category}
                title={certificate.title}
                description={certificate.description}
                link={certificate.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
