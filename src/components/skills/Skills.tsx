
import './Skills.css'
import {  Timeline } from "flowbite-react";
import {  HiCalendar } from "react-icons/hi";

const Skills = () => {
  return (
    <main className="dark:bg-gray-800">
        <div className="skills-title">
            <h1 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl'> Skills and Expertise</h1>
        </div>
        <div className="skills-header">
            <div className="skills-content">
            <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time></Timeline.Time>
          <Timeline.Title className=''>Frontend Development</Timeline.Title>
          <Timeline.Body>
          <h1 className=''><span className=''>HTML, CSS, JAVASCRIPT, PHP, REACTJS + VITE + TYPESCRIPT</span></h1>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title className=''> Backend Development</Timeline.Title>
          <Timeline.Body>
            <h1 className=''><span className=''>PHP, MYSQL</span></h1>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title className=''>Version Control</Timeline.Title>
          <Timeline.Body>
           <h1 className=''><span className=''>Git, Github </span></h1>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title className=''>Tools and Frameworks</Timeline.Title>
          <Timeline.Body>
           <h1 className=''><span className=''> Vite, Typescript, Node.js, Express</span></h1>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title className=''>CCS Frameworks</Timeline.Title>
          <Timeline.Body>
           <h1 className=''><span className=''> Bootstrap, Tailwind</span></h1>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
            </div>
            <div className="skills-image">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/figma.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/tailwind.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/bootstrap.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/nodejs.png" alt="" />
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
            <img className="h-auto max-w-full rounded-lg" src="/public/php.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/vscode.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/js.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/ts.webp" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/Frameworks-for-React-JS.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/mui-react.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/antd.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/mysql.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/vite.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/public/flowbite-react.png" alt="" />
        </div>
    </div>
</div>

                
            </div>
        </div>
    </main>
  )
}

export default Skills