"use client";

import { Button, Modal, Badge } from "flowbite-react";
import { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import { FaAngleRight, FaAngleLeft, FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Projects.css";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 dark:border-blue-900 rounded-full animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-600 dark:border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

// Project data structure for better organization
const projectData = [
  {
    id: "weather",
    title: "Weather App",
    description: "Stay informed and empowered with real-time weather updates, forecasts, and insightful meteorological data.",
    image: "/weather.png",
    slideImages: ["/weather1.png", "/weather2.png", "/weather3.png", "/weather4.png"],
    technologies: {
      languages: "HTML, CSS, PHP, JAVASCRIPT",
      frameworks: "Tailwind CSS",
      tools: "API"
    },
    links: {
      github: "https://github.com/KboyVillahermosa/weather-project.git",
      demo: null
    },
    featured: true
  },
  {
    id: "searchjob",
    title: "SearchJob",
    description: "Our platform aggregates job listings from leading sources, including LinkedIn, Indeed, Glassdoor, and more, allowing you to search, filter, and explore opportunities all in one place.",
    image: "/searchjob.png",
    slideImages: [
      "/searchjob.png", "/searchjob2.png", "/searchjob3.png", "/searchjob4.png",
      "/searchjob5.png", "/searchjob6.png", "/searchjob7.png", "/searchjob8.png",
      "/searchjob9.png", "/searchjob10.png", "/searchjob11.png", "/searchjob12.png",
      "/searchjob13.png", "/searchjob14.png"
    ],
    technologies: {
      languages: "Reactjs Typescript, Firebase",
      frameworks: "Tailwind CSS",
      tools: ""
    },
    links: {
      github: "https://github.com/KboyVillahermosa/searchjob.git",
      demo: null
    },
    featured: true
  },
  {
    id: "techtool",
    title: "TechTool",
    description: "Your go-to resource for improving your computer science and IT abilities.",
    image: "/tech2.png",
    slideImages: [
      "/tech1.png", "/tech2.png", "/tech3.png", "/tech4.png",
      "/tech5.png", "/tech6.png", "/tech7.png"
    ],
    technologies: {
      languages: "HTML, CSS, PHP, JAVASCRIPT, MYSQL",
      frameworks: "Tailwind CSS",
      tools: "MySQL, Apache, Phpmyadmin, Version Control"
    },
    links: {
      github: "https://github.com/KboyVillahermosa/TechTool.git",
      demo: null
    },
    featured: false
  },
  {
    id: "frontend",
    title: "FrontEnd Practice",
    description: "Take your frontend skills to the next level by recreating real websites from real companies.",
    image: "/front.png",
    slideImages: [
      "/frontend2.png", "/frontend3.png", "/frontend4.png", "/frontend5.png",
      "/frontend6.png", "/frontend7.png", "/frontend8.png", "/frontend9.png",
      "/frontend10.png", "/frontend11.png", "/frontend12.png", "/frontend13.png"
    ],
    technologies: {
      languages: "React Vite",
      frameworks: "Tailwind CSS",
      tools: ""
    },
    links: {
      github: "https://github.com/KboyVillahermosa/TechTool.git",
      demo: null
    },
    featured: false
  },
  {
    id: "techbro",
    title: "Frontend Mentor",
    description: "The project showcases my ability to convert designs into fully functional, responsive web interfaces while leveraging TypeScript for type safety and improved code quality.",
    image: "/mentor1.png",
    slideImages: [
      "/mentor1.png", "/mentor2.png", "/mentor3.png", 
      "/mentor4.png", "/mentor5.png", "/mentor6.png"
    ],
    technologies: {
      languages: "React Vite Typescript",
      frameworks: "Tailwind CSS",
      tools: ""
    },
    links: {
      github: "https://github.com/KboyVillahermosa/frontend-mentor.git",
      demo: "https://frontend-mentor-ten-psi.vercel.app"
    },
    featured: true
  },
  {
    id: "eduaksyon",
    title: "PoorEduAksyon",
    description: "At PobrEduKasyon, we believe in the power of education to transform lives.",
    image: "/edu2.png",
    slideImages: [
      "/edu1.png", "/edu2.png", "/edu3.png", "/edu4.png",
      "/edu5.png", "/edu6.png", "/edu7.png", "/edu8.png",
      "/edu9.png", "/edu10.png", "/edu11.png", "/edu12.png"
    ],
    technologies: {
      languages: "PHP, Javascript",
      frameworks: "Tailwind CSS",
      tools: ""
    },
    links: {
      github: "https://github.com/KboyVillahermosa/TechTool.git",
      demo: null
    },
    featured: false
  }
];

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const openModal = (projectId) => {
    setActiveModal(projectId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const filteredProjects = filter === "all" 
    ? projectData 
    : filter === "featured" 
      ? projectData.filter(project => project.featured) 
      : projectData;

  return (
    <>
      {loading && <Loader />}
      <section id="project" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="flex items-center">
                <div className="h-0.5 w-6 bg-blue-600 mr-3"></div>
                <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">My Portfolio</span>
                <div className="h-0.5 w-6 bg-blue-600 ml-3"></div>
              </div>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl mb-6">
              Featured <span className="text-blue-600 dark:text-blue-500">Projects</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10">
              Explore my latest work and see how I transform ideas into exceptional digital experiences
            </p>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <button
                onClick={() => setFilter("all")}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors 
                  ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"}`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter("featured")}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors 
                  ${filter === "featured" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"}`}
              >
                Featured
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <button
                      onClick={() => openModal(project.id)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors duration-300"
                    >
                      View Details
                    </button>
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge color="info" className="px-3 py-1.5">Featured</Badge>
                    </div>
                  )}
                </div>
                
                <div className="flex-grow p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.frameworks && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {project.technologies.frameworks.split(',')[0].trim()}
                      </span>
                    )}
                    {project.technologies.languages.split(',').slice(0, 2).map((tech, index) => (
                      <span key={index} className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        {tech.trim()}
                      </span>
                    ))}
                    {project.technologies.languages.split(',').length > 2 && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        +{project.technologies.languages.split(',').length - 2}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => openModal(project.id)}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Project Modals */}
          {projectData.map((project) => (
            <Modal
              key={project.id}
              dismissible
              show={activeModal === project.id}
              onClose={closeModal}
              size="4xl"
              position="center"
              className="custom-modal-backdrop z-50"
            >
              <Modal.Header className="border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  {project.featured && (
                    <Badge color="info" className="ml-2">Featured</Badge>
                  )}
                </div>
                <button 
                  onClick={closeModal}
                  className="inline-flex items-center justify-center w-8 h-8 text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <FaTimes className="w-4 h-4" />
                  <span className="sr-only">Close modal</span>
                </button>
              </Modal.Header>
              
              <Modal.Body className="space-y-6 p-6">
                <div className="carousel h-64 sm:h-80 md:h-96 xl:h-[28rem] rounded-lg overflow-hidden">
                  <Carousel
                    pauseOnHover
                    slideInterval={5000}
                    leftControl={
                      <button className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                          <FaAngleLeft className="w-5 h-5 text-white dark:text-gray-800" />
                          <span className="sr-only">Previous</span>
                        </span>
                      </button>
                    }
                    rightControl={
                      <button className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                          <FaAngleRight className="w-5 h-5 text-white dark:text-gray-800" />
                          <span className="sr-only">Next</span>
                        </span>
                      </button>
                    }
                    indicators={false}
                  >
                    {project.slideImages.map((img, index) => (
                      <img 
                        key={index}
                        src={img} 
                        alt={`${project.title} screenshot ${index + 1}`} 
                        className="object-contain h-full w-full"
                      />
                    ))}
                  </Carousel>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Project Overview</h4>
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.frameworks.split(',').map((tech, index) => (
                        <Badge key={`fw-${index}`} color="info" className="font-medium">{tech.trim()}</Badge>
                      ))}
                      {project.technologies.languages.split(',').map((tech, index) => (
                        <Badge key={`lang-${index}`} color="gray" className="font-medium">{tech.trim()}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Technical Details</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-semibold uppercase text-gray-700 dark:text-gray-300 mb-1">Languages & Core Technologies</h5>
                        <p className="text-gray-600 dark:text-gray-400">{project.technologies.languages}</p>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold uppercase text-gray-700 dark:text-gray-300 mb-1">Frameworks & Libraries</h5>
                        <p className="text-gray-600 dark:text-gray-400">{project.technologies.frameworks || "N/A"}</p>
                      </div>
                      
                      {project.technologies.tools && (
                        <div>
                          <h5 className="text-sm font-semibold uppercase text-gray-700 dark:text-gray-300 mb-1">Tools & Platforms</h5>
                          <p className="text-gray-600 dark:text-gray-400">{project.technologies.tools}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Modal.Body>
              
              <Modal.Footer className="border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Want to see more of my work? Check out my other projects.</p>
                </div>
                <div className="flex space-x-3">
                  {project.links.demo && (
                    <a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    >
                      <FaGithub className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  )}
                </div>
              </Modal.Footer>
            </Modal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;