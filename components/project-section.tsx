const Projects = [
  {
    id: "01",
    title: "ChinjiroO/portfolio",
    description:
      "Commodo et cupidatat excepteur minim ea dolor mollit anim elit Lorem nisi elit aliqua. Enim et irure incididunt exercitation adipisicing esse fugiat cillum laboris.",
    techStacks: ["Next.js", ""],
    github: "https://github.com/ChinjiroO/portfolio.git",
  },
  {
    id: "02",
    title: "ChinjiroO/news-app",
    description:
      "Commodo et cupidatat excepteur minim ea dolor mollit anim elit Lorem nisi elit aliqua. Enim et irure incididunt exercitation adipisicing esse fugiat cillum laboris.",
    techStacks: ["Flutter", "PostgreSQL"],
    github: "https://github.com/ChinjiroO",
  },
  {
    id: "03",
    title: "ChinjiroO/messaging-app",
    description:
      "Commodo et cupidatat excepteur minim ea dolor mollit anim elit Lorem nisi elit aliqua. Enim et irure incididunt exercitation adipisicing esse fugiat cillum laboris.",
    techStacks: ["Flutter", "PostgreSQL"],
    github: "https://github.com/ChinjiroO",
  },
  {
    id: "04",
    title: "ChinjiroO/messaging-app",
    description:
      "Commodo et cupidatat excepteur minim ea dolor mollit anim elit Lorem nisi elit aliqua. Enim et irure incididunt exercitation adipisicing esse fugiat cillum laboris.",
    techStacks: ["Flutter", "PostgreSQL"],
    github: "https://github.com/ChinjiroO",
  },
];

export default function ProjectSection() {
  return (
    <div className="flex flex-col w-full justify-center items-center font-bold max-w-5xl py-10 px-5">
      <div className="flex flex-col w-full pb-10">
        <p className="text-3xl pb-5">Projects</p>
        <p className="text-base font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget pulvinar
          ut at amet, sed curabitur pulvinar purus amet.
        </p>
      </div>
      <div className="flex flex-wrap w-full px-4 gap-4 font-sans">
        {/* card item */}
        {Projects.map((project) => (
          <div
            key={project.id}
            className=" w-full sm:w-72 bg-slate-50/5 rounded-md border border-gray-600 p-4"
          >
            <p className="line-clamp-1 font-medium text-blue-201">
              {project.title}
            </p>
            <p className="line-clamp-2 text-sm font-normal">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
