"use client";

import { Card } from "flowbite-react";
import "./Projects.css";

const Projects = () => {
  return (
    <main className="dark:bg-gray-800">
      <div className="project-title">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Experience and Projects
        </h1>
      </div>

      <div className="project-header">
        <div className="project-content">
          <Card href="#" className="project-content max-w-sm">
            <img src="/public/undraw_Join_re_w1lh.png" alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="project-content">
          <Card href="#" className="project-content max-w-sm">
            <img src="/public/undraw_Join_re_w1lh.png" alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="project-content">
          <Card href="#" className="project-content max-w-sm">
            <img src="/public/undraw_Join_re_w1lh.png" alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Projects;
