'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';
import { HiMenu } from 'react-icons/hi';
import { BsGithub } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const menu = ['objective', 'skills', 'projects', 'contact'];
  const [open, setOpen] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div className='sticky top-0 z-50'>
      <nav className='mx-auto flex border-gray-700 bg-midnight-300 py-4 text-midnight-100 sm:w-full md:justify-center'>
        <div className='flex w-full max-w-3xl items-center gap-4 px-4 md:min-w-[48rem] md:justify-between'>
          <div
            id='menu-list'
            className='hidden flex-grow flex-row items-center gap-4 text-center text-sm uppercase md:flex'
          >
            <button className='h-9 w-9' onClick={() => scroll.scrollToTop()}>
              <Image
                src='/assets/icons/logos_original.svg'
                alt='original'
                width={100}
                height={100}
                layout='responsive'
              />
            </button>
            {menu.map((title, index) => (
              <div key={index}>
                <LinkScroll to={title} smooth={true}>
                  <p className='cursor-pointer bg-gradient-to-br from-blue-101 to-green-101 bg-clip-text font-medium hover:text-transparent'>
                    {title}
                  </p>
                </LinkScroll>
              </div>
            ))}
          </div>
          <div
            id='icon-list'
            className='flex min-w-full justify-between md:min-w-0'
          >
            <div className='flex'>
              <button
                className='mr-3 h-9 w-9 md:hidden'
                onClick={() => scroll.scrollToTop()}
              >
                <Image
                  src='/assets/icons/logos_original.svg'
                  alt='original'
                  width={100}
                  height={100}
                  layout='responsive'
                />
              </button>
              <button
                className='flex items-center hover:text-slate-300 md:hidden '
                onClick={handleOpen}
              >
                {!open ? (
                  <HiMenu className='fill-midnight-100 text-2xl transition-all duration-1000 hover:fill-white hover:transition-all hover:duration-1000' />
                ) : (
                  <RiCloseFill className='fill-midnight-100 text-2xl transition-all duration-1000 hover:fill-white hover:transition-all hover:duration-1000' />
                )}
              </button>
            </div>
            <a
              className='flex items-center justify-start'
              href='https://github.com/ChinjiroO'
            >
              <BsGithub className='fill-midnight-100 text-2xl transition-all duration-1000 hover:fill-white hover:transition-all hover:duration-1000' />
            </a>
          </div>
        </div>
      </nav>
      {open ? (
        <motion.div
          ref={elementRef}
          className='fixed z-30 flex w-full flex-col gap-4 rounded-b-2xl bg-midnight-300 p-4 pt-0 uppercase text-midnight-100 shadow-xl md:hidden'
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        >
          <hr />
          {menu.map((title, index) => (
            <div key={index}>
              <LinkScroll to={title} onClick={handleOpen} smooth={true}>
                <p className='cursor-pointer bg-gradient-to-br from-blue-101 to-green-101 bg-clip-text font-medium hover:text-transparent'>
                  {title}
                </p>
              </LinkScroll>
            </div>
          ))}
        </motion.div>
      ) : null}
    </div>
  );
};
export default Navbar;
