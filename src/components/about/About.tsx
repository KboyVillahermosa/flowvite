
import './About.css'

const About = () => {
  return (
    <section id='about'>
    <main className="dark:bg-gray-800">
    <div className="about-header">
      <div className="about-content">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">About Me</h1>
        <p className='mt-4 text-gray-600 dark:text-gray-300'>Join me on this exhilarating journey of creativity and let my work inspire and motivate you. Together, let's redefine the boundaries of what is possible and celebrate the artistry that lies at the intersection of innovation and passion.
         Welcome to a world where each click is an invitation to explore, discover, and be inspired.</p>
      </div>
      <div className="about-image">
        <img src="/public/me.png" alt="" />
      </div>
    </div>
    </main>
    </section>
  )
}

export default About