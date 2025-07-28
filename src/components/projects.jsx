import ProjectCard from "./projectCard";
import projectImg from "../assets/projectImg.PNG";
const Projects = () => {
  return (
    <section className="flex  items-start justify-between animate-slide-in-blur-up translate-y-5 opacity-0 delay-500">
      <div className=" flex flex-col items-start w-auto mb-6 ">
        <h2 className="text-xl font-bold mb-2 font-poppins">Projects</h2>
        <div className="flex flex-col items-center justify-between">
          <ProjectCard
            title={"bimla"}
            liveLink={"https://bimal-murex.vercel.app/"}
            img={projectImg}
            githubLink={"https://github.com/Yashx18/bimal"}
            description={
              "This is a humorous, satirical single-page web project inspired by classic Indian tobacco ad parodies. Purpose behind to make this is just for fun, meme culture tribute, and frontend design experimentation."
            }
          />
          <p className="text-lg font-roboto mb-2">
            More Projects adding soon !!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
