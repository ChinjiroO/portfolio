import { motion } from "framer-motion";
import Image from "next/image";

const Skills = [
  {
    id: 1,
    name: "html-5",
    src: "/assets/icons/logos_html-5.svg",
    group: "lang",
  },
  { id: 2, name: "css", src: "/assets/icons/logos_css-3.svg", group: "lang" },
  { id: 3, name: "dart", src: "/assets/icons/logos_dart.svg", group: "lang" },
  {
    id: 4,
    name: "javascript",
    src: "/assets/icons/logos_javascript.svg",
    group: "lang",
  },
  {
    id: 5,
    name: "typescript",
    src: "/assets/icons/logos_typescript.svg",
    group: "lang",
  },
  { id: 6, name: "react", src: "/assets/icons/logos_react.svg", group: "fw" },
  {
    id: 7,
    name: "flutter",
    src: "/assets/icons/logos_flutter.svg",
    group: "fw",
  },
  {
    id: 8,
    name: "next.js",
    src: "/assets/icons/logos_nextjs.svg",
    group: "fw",
  },
  {
    id: 9,
    name: "figma",
    src: "/assets/icons/logos_figma.svg",
    group: "etc",
  },
  {
    id: 10,
    name: "postman",
    src: "/assets/icons/logos_postman.svg",
    group: "etc",
  },
  {
    id: 11,
    name: "tailwind",
    src: "/assets/icons/logos_tailwindcss.svg",
    group: "etc",
  },
  {
    id: 12,
    name: "mysql",
    src: "/assets/icons/logos_postgresql.svg",
    group: "etc",
  },
];

export default function SkillSection() {
  return (
    <motion.div
      id="skills"
      className="flex flex-col w-full items-center font-bold max-w-5xl py-10 px-5"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="w-full pb-5">
        <p className="text-3xl py-5">Skills</p>
        <p className="text-base font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget pulvinar
          ut at amet, sed curabitur pulvinar purus amet.
        </p>
      </div>
      <div className="w-full">
        <p className="pb-3">Langauges</p>
        <ul className="flex gap-4 flex-wrap">
          {Skills.map((skill) =>
            skill.group === "lang" ? (
              <div key={skill.id}>
                <li className="w-16 h-16">
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </li>
              </div>
            ) : null
          )}
        </ul>
        <p className="py-3">Frameworks</p>
        <ul className="flex gap-4 flex-wrap">
          {Skills.map((skill) =>
            skill.group === "fw" ? (
              <div key={skill.id}>
                <li className="w-16 h-16">
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </li>
              </div>
            ) : null
          )}
        </ul>
        <p className="py-3">Other</p>
        <ul className="flex gap-4 flex-wrap">
          {Skills.map((skill) =>
            skill.group === "etc" ? (
              <div key={skill.id}>
                <li className="w-16 h-16">
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </li>
              </div>
            ) : null
          )}
        </ul>
      </div>
    </motion.div>
  );
}
