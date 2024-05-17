
import './Skills.css'
import {  Timeline } from "flowbite-react";
import {  HiCalendar } from "react-icons/hi";

const Skills = () => {
  return (
    <main className="dark:bg-gray-800">
        <div className="skills-title">
            <h1 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>Skills and Expertise</h1>
        </div>
        <div className="skills-header">
            <div className="skills-content">
            <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time></Timeline.Time>
          <Timeline.Title className='text-2xl text-gray-900 font-extrabold dark:text-white md:text-2xl'>Frontend Development</Timeline.Title>
          <Timeline.Body>
          <h1 className='text-1xl text-gray-900 font-extrabold dark:text-white md:text-1xl'><span className='frontend-span'>HTML, CSS, JAVASCRIPT, PHP, REACTJS + VITE + TYPESCRIPT</span></h1>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>March 2022</Timeline.Time>
          <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>April 2022</Timeline.Time>
          <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
            </div>
            <div className="skills-image">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/bootstrap.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/tailwind.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/git.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/html.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/css.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/github.png" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/js.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/php.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/Frameworks-for-React-JS.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/vite.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/ts.webp" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/mysql.png" alt="" />
        </div>
    </div>
</div>

            </div>
        </div>
    </main>
  )
}

export default Skills