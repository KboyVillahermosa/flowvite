import "./Experience.css";
import Lottie from "lottie-react";
import animationData from "./react.json";
import { Timeline, Button, Modal,  Accordion } from "flowbite-react";
import { HiCalendar, HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Experience = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <main className="dark:bg-gray-900   ">
        <div className="experience-header">
          <div className="experience-image-content" data-aos="fade-right"
            data-aos-duration="1000">
            <h1 className="mb-5 p-3 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              My Experience
            </h1>
            <Lottie animationData={animationData} />
          </div>
          <div className="experience-content"   data-aos="fade-up"
            data-aos-duration="1000">
            <Timeline>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Title>
                    Over two years of experience working as a freelance web
                    developer
                  </Timeline.Title>
                  <Timeline.Body>
                    <p className="">
                      As a dedicated and passionate Frontend Developer, I have
                      accumulated nearly two years of hands-on experience in
                      freelancing. During this time, I have honed my skills in
                      building dynamic, responsive, and user-friendly web
                      applications.
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Title>Technical Skills</Timeline.Title>
                  <Timeline.Body>
                    <p>
                      Proficient in HTML, CSS, Php, MySQL JavaScript Reactjs
                      Vite Typescript
                    </p>
                    <p>
                      Familiar with version control systems like Github and Git
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Title>Achievements and Awards</Timeline.Title>
                  <Timeline.Body>
                    <p>
                      Dean's List, University of Southern Philippines
                      Foundation, (Fall 2022 - Fall 2023)
                    </p>

                    <p className="mt-3">
                      3rd Placer, Hackathon CCS, 2023 - Recognized for creating
                      a website for job searching
                    </p>
                    <p className="mt-3">
                    Certificate of appreciation for participating in 2024 Cebu Interschool HACKATHON
                    </p>
                   <div className="button flex items-center gap-4 max-md:w-full">
                    <Link
                      to="https://drive.google.com/file/d/12Fg5NmLEq9VejXWzhiP69rxKLf-f_j3G/view?usp=sharing"
                      target="blank_"
                    >
                      <Button color="gray" className="mt-5">
                        Resume
                        <HiArrowNarrowRight className="ml-2 h-6 w-3" />{" "}
                      </Button>
                    </Link>
                    <Button onClick={() => setOpenModal(true)} className="mt-5">Certificate</Button>
                    </div>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
            <div className="modal">
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Certificate</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Hackathon CCS, 2023</Accordion.Title>
        <Accordion.Content>
        <div className="image">
            <div className="image-header">
            <p className="mb-3 text-gray-900 dark:text-white">
                      3rd Placer, Hackathon CCS, 2023 - Recognized for creating
                      a website for job searching
                    </p>
            <img src="/green.jpg" alt="" />
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Cebu Interschool Hackathon</Accordion.Title>
        <Accordion.Content>
          <div className="image">
          <p className="mb-3 text-gray-900 dark:text-white">
                      Certificate of appreciation for participating in 2024 Cebu Interschool HACKATHON
                    </p>
            <div className="image-header">
            <img src="/interschool.jpg" alt="" />
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
     
    </Accordion>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Experience;
