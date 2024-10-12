import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Guntur Blogs',
      subtitle: 'BLOG',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600',
      link:'https://github.com/Developer-Madhu/GunturBlogs'
    },
    {
      title: 'Organic Online Store',
      subtitle: 'Ecommerce',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=600',
      link:'https://github.com/Developer-Madhu/organiconline'
    },
    {
      title: 'Doctor Slate',
      subtitle: 'Health Care',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
      link:'google.com'
    },
    {
      title: 'Online Tech Store',
      subtitle: 'TechStore',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      link:'https://github.com/Developer-Madhu/newone'
    },
    {
      title: 'Portfolio',
      subtitle: 'Portfolio',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/653c5395a20cd20e8f4fb7b5_Freelance%20Software%20Developer%20Everything%20You%20Need%20To%20Know.webp',
      link:'https://github.com/Developer-Madhu/developer-madhu-portfolio'

    },
    {
      title: 'Portfolio with React',
      subtitle: 'Portfolio',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/64d6bd51ab17a00828b644bf_header.webp',
      link:'/'
    },
  ];

  return (
    <section id='projects' className="text-gray-600 body-font bg-gray-50 py-24">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-gray-900">
            View My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some awesome and best web projects developed by me
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{project.title}</h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <br />
                  <a href={project.link} target='_blank' className='overflow-hidden'>Git Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
