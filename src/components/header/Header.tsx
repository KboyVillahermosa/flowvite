
import './Header.css'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Carousel } from "flowbite-react";
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";

const Header = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <body className='dark:bg-gray-800'>
    <div className="header">
        <div className="header-content">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Build modern web applications with <span className='po'>Flowbite React</span></h1>
        <p className='text-gray-600 dark:text-gray-300'>Flowbite React is an open-source UI component library built on top of Tailwind CSS with React components and based on the Flowbite Design System.</p>
        </div>
        <div className="header-image">
            <img src="/public/gallery-dark.webp" alt="" />
        </div>
    </div>
    <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel leftControl={<span><FaAngleLeft className='text-white text-3xl rounded backdrop:blur-lg'/></span>} rightControl={<span><FaAngleRight className='text-white text-3xl rounded bg-black-500'/></span>}>
        <img src="/public/image1.avif" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </body>
    </>
  )
}

export default Header