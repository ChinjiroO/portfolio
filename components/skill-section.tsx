import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

import Skills from "../lib/data/skills";
import Parallax from "./parallax";

const SkillSection: FC = () => {
  return (
    <div className="flex flex-col w-screen items-center font-bold max-w-5xl px-5 my-5 text-slate-100">
      <Parallax offset={50}>
        <p className="text-3xl text-purple-101">Skills</p>

        <div className="w-full px-10 pb-20 pt-10 overflow-hidden">
          <p className="pb-3 text-blue-101">{`"Langauges"`}</p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <ul className="flex gap-4 flex-wrap mb-5">
              {Skills.map((skill, index) =>
                skill.group === "lang" ? (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center gap-3"
                  >
                    <li className="w-16 h-16">
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
          <p className="py-3 text-blue-101">{`"Frameworks"`}</p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <ul className="flex gap-4 flex-wrap mb-5">
              {Skills.map((skill, index) =>
                skill.group === "fw" ? (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center gap-3"
                  >
                    <li className="w-16 h-16">
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
          <p className="py-3 text-blue-101">{`"Databases"`}</p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <ul className="flex gap-4 flex-wrap mb-5">
              {Skills.map((skill, index) =>
                skill.group === "db" ? (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center gap-3"
                  >
                    <li className="w-16 h-16">
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
          <p className="py-3 text-blue-101">{`"Other"`}</p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <ul className="flex gap-4 flex-wrap">
              {Skills.map((skill, index) =>
                skill.group === "etc" ? (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center gap-3"
                  >
                    <li className="w-16 h-16">
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
  );
};
export default SkillSection;
