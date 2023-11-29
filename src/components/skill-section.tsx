'use client';

import Image from 'next/image';
import { FC } from 'react';
import { motion } from 'framer-motion';
import Skills from '../lib/data/skills';
import Parallax from './parallax';

const SkillSection: FC = () => {
  return (
    <Parallax offset={50}>
      <div className='my-5 flex w-screen max-w-5xl flex-col items-center px-5 font-bold text-white'>
        <Parallax offset={50}>
          <p className='text-3xl text-green-101'>Skills</p>
          <div className='my-7 h-1 w-1/4 rounded-full bg-green-101' />
          <div className='w-full overflow-hidden px-5'>
            <p className='w-fit bg-gradient-to-tr from-blue-101 to-green-101 bg-clip-text pb-3 text-transparent'>{`"Programming Langauges"`}</p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className='w-full rounded-lg bg-slate-50/5 p-5 sm:w-fit'
            >
              <ul className='flex flex-wrap justify-evenly gap-4'>
                {Skills.map((skill, index) =>
                  skill.group === 'lang' ? (
                    <div
                      key={index}
                      className='flex flex-col items-center justify-center gap-3'
                    >
                      <li className='h-14 w-14'>
                        <Image
                          src={skill.src}
                          alt={skill.name}
                          width={100}
                          height={100}
                          layout='responsive'
                        />
                      </li>
                      <p className='text-sm font-light'>{skill.name}</p>
                    </div>
                  ) : null,
                )}
              </ul>
            </motion.div>
            <p className='w-fit bg-gradient-to-tr from-blue-101 to-green-101 bg-clip-text py-3 text-transparent'>{`"Frameworks"`}</p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className='w-full rounded-lg bg-slate-50/5 p-5 sm:w-fit'
            >
              <ul className='flex flex-wrap justify-evenly gap-4'>
                {Skills.map((skill, index) =>
                  skill.group === 'fw' ? (
                    <div
                      key={index}
                      className='flex flex-col items-center justify-center gap-3'
                    >
                      <li className='h-14 w-14'>
                        <Image
                          src={skill.src}
                          alt={skill.name}
                          width={100}
                          height={100}
                          layout='responsive'
                        />
                      </li>
                      <p className='text-sm font-light'>{skill.name}</p>
                    </div>
                  ) : null,
                )}
              </ul>
            </motion.div>
            <p className='w-fit bg-gradient-to-tr from-blue-101 to-green-101 bg-clip-text py-3 text-transparent'>{`"Databases"`}</p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className='w-full rounded-lg bg-slate-50/5 p-5 sm:w-fit'
            >
              <ul className='flex flex-wrap justify-evenly gap-4'>
                {Skills.map((skill, index) =>
                  skill.group === 'db' ? (
                    <div
                      key={index}
                      className='flex flex-col items-center justify-center gap-3'
                    >
                      <li className='h-14 w-14'>
                        <Image
                          src={skill.src}
                          alt={skill.name}
                          width={100}
                          height={100}
                          layout='responsive'
                        />
                      </li>
                      <p className='text-sm font-light'>{skill.name}</p>
                    </div>
                  ) : null,
                )}
              </ul>
            </motion.div>
            <p className='w-fit bg-gradient-to-tr from-blue-101 to-green-101 bg-clip-text py-3 text-transparent'>{`"Other"`}</p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className='w-full rounded-lg bg-slate-50/5 p-5 sm:w-fit'
            >
              <ul className='flex flex-wrap justify-evenly gap-4'>
                {Skills.map((skill, index) =>
                  skill.group === 'etc' ? (
                    <div
                      key={index}
                      className='flex flex-col items-center justify-center gap-3'
                    >
                      <li className='h-14 w-14'>
                        <Image
                          src={skill.src}
                          alt={skill.name}
                          width={100}
                          height={100}
                          layout='responsive'
                        />
                      </li>
                      <p className='text-sm font-light'>{skill.name}</p>
                    </div>
                  ) : null,
                )}
              </ul>
            </motion.div>
          </div>
        </Parallax>
      </div>
    </Parallax>
  );
};
export default SkillSection;
