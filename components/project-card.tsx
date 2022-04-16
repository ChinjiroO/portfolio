import React, { FC } from "react";
import type { Projects } from "../lib/types";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard: FC<Projects> = ({
  github,
  title,
  description,
  techStacks,
  url,
}) => {
  return (
    <div className="flex flex-col min-w-[250px] w-full overflow-hidden rounded-md bg-slate-50/5 border border-gray-600 p-4 gap-3">
      {/* Header */}
      <div className="flex justify-between items-center gap-4">
        {/* Title */}
        <p className="font-semibold text-lg text-gray-200">{title}</p>
        {/* Icons */}
        <div className="flex gap-4">
          <a href={github}>
            <FiGithub className="text-xl text-gray-200 hover:text-green-101" />
          </a>
          {url ? (
            <a href={github}>
              <FiExternalLink className="text-xl text-gray-200 hover:text-green-101" />
            </a>
          ) : null}
        </div>
      </div>
      {/* Description */}
      <div className="flex flex-col gap-2">
        <p className="font-normal text-base text-white/40">Description</p>
        <p className="text-sm text-gray-200 font-normal mb-2">{description}</p>
      </div>
      {/* Tags */}
      <p className="font-normal text-base text-white/40">Tags</p>
      <div className="flex flex-wrap w-full gap-2">
        {techStacks?.map((ts, i) => (
          <div key={i} className="border border-green-101 rounded-full p-2">
            <p className="text-xs text-green-101">{ts}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectCard;
