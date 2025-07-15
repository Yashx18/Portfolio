import { IoIosLink } from "react-icons/io";
import { LuGithub } from "react-icons/lu";

const ProjectCard = ({ title, liveLink, img, description, githubLink }) => {
  return (
    <div className=" flex items-center justify-center  w-full  border border-[#828282] px-3 py-2 rounded-[10px] mb-2">
      {/* Left */}
      <div className="w-6/9 h-2/5 ">
        <img
          src={img}
          alt="Project Image"
          className="h-full w-full object-cover rounded-[8px]"
        />
      </div>
      {/* Right */}
      <div className="ml-2">
        {/* Heading Section */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">
              <a href={liveLink} target="_blank">
                {title}
              </a>
            </h3>
          </div>
          {/* links */}
          <div
            className="flex
          items-center justify-around w-1/10"
          >
            <a href={liveLink} target="_blank">
              <IoIosLink />
            </a>
            <a href={githubLink} target="_blank">
              <LuGithub />
            </a>
          </div>
        </div>
        {/* Description */}
        <div className="w-full">
          <p className="w-full">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
