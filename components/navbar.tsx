import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Navbar: React.FC = ({ myRef }) => {
  const [open, setOpen] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const executeScroll = () => {
    scrollToRef(myRef);
  };

  useEffect(() => {
    function handleClickOutside(e: React.MouseEvent): void {
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
  function handleClick() {
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
            {["objective", "skills", "projects"].map((title, index) => (
              <div key={index} onClick={executeScroll}>
                <p className="hover:text-slate-100 cursor-pointer">{title}</p>
              </div>
            ))}
          </div>
          <div
            id="icon-list"
            className="flex flex-row gap-4 min-w-full md:min-w-0 justify-between"
          >
            <button
              className="flex items-center hover:text-slate-300 md:hidden "
              onClick={handleClick}
            >
              {!open ? (
                <HiMenu className="text-2xl fill-midnight-100 hover:fill-white transition-all duration-1000 hover:transition-all hover:duration-1000" />
              ) : (
                <RiCloseFill className="text-2xl fill-midnight-100 hover:fill-white transition-all duration-1000 hover:transition-all hover:duration-1000" />
              )}
            </button>
            {/* className="" */}
            <a href="https://github.com/ChinjiroO">
              <BsGithub className="text-2xl fill-midnight-100 hover:fill-white transition-all duration-1000 hover:transition-all hover:duration-1000" />
            </a>
          </div>
        </div>
      </nav>
      {open ? (
        <motion.div
          ref={elementRef}
          className="flex flex-col h-screen gap-4 md:hidden fixed w-full z-30 bg-midnight-300 p-4 pt-0 text-midnight-100 uppercase rounded-b-2xl shadow-xl"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        >
          <hr />
          {["objective", "skills", "projects"].map((title, index) => (
            <div key={index} id={title} onClick={() => setOpen(!open)}>
              <Link href={`#${title}`}>
                <a>
                  <p className="hover:text-slate-100 cursor-pointer">{title}</p>
                </a>
              </Link>
            </div>
          ))}
        </motion.div>
      ) : null}
    </div>
  );
};
export default Navbar;
