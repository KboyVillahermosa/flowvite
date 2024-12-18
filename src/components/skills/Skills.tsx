
import './Skills.css'
import {  Timeline } from "flowbite-react";
import {  HiCalendar } from "react-icons/hi";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Skills = () => {
  return (
    <section id='skills'>
    <main className="dark:bg-gray-900">
        <div className="skills-title">
            <h1 className='text-4xl uppercase font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl'> Skills and Expertise</h1>
        </div>
        <div className="skills-header">
            <div className="skills-content" data-aos="fade-up"
            data-aos-duration="1000">
            <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time></Timeline.Time>
          <Timeline.Title className=''>Tech Stack I've Experienced</Timeline.Title>
          <Timeline.Body>
          <h1 className=''><span className=''>HTML, CSS, JAVASCRIPT, PHP, REACTJS, TYPESCRIPT, </span></h1>
          <h1 className=''><span className=''>REACT NATIVE, KOTLIN, JAVA, PYTHON, C#, C++, C </span></h1>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title className=''> Backend Development</Timeline.Title>
          <Timeline.Body>
            <h1 className=''><span className=''>MYSQL, Firebase</span></h1>
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
           <h1 className=''><span className=''> ReactJs, NextJs, VueJs</span></h1>
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
            <div className="skills-image" data-aos="fade-up"
            data-aos-duration="1000">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/figma.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/tailwind.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/bootstrap.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/nodejs.png" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
    <div>
            <img className="h-auto max-w-full rounded-lg" src="/css.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/android.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/php.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/vscode.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/js.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/ts.webp" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/Frameworks-for-React-JS.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/mui-react.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/antd.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/mysql.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/friebase.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/flowbite-react.png" alt="" />
        </div>
    </div>
    
</div>

                
            </div>
        </div>
    </main>
    </section>
  )
}

export default Skills