import React, { FC } from "react";
import type { Projects } from "../lib/types";

const ProjectCard: FC<Projects> = ({
	github,
	title,
	description,
	techStacks,
}) => {
	return (
		<div className="flex flex-col justify-between snap-always snap-center min-w-[300px] sm:min-w-[500px] h-72 overflow-hidden rounded-md bg-slate-50/5 border border-gray-600 pt-4 m-auto">
			<div>
				<div className="flex items-center gap-2 mb-2 px-4">
					<a
						href={github}
						className="line-clamp-1 font-medium text-blue-201 hover:underline decoration-2"
					>
						{title}
					</a>
				</div>
				<p className="line-clamp-3 text-sm font-normal px-4 mb-2">
					{description}
				</p>
			</div>
			<div className="flex bg-midnight-200 w-full gap-2 px-4 py-2">
				{techStacks?.map((ts, i) => (
					<div key={i} className="bg-blue-201 rounded-full p-2">
						<p className="text-xs text-white">{ts}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default ProjectCard;
