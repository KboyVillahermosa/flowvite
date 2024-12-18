
"use client";

import { Footer } from "flowbite-react";
import {  BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import './Footer.css'


export function Component() {
  return (
   <>
   <main className="dark:bg-gray-900">
   <div className="footer-header">
    <div className="footer-content">
    <Footer className="footer bg-white dark:bg-gray-900">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href=""
              src="/kboy.png"
              alt="Flowbite Logo"
              name="KBoY"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://drive.google.com/file/d/1jxEo3wnA-uzUbbxIwmbjoDEPAF-WWjFw/view?usp=sharing">Resume</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow me" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/KboyVillahermosa?tab=overview&from=2024-04-01&to=2024-04-30">Github</Footer.Link>
                <Footer.Link href="https://web.facebook.com/profile.php?id=100086321577653">Facebook</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div className="div"></div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className="facebook text-green-500 hover:text-green-500" href="https://web.facebook.com/profile.php?id=100086321577653" target="blank_" icon={BsFacebook} />
            <Footer.Icon className="insta text-green-500 hover:text-green-500" href="https://www.instagram.com/villahermosakboy?igsh=MWJ0eHZnNTduZjVidA==" icon={BsInstagram} />
           <a href="https://github.com/KboyVillahermosa?tab=overview&from=2024-04-01&to=2024-04-30" className="github text-grren-500 hover:text-green-500 text-green-500" target="blank_"><Footer.Icon href=""icon={BsGithub} /></a> 
          </div>
        </div>
      </div>
    </Footer>

    </div>
   </div>
   </main>
   </>
  );
}
