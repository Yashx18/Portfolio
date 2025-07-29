import { IoIosLink } from "react-icons/io";
import { LuGithub } from "react-icons/lu";

const ProjectCard = ({ title, liveLink, img, description, githubLink }) => {
  return (
    <div className=" sm:flex max-xs:flex-col items-center justify-center  w-full  border border-[#828282] px-2 py-2 rounded-[10px] mb-2">
      <div className="w-full h-1/2">
        <img
          src={img}
          alt="Project Image"
          className="w-full h-full xs:max-h-auto max-h-[150px] object-cover rounded-[8px]"
        />
      </div>
      <div className="sm:ml-2">
        {/* Heading Section */}
        <div className="flex items-center justify-between xs:py-0 py-2">
          <div>
            <h3 className="text-xl font-bold">
              <a href={liveLink} target="_blank" className="font-poppins">
                {title}
              </a>
            </h3>
          </div>
          {/* links */}
          <div
            className="flex
          items-center justify-around xs:w-1/10 w-2/10"
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
          <p className="w-full font-roboto text-[#d4d4d4]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
