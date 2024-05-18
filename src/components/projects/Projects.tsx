
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Carousel } from "flowbite-react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./Projects.css";


const Projects = () => {
  const [openModalQuotes, setOpenModalQuotes] = useState(false);
  const [openModalWeather, setOpenModalWeather] = useState(false);
  const [openModalPizza, setOpenModalPizza] = useState(false);
  const [openModalSport, setOpenModalSport] = useState(false);
  const [openModalTool, setOpenModalTool] = useState(false);
  const [openModalNature, setOpenModalNature] = useState(false);
  const [openModalFront, setOpenModalFront] = useState(false);
  const [openModalTechBro, setOpenModalTechBro] = useState(false);

  return (
    <section id="project">
    <main className="dark:bg-gray-800">
      <div className="project-title">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
         Projects
        </h1>
      </div>

      <div className="project-header">
        <div className="project-content bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div
        className="relative cursor-pointer group"
        onClick={() => setOpenModalQuotes(true)}  >
        <img
          src="/public/q1.png"
          alt="Qutes Generator"
          className="w-full h-auto transition-opacity duration-300 group-hover:opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-white text-lg font-bold">View More</span>
        </div>
      </div>
      <div className="modal-header">
              <div className="modal-content">
          <Modal show={openModalQuotes} onClose={() => setOpenModalQuotes(false)}  className="modal">
        <Modal.Header className="">About this Project</Modal.Header>
        <Modal.Body className="p-3">
        <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
       <Carousel pauseOnHover leftControl={<span><FaAngleLeft  className="control text-2xl "/></span>} rightControl={<span><FaAngleRight className="control text-2xl "/></span>}>
        <img src="/public/q2.png" alt="..." />
        <img src="/public/q3.png" alt="..." />
        <img src="/public/q4.png" alt="..." />
        <img src="/public/q2.png" alt="..." />
       </Carousel>
    </div>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Your Daily Dose of Inspiration and Wisdom! Immerse yourself in a world of timeless wisdom, motivation,
             and thought-provoking insights with our Quotes Generator.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Designed to uplift and inspire, this innovative tool curates a diverse collection of quotes from renowned thinkers
            , authors, and leaders across the ages.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModalQuotes(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModalQuotes(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Qutes Generator
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
        </div>
        <div className="project-content bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div
        className="relative cursor-pointer group"
        onClick={() => setOpenModalWeather(true)}  >
        <img
          src="/public/weather.png"
          alt="Wheater"
          className="w-full h-auto transition-opacity duration-300 group-hover:opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-white text-lg font-bold">View More</span>
        </div>
      </div>
        {/* modal content    */}
        <div className="modal-header">
              <div className="modal-content">
          <Modal dismissible show={openModalWeather} onClose={() => setOpenModalWeather(false)}  className="">
        <Modal.Header>About this Project</Modal.Header>
        <Modal.Body className="p-3">
        <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
       <Carousel pauseOnHover leftControl={<span><FaAngleLeft  className="control text-2xl "/></span>} rightControl={<span><FaAngleRight className="control text-2xl "/></span>}>
        <img src="/public/weather1.png" alt="..." />
        <img src="/public/weather2.png" alt="..." />
        <img src="/public/weather3.png" alt="..." />
        <img src="/public/weather4.png" alt="..." />
       </Carousel>
    </div>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Dive into interactive maps, explore detailed forecasts, and track the latest conditions with precision.
            Stay informed and empowered with real-time weather updates, forecasts, and insightful meteorological data.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Whether you're planning your day, a weekend getaway, or simply intrigued by the forces of nature, 
            our Weather Website provides a seamless and user-friendly experience.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModalWeather(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModalWeather(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
        </div>


        {/* PIZZA HUT PROJECT CONTENT   */}
        <div className="project-content bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div
        className="relative cursor-pointer group"
        onClick={() => setOpenModalPizza(true)}  >
        <img
          src="/public/pizza2.png"
          alt=""
          className="w-full h-auto transition-opacity duration-300 group-hover:opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-white text-lg font-bold">View More</span>
        </div>
      </div>
          {/* modal content    */}
          <div className="modal-header">
              <div className="modal-content">
          <Modal dismissible show={openModalPizza} onClose={() => setOpenModalPizza(false)}  className="">
        <Modal.Header>About this Project</Modal.Header>
        <Modal.Body className="p-3 w-full">
        <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
       <Carousel pauseOnHover leftControl={<span><FaAngleLeft  className="control text-2xl "/></span>} rightControl={<span><FaAngleRight className="control text-2xl "/></span>}>
        <img src="/public/pizza3.png" alt="..." />
        <img src="/public/pizza4.png" alt="..." />
        <img src="/public/pizza5.png" alt="..." />
        <img src="/public/pizza6.png" alt="..." />
       </Carousel>
    </div>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModalPizza(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModalPizza(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
        </div>

          {/* sport car HUT PROJECT CONTENT   */}
          <div className="project-content bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div
        className="relative cursor-pointer group"
        onClick={() => setOpenModalSport(true)}  >
        <img
          src="/public/b1.png"
          alt=""
          className="w-full h-auto transition-opacity duration-300 group-hover:opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-white text-lg font-bold">View More</span>
        </div>
      </div>
          {/* modal content    */}
          <div className="modal-header">
              <div className="modal-content">
        <Modal dismissible show={openModalSport} onClose={() => setOpenModalSport(false)}  className="">
        <Modal.Header>About this Project</Modal.Header>
        <Modal.Body className="p-3 w-full">
        <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel pauseOnHover leftControl={<span><FaAngleLeft  className="control text-2xl "/></span>} rightControl={<span><FaAngleRight className="control text-2xl "/></span>}>
        <img src="/public/b2.png" alt="..." />
        <img src="/public/b3.png" alt="..." />
       </Carousel>
    </div>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Embark on a thrilling journey through the sleek and powerful world of speed and design. 
            Our Sport Car Gallery showcases the epitome of automotive excellence, where precision engineering meets breathtaking aesthetics.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Unleash the roar of high-performance engines and experience the artistry of cutting-edge design.
             Get ready to be captivated by the sheer elegance and adrenaline-pumping beauty that defines the spirit of these remarkable sports cars.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModalSport(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModalSport(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
        </div>

          {/* TechTool HUT PROJECT CONTENT   */}
          <div className="project-content bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div
        className="relative cursor-pointer group"
        onClick={() => setOpenModalTool(true)}  >
        <img
          src="/public/tech2.png"
          alt=""
          className="w-full h-auto transition-opacity duration-300 group-hover:opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-white text-lg font-bold">View More</span>
        </div>
      </div>
          {/* modal content    */}
          <div className="modal-header">
              <div className="modal-content">
        <Modal dismissible show={openModalTool} onClose={() => setOpenModalTool(false)}  className="">
        <Modal.Header>About this Project</Modal.Header>
        <Modal.Body className="p-3 w-full">
        <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel pauseOnHover leftControl={<span><FaAngleLeft  className="control text-2xl "/></span>} rightControl={<span><FaAngleRight className="control text-2xl "/></span>}>
        <img src="/public/tech1.png" alt="..." />
        <img src="/public/tech2.png" alt="..." />
        <img src="/public/tech3.png" alt="..." />
        <img src="/public/tech4.png" alt="..." />
        <img src="/public/tech5.png" alt="..." />
        <img src="/public/tech6.png" alt="..." />
        <img src="/public/tech7.png" alt="..." />
       </Carousel>
    </div>
          <div className="p-2">
            <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white uppercase">
            Technologies and Languages Used
            </h1>
            <h3 className="text-1xl font-extrabold leading-none tracking-tight text-gray-900 mt-3 dark:text-white uppercase">
            Languages
            </h3>
            <p className="text-gray-600 dark:text-gray-300">HTML, CSS, PHP, JAVASCRIPT, MYSQL</p>
            <h3 className="text-1xl font-extrabold leading-none tracking-tight text-gray-900 mt-3 dark:text-white uppercase">
            Frameworks
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Tailwind CSS</p>
            <h3 className="text-1xl font-extrabold leading-none tracking-tight text-gray-900 mt-3 dark:text-white uppercase">
            Tools and Platforms
            </h3>
            <p className="text-gray-600 dark:text-gray-300">MySQL, Apache, Phpmyadmin, Version Control</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a href="https://github.com/KboyVillahermosa/TechTool.git" target="_blank"><Button>Source Code</Button></a>
          <Button color="gray" onClick={() => setOpenModalTool(false)}>
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
            Your go-to resource for improving your computer science and IT abilities.
            </p>
        </div>

        {/* NATURE PROJECT CONTENT   */}
        <div className="project-content bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div
        className="relative cursor-pointer group"
        onClick={() => setOpenModalNature(true)}  >
        <img
          src="/publiC/nature1.png"
          alt=""
          className="w-full h-auto transition-opacity duration-300 group-hover:opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-white text-lg font-bold">View More</span>
        </div>
      </div>
          {/* modal content    */}
          <div className="modal-header">
              <div className="modal-content">
        <Modal dismissible show={openModalNature} onClose={() => setOpenModalNature(false)}  className="">
        <Modal.Header>About this Project</Modal.Header>
        <Modal.Body className="p-3 w-full">
        <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel pauseOnHover leftControl={<span><FaAngleLeft  className="control text-2xl "/></span>} rightControl={<span><FaAngleRight className="control text-2xl "/></span>}>
        <img src="/public/nature1.png" alt="..." />
        <img src="/public/nature2.png" alt="..." />
        <img src="/public/nature3.png" alt="..." />
        <img src="/public/nature4.png" alt="..." />
        <img src="/public/nature5.png" alt="..." />
       </Carousel>
    </div>
          <div className="p-2">
            <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white uppercase">
            Technologies and Languages Used
            </h1>
            <h3 className="text-1xl font-extrabold leading-none tracking-tight text-gray-900 mt-3 dark:text-white uppercase">
            Languages
            </h3>
            <p className="text-gray-600 dark:text-gray-300">HTML, CSS, PHP, JAVASCRIPT</p>
            <h3 className="text-1xl font-extrabold leading-none tracking-tight text-gray-900 mt-3 dark:text-white uppercase">
            Frameworks
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Tailwind CSS</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a href="https://github.com/KboyVillahermosa/TechTool.git" target="_blank"><Button>Source Code</Button></a>
          <Button color="gray" onClick={() => setOpenModalNature(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             Web Design
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Your go-to resource for improving your computer science and IT abilities.
            </p>
        </div>

        
          {/* Frontend PROJECT CONTENT   */}
          <div className="project-content bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div
        className="relative cursor-pointer group"
        onClick={() => setOpenModalFront(true)}  >
        <img
          src="/public/front.png"
          alt=""
          className="w-full h-auto transition-opacity duration-300 group-hover:opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-white text-lg font-bold">View More</span>
        </div>
      </div>
          {/* modal content    */}
          <div className="modal-header">
              <div className="modal-content">
        <Modal dismissible show={openModalFront} onClose={() => setOpenModalFront(false)}  className="">
        <Modal.Header>About this Project</Modal.Header>
        <Modal.Body className="p-3 w-full">
        <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel pauseOnHover leftControl={<span><FaAngleLeft  className="control text-2xl "/></span>} rightControl={<span><FaAngleRight className="control text-2xl "/></span>}>
        <img src="/public/frontend2.png" alt="..." />
        <img src="/public/frontend3.png" alt="..." />
        <img src="/public/frontend4.png" alt="..." />
        <img src="/public/frontend5.png" alt="..." />
        <img src="/public/frontend6.png" alt="..." />
        <img src="/public/frontend7.png" alt="..." />
        <img src="/public/frontend8.png" alt="..." />
        <img src="/public/frontend9.png" alt="..." />
        <img src="/public/frontend10.png" alt="..." />
        <img src="/public/frontend11.png" alt="..." />
        <img src="/public/frontend12.png" alt="..." />
        <img src="/public/frontend13.png" alt="..." />

       </Carousel>
    </div>
          <div className="p-2">
            <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white uppercase">
            Technologies and Languages Used
            </h1>
            <h3 className="text-1xl font-extrabold leading-none tracking-tight text-gray-900 mt-3 dark:text-white uppercase">
            Languages
            </h3>
            <p className="text-gray-600 dark:text-gray-300">HTML, CSS, PHP, JAVASCRIPT</p>
            <h3 className="text-1xl font-extrabold leading-none tracking-tight text-gray-900 mt-3 dark:text-white uppercase">
            Frameworks
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Tailwind CSS</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a href="https://github.com/KboyVillahermosa/TechTool.git" target="_blank"><Button>Source Code</Button></a>
          <Button color="gray" onClick={() => setOpenModalFront(false)}>
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
            Your go-to resource for improving your computer science and IT abilities.
            </p>
        </div>


        
          {/* TechBro PROJECT CONTENT   */}
          <div className="project-content bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div
        className="relative cursor-pointer group"
        onClick={() => setOpenModalTechBro(true)}  >
        <img
          src="/public/techbro1.png"
          alt=""
          className="w-full h-auto transition-opacity duration-300 group-hover:opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-white text-lg font-bold">View More</span>
        </div>
      </div>
          {/* modal content    */}
          <div className="modal-header">
              <div className="modal-content">
        <Modal dismissible show={openModalTechBro} onClose={() => setOpenModalTechBro(false)}  className="">
        <Modal.Header>About this Project</Modal.Header>
        <Modal.Body className="p-3 w-full">
        <div className="carousel h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel pauseOnHover leftControl={<span><FaAngleLeft  className="control text-2xl "/></span>} rightControl={<span><FaAngleRight className="control text-2xl "/></span>}>
        <img src="/public/techbro2.png" alt="..." />
        <img src="/public/techbro3.png" alt="..." />
        <img src="/public/techbro4.png" alt="..." />
       </Carousel>
    </div>
          <div className="p-2">
            <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white uppercase">
            Technologies and Languages Used
            </h1>
            <h3 className="text-1xl font-extrabold leading-none tracking-tight text-gray-900 mt-3 dark:text-white uppercase">
            Languages
            </h3>
            <p className="text-gray-600 dark:text-gray-300">HTML, CSS, PHP, JAVASCRIPT</p>
            <h3 className="text-1xl font-extrabold leading-none tracking-tight text-gray-900 mt-3 dark:text-white uppercase">
            Frameworks
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Tailwind CSS</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a href="https://github.com/KboyVillahermosa/TechTool.git" target="_blank"><Button>Source Code</Button></a>
          <Button color="gray" onClick={() => setOpenModalTechBro(false)}>
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
            Your go-to resource for improving your computer science and IT abilities.
            </p>
        </div>
      </div>
    </main>
    </section>
  );
};

export default Projects;
