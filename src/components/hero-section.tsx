'use client';

import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Parallax from './parallax';

const HeroSection: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, -2]);

  return (
    <div className='flex h-screen max-h-[1500px] w-full max-w-5xl flex-col items-center justify-center overflow-x-hidden px-5 font-bold'>
      <Parallax offset={50}>
        <motion.div style={{ scale }}>
          <div className='text-md flex font-light sm:text-xl'>
            <p className='mr-2 animate-bounce text-red-101'>Hi!</p>
            <p className=''>Welcome to my portfolio website</p>
          </div>
          <div className='text-3xl sm:text-6xl'>
            <p className=''>My name’s</p>
            <p className='bg-gradient-to-br from-blue-101 to-green-101 bg-clip-text text-transparent'>
              Techin Seoikrathok.
            </p>
          </div>
          <div className='mt-5 flex w-full items-center justify-center sm:justify-start'>
            <a href='/assets/docs/CV.pdf'>
              <button className='text-md flex w-full items-center justify-center rounded-md border border-green-101 from-blue-101 to-green-101 px-4 py-2 text-green-101 shadow-md transition-all hover:border-transparent hover:bg-gradient-to-tr hover:text-white hover:transition-all sm:w-auto sm:text-2xl'>
                RESUME
                <p className='ml-1 text-sm font-thin'>(pdf)</p>
              </button>
            </a>
          </div>
        </motion.div>
      </Parallax>
    </div>
  );
};
export default HeroSection;
