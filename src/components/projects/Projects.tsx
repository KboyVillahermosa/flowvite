"use client";

import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Projects.css";

const Loader = () => {
  return (
    <div className="loader-header dark:bg-gray-900">
      <div className="spinner"></div>
    </div>
  );
};

const Projects = () => {
  const [openModalQuotes, setOpenModalQuotes] = useState(false);
  const [openModalWeather, setOpenModalWeather] = useState(false);
  const [openModalPizza, setOpenModalPizza] = useState(false);
  const [openModalSport, setOpenModalSport] = useState(false);
  const [openModalTool, setOpenModalTool] = useState(false);
  const [openModalNature, setOpenModalNature] = useState(false);
  const [openModalFront, setOpenModalFront] = useState(false);
  const [openModalTechBro, setOpenModalTechBro] = useState(false);
  const [openModalEduPoor, setOpenModalEduPoor] = useState(false);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && <Loader />}
      <section id="project">
        <main className="dark:bg-gray-900">
          <div className="project-title">
            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Projects
            </h1>
          </div>

          <div className="project-header">
            <div className="project-content rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            data-aos="fade-up"
            data-aos-duration="1000">
              <div
                className="group relative cursor-pointer"
                onClick={() => setOpenModalQuotes(true)}
              >
                <img
                  src="/q1.png"
                  alt="Qutes Generator"
                  className="h-auto w-full transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-lg font-bold text-white">
                    View More
                  </span>
                </div>
              </div>
              <div className="modal-header">
                <div className="modal-content">
                  <Modal
                    show={openModalQuotes}
                    onClose={() => setOpenModalQuotes(false)}
                    className="modal"
                  >
                    <Modal.Header className="">About this Project</Modal.Header>
                    <Modal.Body className="p-3">
                      <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel
                          pauseOnHover
                          leftControl={
                            <span>
                              <FaAngleLeft className="control text-2xl " />
                            </span>
                          }
                          rightControl={
                            <span>
                              <FaAngleRight className="control text-2xl " />
                            </span>
                          }
                        >
                          <img src="/q2.png" alt="..." />
                          <img src="/q3.png" alt="..." />
                          <img src="/q4.png" alt="..." />
                          <img src="/q2.png" alt="..." />
                        </Carousel>
                      </div>
                      <div className="P-2">
                        <h1 className="text-2xl font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-2xl">
                          Technologies and Languages Used
                        </h1>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Languages
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          HTML, CSS, PHP, JAVASCRIPT
                        </p>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Frameworks
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Tailwind CSS
                        </p>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Tools and Platforms
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">API</p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Link
                        to="https://github.com/KboyVillahermosa?tab=overview&from=2024-04-01&to=2024-04-30"
                        target="blank_"
                      >
                        <Button onClick={() => setOpenModalQuotes(false)}>
                          Source Code
                        </Button>
                      </Link>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Qutes Generator
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <div className="project-content rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            data-aos="fade-up"
            data-aos-duration="1000">
              <div
                className="group relative cursor-pointer"
                onClick={() => setOpenModalWeather(true)}
              >
                <img
                  src="/weather.png"
                  alt="Wheater"
                  className="h-auto w-full transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-lg font-bold text-white">
                    View More
                  </span>
                </div>
              </div>
              {/* modal content    */}
              <div className="modal-header">
                <div className="modal-content">
                  <Modal
                    dismissible
                    show={openModalWeather}
                    onClose={() => setOpenModalWeather(false)}
                    className=""
                  >
                    <Modal.Header>About this Project</Modal.Header>
                    <Modal.Body className="p-3">
                      <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel
                          pauseOnHover
                          leftControl={
                            <span>
                              <FaAngleLeft className="control text-2xl " />
                            </span>
                          }
                          rightControl={
                            <span>
                              <FaAngleRight className="control text-2xl " />
                            </span>
                          }
                        >
                          <img src="/weather1.png" alt="..." />
                          <img src="/weather2.png" alt="..." />
                          <img src="/weather3.png" alt="..." />
                          <img src="/weather4.png" alt="..." />
                        </Carousel>
                      </div>
                      <div className="P-2">
                        <h1 className="text-2xl font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-2xl">
                          Technologies and Languages Used
                        </h1>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Languages
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          HTML, CSS, PHP, JAVASCRIPT
                        </p>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Frameworks
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Tailwind CSS
                        </p>
                        <h3 className="text-1xl mt-1 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Tools and Platforms
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">API</p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Link
                        to="https://github.com/KboyVillahermosa/weather-project.git"
                        target="blank_"
                      >
                        <Button onClick={() => setOpenModalWeather(false)}>
                          Source Code
                        </Button>
                      </Link>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Weather App
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Stay informed and empowered with real-time weather updates,
                forecasts, and insightful meteorological data.
              </p>
            </div>

            {/* PIZZA HUT PROJECT CONTENT   */}
            <div className="project-content rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            data-aos="fade-up"
            data-aos-duration="1000">
              <div
                className="group relative cursor-pointer"
                onClick={() => setOpenModalPizza(true)}
              >
                <img
                  src="/pizza2.png"
                  alt=""
                  className="h-auto w-full transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-lg font-bold text-white">
                    View More
                  </span>
                </div>
              </div>
              {/* modal content    */}
              <div className="modal-header">
                <div className="modal-content">
                  <Modal
                    dismissible
                    show={openModalPizza}
                    onClose={() => setOpenModalPizza(false)}
                    className=""
                  >
                    <Modal.Header>About this Project</Modal.Header>
                    <Modal.Body className="w-full p-3">
                      <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel
                          pauseOnHover
                          leftControl={
                            <span>
                              <FaAngleLeft className="control text-2xl " />
                            </span>
                          }
                          rightControl={
                            <span>
                              <FaAngleRight className="control text-2xl " />
                            </span>
                          }
                        >
                          <img src="/pizza3.png" alt="..." />
                          <img src="/pizza4.png" alt="..." />
                          <img src="/pizza5.png" alt="..." />
                          <img src="/pizza6.png" alt="..." />
                        </Carousel>
                      </div>
                      <div className="P-2">
                        <h1 className="text-2xl font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-2xl">
                          Technologies and Languages Used
                        </h1>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Languages
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          HTML, CSS, PHP, JAVASCRIPT, MYSQL
                        </p>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Frameworks
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Tailwind CSS
                        </p>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Tools and Platforms
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          MySQL, Apache, Phpmyadmin, Version Control
                        </p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => setOpenModalPizza(false)}>
                        I accept
                      </Button>
                      <Button
                        color="gray"
                        onClick={() => setOpenModalPizza(false)}
                      >
                        Decline
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                E-commerce Pizza
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Your Ultimate Destination for Exceptional Pizza and Beyond!
                Welcome to a culinary haven where passion for flavors meets the
                convenience of modern technology
              </p>
            </div>

            {/* sport car HUT PROJECT CONTENT   */}
            <div className="project-content rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            data-aos="fade-up"
            data-aos-duration="1000">
              <div
                className="group relative cursor-pointer"
                onClick={() => setOpenModalSport(true)}
              >
                <img
                  src="/b1.png"
                  alt=""
                  className="h-auto w-full transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-lg font-bold text-white">
                    View More
                  </span>
                </div>
              </div>
              {/* modal content    */}
              <div className="modal-header">
                <div className="modal-content">
                  <Modal
                    dismissible
                    show={openModalSport}
                    onClose={() => setOpenModalSport(false)}
                    className=""
                  >
                    <Modal.Header>About this Project</Modal.Header>
                    <Modal.Body className="w-full p-3">
                      <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel
                          pauseOnHover
                          leftControl={
                            <span>
                              <FaAngleLeft className="control text-2xl " />
                            </span>
                          }
                          rightControl={
                            <span>
                              <FaAngleRight className="control text-2xl " />
                            </span>
                          }
                        >
                          <img src="/b2.png" alt="..." />
                          <img src="/b3.png" alt="..." />
                        </Carousel>
                      </div>
                      <div className="P-2">
                        <h1 className="text-2xl font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-2xl">
                          Technologies and Languages Used
                        </h1>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Languages
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          HTML, CSS, JAVASCRIPT
                        </p>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Frameworks
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Bootstrap
                        </p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => setOpenModalSport(false)}>
                        I accept
                      </Button>
                      <Button
                        color="gray"
                        onClick={() => setOpenModalSport(false)}
                      >
                        Decline
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sport Car Blog
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Embark on a thrilling journey through the sleek and powerful
                world of speed and design
              </p>
            </div>

            {/* TechTool HUT PROJECT CONTENT   */}
            <div className="project-content rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            data-aos="fade-up"
            data-aos-duration="1000">
              <div
                className="group relative cursor-pointer"
                onClick={() => setOpenModalTool(true)}
              >
                <img
                  src="/tech2.png"
                  alt=""
                  className="h-auto w-full transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-lg font-bold text-white">
                    View More
                  </span>
                </div>
              </div>
              {/* modal content    */}
              <div className="modal-header">
                <div className="modal-content">
                  <Modal
                    dismissible
                    show={openModalTool}
                    onClose={() => setOpenModalTool(false)}
                    className=""
                  >
                    <Modal.Header>About this Project</Modal.Header>
                    <Modal.Body className="w-full p-3">
                      <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel
                          pauseOnHover
                          leftControl={
                            <span>
                              <FaAngleLeft className="control text-2xl " />
                            </span>
                          }
                          rightControl={
                            <span>
                              <FaAngleRight className="control text-2xl " />
                            </span>
                          }
                        >
                          <img src="/tech1.png" alt="..." />
                          <img src="/tech2.png" alt="..." />
                          <img src="/tech3.png" alt="..." />
                          <img src="/tech4.png" alt="..." />
                          <img src="/tech5.png" alt="..." />
                          <img src="/tech6.png" alt="..." />
                          <img src="/tech7.png" alt="..." />
                        </Carousel>
                      </div>
                      <div className="p-2">
                        <h1 className="text-2xl font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-2xl">
                          Technologies and Languages Used
                        </h1>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Languages
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          HTML, CSS, PHP, JAVASCRIPT, MYSQL
                        </p>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Frameworks
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Tailwind CSS
                        </p>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Tools and Platforms
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          MySQL, Apache, Phpmyadmin, Version Control
                        </p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <a
                        href="https://github.com/KboyVillahermosa/TechTool.git"
                        target="_blank"
                      >
                        <Button>Source Code</Button>
                      </a>
                      <Button
                        color="gray"
                        onClick={() => setOpenModalTool(false)}
                      >
                        Decline
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                TechTool
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Your go-to resource for improving your computer science and IT
                abilities.
              </p>
            </div>

            {/* NATURE PROJECT CONTENT   */}
            <div className="project-content rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            data-aos="fade-up"
            data-aos-duration="1000">
              <div
                className="group relative cursor-pointer"
                onClick={() => setOpenModalNature(true)}
              >
                <img
                  src="/nature1.png"
                  alt=""
                  className="h-auto w-full transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-lg font-bold text-white">
                    View More
                  </span>
                </div>
              </div>
              {/* modal content    */}
              <div className="modal-header">
                <div className="modal-content">
                  <Modal
                    dismissible
                    show={openModalNature}
                    onClose={() => setOpenModalNature(false)}
                    className=""
                  >
                    <Modal.Header>About this Project</Modal.Header>
                    <Modal.Body className="w-full p-3">
                      <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel
                          pauseOnHover
                          leftControl={
                            <span>
                              <FaAngleLeft className="control text-2xl " />
                            </span>
                          }
                          rightControl={
                            <span>
                              <FaAngleRight className="control text-2xl " />
                            </span>
                          }
                        >
                          <img src="/nature1.png" alt="..." />
                          <img src="/nature2.png" alt="..." />
                          <img src="/nature3.png" alt="..." />
                          <img src="/nature4.png" alt="..." />
                          <img src="/nature5.png" alt="..." />
                        </Carousel>
                      </div>
                      <div className="p-2">
                        <h1 className="text-2xl font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-2xl">
                          Technologies and Languages Used
                        </h1>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Languages
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          HTML, CSS, JAVASCRIPT
                        </p>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Frameworks
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Tailwind CSS
                        </p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <a
                        href="https://github.com/KboyVillahermosa/TechTool.git"
                        target="_blank"
                      >
                        <Button>Source Code</Button>
                      </a>
                      <Button
                        color="gray"
                        onClick={() => setOpenModalNature(false)}
                      >
                        Decline
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Nature Gallery
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Step into the serenity of our Nature Gallery, where the beauty
                of the natural world unfolds in a captivating visual symphony.
              </p>
            </div>

            {/* Frontend PROJECT CONTENT   */}
            <div className="project-content rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            data-aos="fade-up"
            data-aos-duration="1000">
              <div
                className="group relative cursor-pointer"
                onClick={() => setOpenModalFront(true)}
              >
                <img
                  src="/front.png"
                  alt=""
                  className="h-auto w-full transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-lg font-bold text-white">
                    View More
                  </span>
                </div>
              </div>
              {/* modal content    */}
              <div className="modal-header">
                <div className="modal-content">
                  <Modal
                    dismissible
                    show={openModalFront}
                    onClose={() => setOpenModalFront(false)}
                    className=""
                  >
                    <Modal.Header>About this Project</Modal.Header>
                    <Modal.Body className="w-full p-3">
                      <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel
                          pauseOnHover
                          leftControl={
                            <span>
                              <FaAngleLeft className="control text-2xl " />
                            </span>
                          }
                          rightControl={
                            <span>
                              <FaAngleRight className="control text-2xl " />
                            </span>
                          }
                        >
                          <img src="/frontend2.png" alt="..." />
                          <img src="/frontend3.png" alt="..." />
                          <img src="/frontend4.png" alt="..." />
                          <img src="/frontend5.png" alt="..." />
                          <img src="/frontend6.png" alt="..." />
                          <img src="/frontend7.png" alt="..." />
                          <img src="/frontend8.png" alt="..." />
                          <img src="/frontend9.png" alt="..." />
                          <img src="/frontend10.png" alt="..." />
                          <img src="/frontend11.png" alt="..." />
                          <img src="/frontend12.png" alt="..." />
                          <img src="/frontend13.png" alt="..." />
                        </Carousel>
                      </div>
                      <div className="p-2">
                        <h1 className="text-2xl font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-2xl">
                          Technologies and Languages Used
                        </h1>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Languages
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          React Vite
                        </p>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Frameworks
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Tailwind CSS
                        </p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <a
                        href="https://github.com/KboyVillahermosa/TechTool.git"
                        target="_blank"
                      >
                        <Button>Source Code</Button>
                      </a>
                      <Button
                        color="gray"
                        onClick={() => setOpenModalFront(false)}
                      >
                        Decline
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                FrontEnd Practice
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Take your frontend skills to the next level by recreating real
                websites from real companies.
              </p>
            </div>

            {/* TechBro PROJECT CONTENT   */}
            <div className="project-content rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            data-aos="fade-up"
            data-aos-duration="1000">
              <div
                className="group relative cursor-pointer"
                onClick={() => setOpenModalTechBro(true)}
              >
                <img
                  src="/techbro1.png"
                  alt=""
                  className="h-auto w-full transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-lg font-bold text-white">
                    View More
                  </span>
                </div>
              </div>
              {/* modal content    */}
              <div className="modal-header">
                <div className="modal-content">
                  <Modal
                    dismissible
                    show={openModalTechBro}
                    onClose={() => setOpenModalTechBro(false)}
                    className=""
                  >
                    <Modal.Header>About this Project</Modal.Header>
                    <Modal.Body className="w-full p-3">
                      <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel
                          pauseOnHover
                          leftControl={
                            <span>
                              <FaAngleLeft className="control text-2xl " />
                            </span>
                          }
                          rightControl={
                            <span>
                              <FaAngleRight className="control text-2xl " />
                            </span>
                          }
                        >
                          <img src="/techbro2.png" alt="..." />
                          <img src="/techbro3.png" alt="..." />
                          <img src="/techbro4.png" alt="..." />
                        </Carousel>
                      </div>
                      <div className="p-2">
                        <h1 className="text-2xl font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-2xl">
                          Technologies and Languages Used
                        </h1>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Languages
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          React Vite
                        </p>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Frameworks
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Tailwind CSS
                        </p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <a
                        href="https://github.com/KboyVillahermosa/TechTool.git"
                        target="_blank"
                      >
                        <Button>Source Code</Button>
                      </a>
                      <Button
                        color="gray"
                        onClick={() => setOpenModalTechBro(false)}
                      >
                        Decline
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                TechBros
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                At TechBros, we're more than just a startup; we're visionaries,
                innovators, and problem solvers passionate about transforming
                ideas into impactful solutions.
              </p>
            </div>

            {/* PoorEduAksuon   */}
            <div className="project-content rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            data-aos="fade-up"
            data-aos-duration="1000">
              <div
                className="group relative cursor-pointer"
                onClick={() => setOpenModalEduPoor(true)}
              >
                <img
                  src="/edu2.png"
                  alt=""
                  className="h-auto w-full transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-lg font-bold text-white">
                    View More
                  </span>
                </div>
              </div>
              {/* modal content    */}
              <div className="modal-header">
                <div className="modal-content">
                  <Modal
                    dismissible
                    show={openModalEduPoor}
                    onClose={() => setOpenModalEduPoor(false)}
                    className=""
                  >
                    <Modal.Header>About this Project</Modal.Header>
                    <Modal.Body className="w-full p-3">
                      <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel
                          pauseOnHover
                          leftControl={
                            <span>
                              <FaAngleLeft className="control text-2xl " />
                            </span>
                          }
                          rightControl={
                            <span>
                              <FaAngleRight className="control text-2xl " />
                            </span>
                          }
                        >
                          <img src="/edu1.png" alt="..." />
                          <img src="/edu2.png" alt="..." />
                          <img src="/edu3.png" alt="..." />
                          <img src="/edu4.png" alt="..." />
                          <img src="/edu5.png" alt="..." />
                          <img src="/edu6.png" alt="..." />
                          <img src="/edu7.png" alt="..." />
                          <img src="/edu8.png" alt="..." />
                          <img src="/edu9.png" alt="..." />
                          <img src="/edu10.png" alt="..." />
                          <img src="/edu11.png" alt="..." />
                          <img src="/edu12.png" alt="..." />
                        </Carousel>
                      </div>
                      <div className="p-2">
                        <h1 className="text-2xl font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-2xl">
                          Technologies and Languages Used
                        </h1>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Languages
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          PHP, Javascript
                        </p>
                        <h3 className="text-1xl mt-3 font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                          Frameworks
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Tailwind CSS
                        </p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <a
                        href="https://github.com/KboyVillahermosa/TechTool.git"
                        target="_blank"
                      >
                        <Button>Source Code</Button>
                      </a>
                      <Button
                        color="gray"
                        onClick={() => setOpenModalTechBro(false)}
                      >
                        Decline
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                PoorEduAksyon
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                At PobrEduKasyon, we believe in the power of education to
                transform lives
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Projects;
