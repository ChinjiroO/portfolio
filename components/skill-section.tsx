import Image from "next/image";
import { FC } from "react";

import Skills from "../lib/data/skills";

const SkillSection: FC = () => {
  return (
    <div className="flex flex-col w-screen items-center font-bold max-w-5xl px-5 mb-5 pt-20">
      <div className="w-full pb-5">
        <p className="text-3xl py-5">Skills</p>
      </div>
      <div className="w-full px-10">
        <p className="pb-3">● Langauges</p>
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
        <p className="py-3">● Frameworks</p>
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
        <p className="py-3">● Databases</p>
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
        <p className="py-3">● Other</p>
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
      </div>
    </div>
  );
};
export default SkillSection;
