import "./Experience.css";
import {  Timeline, Button } from "flowbite-react";
import {  HiCalendar, HiArrowNarrowRight  } from "react-icons/hi";
import { Link } from 'react-router-dom'

const Experience = () => {
  return (
    <>
      <main className="dark:bg-gray-800   ">
        <div className="experience-header">
          <div className="experience-image-content">
            <h1 className="p-3 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
             My Experience
            </h1>
            <img src="/exp.png" alt="" />
          </div>
          <div className="experience-content">
            <Timeline>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Title>
                  Over two years of experience working as a freelance web developer
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
                  <p>Proficient in HTML, CSS, Php, MySQL JavaScript Reactjs Vite Typescript</p>
                  <p>Familiar with version control systems like Github and Git</p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Title>
                  Achievements and Awards
                  </Timeline.Title>
                  <Timeline.Body>
                   <p>Dean's List, University of Southern Philippines Foundation, (Fall 2022 - Fall 2023)</p>

                   <p className="mt-3">3rd Placer, Hackathon CCS, 2023 - Recognized for creating a website for job searching</p>
                  <Link to="https://drive.google.com/file/d/12Fg5NmLEq9VejXWzhiP69rxKLf-f_j3G/view?usp=sharing" target="blank_"><Button color="gray" className="mt-5">Resume<HiArrowNarrowRight className="ml-2 h-3 w-3" /> </Button></Link> 
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </main>
    </>
  );
};

export default Experience;
