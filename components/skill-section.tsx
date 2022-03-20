import { motion } from "framer-motion";
import Image from "next/image";

const Skills = [
  {
    name: "html-5",
    src: "/assets/icons/logos_html-5.svg",
    group: "lang",
  },
  { name: "css", src: "/assets/icons/logos_css-3.svg", group: "lang" },
  { name: "dart", src: "/assets/icons/logos_dart.svg", group: "lang" },
  {
    name: "javascript",
    src: "/assets/icons/logos_javascript.svg",
    group: "lang",
  },
  {
    name: "typescript",
    src: "/assets/icons/logos_typescript.svg",
    group: "lang",
  },
  { name: "react", src: "/assets/icons/logos_react.svg", group: "fw" },
  {
    name: "xamarin",
    src: "/assets/icons/logos_xamarin.svg",
    group: "fw",
  },
  {
    name: "flutter",
    src: "/assets/icons/logos_flutter.svg",
    group: "fw",
  },
  {
    name: "next.js",
    src: "/assets/icons/logos_nextjs.svg",
    group: "fw",
  },
  {
    name: "figma",
    src: "/assets/icons/logos_figma.svg",
    group: "etc",
  },
  {
    name: "postman",
    src: "/assets/icons/logos_postman.svg",
    group: "etc",
  },
  {
    name: "tailwind",
    src: "/assets/icons/logos_tailwindcss.svg",
    group: "etc",
  },
  {
    name: "mysql",
    src: "/assets/icons/logos_mysql.svg",
    group: "db",
  },
  {
    name: "postgresql",
    src: "/assets/icons/logos_postgresql.svg",
    group: "db",
  },
  {
    name: "bootstrap",
    src: "/assets/icons/logos_bootstrap.svg",
    group: "etc",
  },
  {
    name: "mongodb",
    src: "/assets/icons/logos_mongodb.svg",
    group: "db",
  },
  {
    name: "c-sharp",
    src: "/assets/icons/logos_c-sharp.svg",
    group: "lang",
  },
  {
    name: "mui",
    src: "/assets/icons/logos_mui.svg",
    group: "etc",
  },
  {
    name: "nodejs",
    src: "/assets/icons/logos_nodejs.svg",
    group: "fw",
  },
  {
    name: "vs-code",
    src: "/assets/icons/logos_vs-code.svg",
    group: "etc",
  },
  {
    name: "github",
    src: "/assets/icons/logos_github.svg",
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
      </div>
      <div className="w-full px-10">
        <p className="pb-3">● Langauges</p>
        <ul className="flex gap-4 flex-wrap">
          {Skills.map((skill, index) =>
            skill.group === "lang" ? (
              <div key={index}>
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
        <p className="py-3">● Frameworks</p>
        <ul className="flex gap-4 flex-wrap">
          {Skills.map((skill, index) =>
            skill.group === "fw" ? (
              <div key={index}>
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
        <p className="py-3">● Databases</p>
        <ul className="flex gap-4 flex-wrap">
          {Skills.map((skill, index) =>
            skill.group === "db" ? (
              <div key={index}>
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
        <p className="py-3">● Other</p>
        <ul className="flex gap-4 flex-wrap">
          {Skills.map((skill, index) =>
            skill.group === "etc" ? (
              <div key={index}>
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
