import Lottie from 'lottie-react';
import animationData from './about-me.json'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const About = () => {
  return (
    <section id='about'>
    <main className="dark:bg-gray-900">
    <div className="about-header">
      <div className="about-content" 
            data-aos="fade-up"
            data-aos-duration="1000">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">About Me</h1>
        <p className='mt-4 text-gray-600 dark:text-gray-300'>Join me on this exhilarating journey of creativity and let my work inspire and motivate you. Together, let's redefine the boundaries of what is possible and celebrate the artistry that lies at the intersection of innovation and passion.
         Welcome to a world where each click is an invitation to explore, discover, and be inspired.</p>
      </div>
      <div className="about-image"    
            data-aos="fade-up"
            data-aos-duration="1000">
       <Lottie animationData={animationData} />
      </div>
    </div>
    </main>
    </section>
  )
}

export default About