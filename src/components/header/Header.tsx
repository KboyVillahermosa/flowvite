import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import './Header.css'


const Header = () => {
  return (
    <>
    <section id='home'>
    <main className='main dark:bg-gray-900 main'>
    <div className="header">
        <div className="header-content"  data-aos="fade-up"
            data-aos-duration="1000">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hi, I'm <span className='dif'>KBOY</span> a passionate and experienced <span className='dif'>React frontend developer</span></h1>
        <p className='text-gray-600 dark:text-gray-300'> With a strong foundation in frontend development, I create dynamic, responsive, and user-friendly websites</p>
        </div>
    </div>
    
    </main>
    </section>
    </>
  )
}

export default Header