import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Carousel } from "flowbite-react";
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
   <>
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
   
   
   </>
  )
}

export default Contact