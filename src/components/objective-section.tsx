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
              “ Graduated with a B.Ed. in Computer Education and seeking an
              Front-End Developer position. Skilled in web development, mobile
              application development (Hybrid apps), and Rest API. Adept
              knowledge of HTML, CSS, JavaScript, React.js, and Responsive
              design. ”
            </p>
          </Parallax>
        </div>
      </motion.div>
    </Parallax>
  );
};
export default ObjectiveSection;
