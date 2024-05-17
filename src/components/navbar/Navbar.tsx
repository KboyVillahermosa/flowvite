
"use client";

import { Button, Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";

export function Component() {
  return (
    <body className="dark:bg-gray-800">
    <Navbar fluid rounded>
      <Navbar.Brand href="">
        <img src="/public/kboy.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">KBoY</span>
      </Navbar.Brand>
      <div className="dark-mode flex md:order-2">
      <DarkThemeToggle className="mr-3"/>
      <Button>Get started</Button>
      <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
        <Navbar.Link href="/test">Pricing</Navbar.Link>
        <Navbar.Link href="#project">Project</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </body>
  );
}
