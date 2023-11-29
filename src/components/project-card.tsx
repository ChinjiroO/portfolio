import React, { FC } from 'react';
import type { Projects } from '../lib/types';
import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard: FC<Projects> = ({
  github,
  title,
  description,
  techStacks,
  url,
}) => {
  return (
    <div className='flex w-full min-w-[250px] flex-col gap-3 overflow-hidden rounded-md border border-gray-600 bg-slate-50/5 p-4'>
      {/* Header */}
      <div className='flex items-center justify-between gap-4'>
        {/* Title */}
        <p className='text-lg font-semibold text-gray-200'>{title}</p>
        {/* Icons */}
        <div className='flex gap-4'>
          <a href={github}>
            <FiGithub className='text-xl text-gray-200 hover:text-green-101' />
          </a>
          {url ? (
            <a href={url}>
              <FiExternalLink className='text-xl text-gray-200 hover:text-green-101' />
            </a>
          ) : null}
        </div>
      </div>
      {/* Description */}
      <div className='flex flex-col gap-2'>
        <p className='text-base font-normal text-white/40'>Description</p>
        <p className='mb-2 text-sm font-normal text-gray-200'>{description}</p>
      </div>
      {/* Tags */}
      <p className='text-base font-normal text-white/40'>Tags</p>
      <div className='flex w-full flex-wrap gap-2'>
        {techStacks?.map((ts, i) => (
          <div key={i} className='rounded-full border border-green-101 p-2'>
            <p className='text-xs text-green-101'>{ts}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectCard;
