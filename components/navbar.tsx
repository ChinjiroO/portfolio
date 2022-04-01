import React, { useState, useEffect, useRef } from "react";
import { Link as LinkScroll } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const menu = ["objective", "skills", "projects", "contact"];
  const [open, setOpen] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      e.preventDefault();
      if (
        elementRef.current &&
        !elementRef.current.contains(e.target as HTMLElement)
      ) {
        setOpen(!open);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [elementRef, open]);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex md:justify-center sm:w-full border-gray-700 mx-auto py-4 bg-midnight-300 text-midnight-100">
        <div className="flex w-full md:justify-between md:min-w-[48rem] max-w-3xl gap-4 px-4">
          <div
            id="menu-list"
            className="hidden md:flex flex-row flex-grow gap-4 text-sm uppercase items-center text-center"
          >
            {menu.map((title, index) => (
              <div key={index}>
                <LinkScroll to={title}>
                  <p className="hover:text-slate-100 cursor-pointer">{title}</p>
                </LinkScroll>
              </div>
            ))}
          </div>
          <div
            id="icon-list"
            className="flex flex-row gap-4 min-w-full md:min-w-0 justify-between"
          >
            <button
              className="flex items-center hover:text-slate-300 md:hidden "
              onClick={handleOpen}
            >
              {!open ? (
                <HiMenu className="text-2xl fill-midnight-100 hover:fill-white transition-all duration-1000 hover:transition-all hover:duration-1000" />
              ) : (
                <RiCloseFill className="text-2xl fill-midnight-100 hover:fill-white transition-all duration-1000 hover:transition-all hover:duration-1000" />
              )}
            </button>
            <a href="https://github.com/ChinjiroO">
              <BsGithub className="text-2xl fill-midnight-100 hover:fill-white transition-all duration-1000 hover:transition-all hover:duration-1000" />
            </a>
          </div>
        </div>
      </nav>
      {open ? (
        <motion.div
          ref={elementRef}
          className="flex flex-col gap-4 md:hidden fixed w-full z-30 bg-midnight-300 p-4 pt-0 text-midnight-100 uppercase rounded-b-2xl shadow-xl"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        >
          <hr />
          {menu.map((title, index) => (
            <div key={index}>
              <LinkScroll to={title} onClick={handleOpen}>
                <p className="hover:text-slate-100 cursor-pointer">{title}</p>
              </LinkScroll>
            </div>
          ))}
        </motion.div>
      ) : null}
    </div>
  );
};
export default Navbar;
