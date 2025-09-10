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
    <div className=" sm:flex max-xs:flex-col items-start justify-center  w-full  border border-[#828282] px-2 py-2 rounded-[10px] mb-2">
      {/* Left section */}
      <div className=" w-full sm:max-w-[197px] min-w-[197px] ">
        <img
          src={img}
          alt="Project Image"
          className="w-full h-full xs:max-h-auto max-h-[150px] object-cover rounded-[8px]"
        />
      </div>
      {/* Right section */}
      <div className="sm:ml-2 flex flex-col justify-start h-full">
        {/* Heading Section */}
        <div className="flex items-center justify-between xs:py-0 py-2">
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
          items-center justify-between xs:w-1/10 sm:w-1/10 w-1/10"
          >
            <a href={liveLink} target="_blank">
              {liveLink ? <IoIosLink /> : null}
            </a>
            <a href={githubLink} target="_blank">
              <LuGithub />
            </a>
          </div>
        </div>
        {/* Description */}
        <div className="w-full">
          <p className="w-full font-roboto text-[#a5a5a5]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
