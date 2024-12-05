import "./Contact.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useState, ChangeEvent, FormEvent } from 'react';
import { db } from '../../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Button } from "flowbite-react";

AOS.init();

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      setSuccess("Your message has been sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      setError("There was an error sending your message. Please try again.");
      console.error("Error adding document: ", error);
    }
  };

  return (
    <section id="contact">
      <main className="dark:bg-gray-900">
        <div className="contact-title"  data-aos="fade-up"
            data-aos-duration="1000">
        <h1 className="mb-5 p-3 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl uppercase">
        Get in touch with me
            </h1>
        </div>
        <div className="contact-header">
          <div className="contact-content" 
            data-aos="fade-up"
            data-aos-duration="1000">
            <h3 className="text-gray-900 dark:text-white">
              I'm always excited to connect with new people and discuss
              potential opportunities or collaborations. Whether you have a
              project in mind, need help with something specific, or just want
              to say hi, feel free to reach out using my personal email ε(´｡•᎑•`)っ 💕 <span className="perosonal-email font-bold"><a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">villahermosafrancisco6@gmail.com</a></span>. I'll do my
              best to get back to you as soon as possible. (∩˃o˂∩)♡
            </h3>
          </div>
          <div className="contact-form"   data-aos="fade-up"
            data-aos-duration="1000">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mb-4 p-2 border rounded"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mb-4 p-2 border rounded"
              />
              <Button type="submit" className="submit-btn text-white p-2 rounded">
                Send Message
              </Button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              {success && <p className="text-green-500 mt-2">{success}</p>}
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
