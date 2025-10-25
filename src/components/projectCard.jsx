import { IoIosLink } from 'react-icons/io';
import { LuGithub } from 'react-icons/lu';

const ProjectCard = ({ title, liveLink, img, description, githubLink, status }) => {
  return (
    <div className="max-xs:flex-col mb-2 w-full items-start justify-center rounded-[16px] border border-neutral-600/40 px-2 py-2 sm:flex">
      {/* Left section */}
      <div className="w-full min-w-[170px] sm:max-w-[170px]">
        <a href={liveLink} target="_blank">
          <img
            src={img}
            alt="Project Image"
            className="h-full max-h-[126px] min-h-0 w-full min-w-0 rounded-[8px] border border-neutral-500/40 object-cover object-center"
            style={{ aspectRatio: '16/9', display: 'block' }}
          />
        </a>
      </div>
      {/* Right section */}
      <div className="flex h-full flex-col justify-center sm:ml-2">
        {/* Heading Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <h3 className="mr-2 text-lg font-medium">
              <a href={liveLink} target="_blank" className="font-poppins">
                {title}
              </a>
            </h3>
            {/* Status */}
            <p className="rounded-sm border border-[#4ade80] px-2 text-xs text-[#4ade80]">
              {status}
            </p>
          </div>
          {/* links */}
          <div className="xs:w-auto flex w-auto items-center justify-between sm:w-auto">
            <a href={liveLink} target="_blank">
              {liveLink ? (
                <span className="flex items-center justify-center">
                  <span className="font-poppins mr-0.5 text-xs">Live</span>
                  <IoIosLink />
                </span>
              ) : null}
            </a>
            <a href={githubLink} target="_blank" className="ml-2 flex items-center justify-center">
              <span className="font-poppins mr-0.5 text-xs">Code</span>
              <LuGithub />
            </a>
          </div>
        </div>
        {/* Description */}
        <div className="mt-0.5 w-full">
          <p className="font-poppins w-full text-sm text-neutral-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
