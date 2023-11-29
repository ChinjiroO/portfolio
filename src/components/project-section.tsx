'use client';

import Parallax from './parallax';
import ProjectCard from './project-card';
import { Projects } from '../lib/data/projects';

const ProjectSection = () => {
  return (
    <div className='my-5 w-full max-w-5xl px-5 font-bold'>
      <div className='flex w-full justify-center pb-10'>
        <Parallax offset={50}>
          <p className='text-3xl text-green-101'>Projects</p>
        </Parallax>
      </div>
      <Parallax offset={50}>
        {/* <div className="flex snap-x snap-mandatory sm:sb scroll-smooth overflow-x-auto font-sans gap-10 pl-60 pb-10"> */}
        <div className='grid gap-10 overflow-hidden font-sans sm:place-content-center md:grid-cols-2 lg:grid-cols-3'>
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              github={project.github}
              title={project.title}
              description={project.description}
              techStacks={project.techStacks}
              url={project.url}
            />
          ))}
        </div>
      </Parallax>
    </div>
  );
};
export default ProjectSection;
