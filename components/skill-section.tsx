import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

import Skills from "../lib/data/skills";
import Parallax from "./parallax";

const SkillSection: FC = () => {
  return (
    <Parallax offset={50}>
      <div className="flex flex-col w-screen items-center font-bold max-w-5xl px-5 my-5 text-white">
        <Parallax offset={50}>
          <p className="text-3xl text-green-101">Skills</p>
          <div className="w-1/4 h-1 bg-green-101 rounded-full my-7" />
          <div className="w-full px-5 overflow-hidden">
            <p className="w-fit pb-3 text-transparent bg-clip-text bg-gradient-to-tr from-blue-101 to-green-101">{`"Programming Langauges"`}</p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="bg-slate-50/5 p-5 rounded-lg w-full sm:w-fit"
            >
              <ul className="flex gap-4 flex-wrap justify-evenly">
                {Skills.map((skill, index) =>
                  skill.group === "lang" ? (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center gap-3"
                    >
                      <li className="w-14 h-14">
                        <Image
                          src={skill.src}
                          alt={skill.name}
                          width={100}
                          height={100}
                          layout="responsive"
                        />
                      </li>
                      <p className="font-light text-sm">{skill.name}</p>
                    </div>
                  ) : null
                )}
              </ul>
            </motion.div>
            <p className="w-fit py-3 text-transparent bg-clip-text bg-gradient-to-tr from-blue-101 to-green-101">{`"Frameworks"`}</p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="bg-slate-50/5 p-5 rounded-lg w-full sm:w-fit"
            >
              <ul className="flex gap-4 flex-wrap justify-evenly">
                {Skills.map((skill, index) =>
                  skill.group === "fw" ? (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center gap-3"
                    >
                      <li className="w-14 h-14">
                        <Image
                          src={skill.src}
                          alt={skill.name}
                          width={100}
                          height={100}
                          layout="responsive"
                        />
                      </li>
                      <p className="font-light text-sm">{skill.name}</p>
                    </div>
                  ) : null
                )}
              </ul>
            </motion.div>
            <p className="w-fit py-3 text-transparent bg-clip-text bg-gradient-to-tr from-blue-101 to-green-101">{`"Databases"`}</p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="bg-slate-50/5 p-5 rounded-lg w-full sm:w-fit"
            >
              <ul className="flex gap-4 flex-wrap justify-evenly">
                {Skills.map((skill, index) =>
                  skill.group === "db" ? (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center gap-3"
                    >
                      <li className="w-14 h-14">
                        <Image
                          src={skill.src}
                          alt={skill.name}
                          width={100}
                          height={100}
                          layout="responsive"
                        />
                      </li>
                      <p className="font-light text-sm">{skill.name}</p>
                    </div>
                  ) : null
                )}
              </ul>
            </motion.div>
            <p className="w-fit py-3 text-transparent bg-clip-text bg-gradient-to-tr from-blue-101 to-green-101">{`"Other"`}</p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="bg-slate-50/5 p-5 rounded-lg w-full sm:w-fit"
            >
              <ul className="flex gap-4 flex-wrap justify-evenly">
                {Skills.map((skill, index) =>
                  skill.group === "etc" ? (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center gap-3"
                    >
                      <li className="w-14 h-14">
                        <Image
                          src={skill.src}
                          alt={skill.name}
                          width={100}
                          height={100}
                          layout="responsive"
                        />
                      </li>
                      <p className="font-light text-sm">{skill.name}</p>
                    </div>
                  ) : null
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
