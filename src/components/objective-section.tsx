'use client';

import Parallax from './parallax';
import { motion } from 'framer-motion';

const ObjectiveSection: React.FC = () => {
  return (
    <Parallax offset={50}>
      <motion.div
        initial={{ x: -200, opacity: 0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        viewport={{ once: true }}
      >
        <div className='mx-5 flex h-fit max-w-5xl items-center justify-center overflow-hidden rounded-xl bg-midnight-200/60 px-5 py-5 font-bold shadow-xl sm:py-10'>
          <Parallax offset={25}>
            <p className='py-5 text-3xl text-green-101'>Objective</p>
            <p className='indent-8 font-sans font-normal text-slate-100'>
              “Software Developer, Experienced in designing, building, and
              maintaining web applications with Next.js and .NET entity
              framework. Skilled in web development and REST APIs. Adept
              knowledge of HTML, CSS, JavaScript, TypeScript, Next.js and
              Responsive design.”
            </p>
          </Parallax>
        </div>
      </motion.div>
    </Parallax>
  );
};
export default ObjectiveSection;
