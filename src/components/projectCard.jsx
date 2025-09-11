import { IoIosLink } from "react-icons/io";
import { LuGithub } from "react-icons/lu";

const ProjectCard = ({
  title,
  liveLink,
  img,
  description,
  githubLink,
  status,
}) => {
  return (
    <div className=" sm:flex max-xs:flex-col items-start justify-center  w-full  border border-[#828282] px-2 py-2 rounded-[16px] mb-2">
      {/* Left section */}
      <div className=" w-full sm:max-w-[170px] min-w-[170px] ">
        <a href={liveLink} target="_blank">
          <img
            src={img}
            alt="Project Image"
            className="w-full h-full xs:max-h-auto max-h-[126px] object-cover rounded-[8px]"
          />
        </a>
      </div>
      {/* Right section */}
      <div className="sm:ml-2 flex flex-col justify-center h-full">
        {/* Heading Section */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold mr-2">
              <a href={liveLink} target="_blank" className="font-poppins">
                {title}
              </a>
            </h3>
            {/* Status */}
            <p className="border rounded-sm px-2  text-[#929292] border-[#929292] text-xs">
              {status}
            </p>
          </div>
          {/* links */}
          <div
            className="flex
          items-center justify-between xs:w-auto sm:w-auto w-auto"
          >
            <a href={liveLink} target="_blank">
              {liveLink ? (
                <span className="flex items-center justify-center">
                  <span className="font-poppins text-xs mr-0.5">Live</span>
                  <IoIosLink />
                </span>
              ) : null}
            </a>
            <a
              href={githubLink}
              target="_blank"
              className="flex items-center justify-center ml-2"
            >
              <span className="font-poppins text-xs mr-0.5">Code</span>
              <LuGithub />
            </a>
          </div>
        </div>
        {/* Description */}
        <div className="w-full mt-0.5">
          <p className="w-full font-poppins text-sm text-[#a5a5a5]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
