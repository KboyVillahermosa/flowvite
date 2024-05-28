
"use client";

import { Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";


export function Component() {
  return (
    <body className="dark:bg-gray-800">
    <Navbar fluid rounded className="fixed z-10 w-full">
      <Navbar.Brand href="/">
        <img src="/kboy.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">KBoY</span>
      </Navbar.Brand>
      <div className="dark-mode flex md:order-2">
      <DarkThemeToggle className="mr-3"/>
      <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#home" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#about">About</Navbar.Link>
        <Navbar.Link href="#project">Project</Navbar.Link>
        <Navbar.Link href="#skills">Skills</Navbar.Link>
        <Navbar.Link href="#contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </body>
  );
}
