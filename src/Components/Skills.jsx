import React from "react";

const Skills = () => {
    const sections = [
        { title: "FRONTEND", skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS"] },
        { title: "BACKEND", skills: ["Node.js", "Express Js", "MongoDB", "Python"] },
        { title: "MERN STACK", skills: ["React JS", "Vite", "Next JS", "MongoDB"] },
    ];

    return (
        <section id="myskills" className="text-gray-600 body-font bg-gray-50">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-4xl text-3xl font-semibold title-font text-gray-900 mb-4">
                        My Skills with Passion
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine,
                        ramps microdosing banh mi pug.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {sections.map((section, index) => (
                        <div key={index} className="p-4 lg:w-1/3 sm:w-1/2 w-full">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-center">
                                    {section.title}
                                </h2>
                                <nav className="flex flex-col items-center space-y-2.5">
                                    {section.skills.map((skill, i) => (
                                        <div key={i} className="flex items-center">
                                            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="3"
                                                    className="w-3 h-3"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>
                                            <span className="text-gray-700">{skill}</span>
                                        </div>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
