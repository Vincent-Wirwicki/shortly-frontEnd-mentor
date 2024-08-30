"use client";
import useOnResize from "@/hooks/useOnResize";
import { Button } from "../ui/button";

export default function Header() {
  const width = useOnResize();
  return (
    <header
      className="w-4/5 sm:w-11/12 absolute top-0 left-1/2 z-10 translate-x-[-50%] 
    py-5 sm:px-5 flex justify-between items-center "
    >
      {width <= 768 ? <MobileNav /> : <DesktopNav />}
    </header>
  );
}

function DesktopNav() {
  const links = ["Features", "Pricing", "Ressources"];
  return (
    <>
      <nav className="flex justify-between items-baseline w-1/2">
        <h1 className="text-xl font-extrabold ">Shortly</h1>
        {links.map((link,i) => (
          <a
            key={`${link}-${i}`}
            className="text-xs text-third-gray hover:text-third-dark-violet cursor-pointer"
          >
            {link}
          </a>
        ))}
      </nav>
      <nav className="w-fit flex justify-between gap-5">
        <Button variant={"ghost"}>Login</Button>
        <Button className="bg-primary-cyan hover:bg-primary-cyan-light rounded-3xl">
          Sign Up
        </Button>
      </nav>
    </>
  );
}

function MobileNav() {
  return (
    <>
      <nav className="flex justify-between items-baseline w-full">
        <h1 className="text-xl font-extrabold ">Shortly</h1>
        <p>_ _ _</p>
      </nav>
    </>
  );
}
