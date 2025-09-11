import ProjectCard from "./projectCard";
import projectImg from "../assets/projectImg.PNG";
import brainlyImg from "../assets/brainly.png";
const Projects = () => {
  return (
    <section className="flex w-full max-w-[663px] items-start justify-between animate-slide-in-blur-up translate-y-5 opacity-0 delay-500">
      <div className=" flex flex-col items-start w-auto mb-6 ">
        <h2 className="text-xl font-semibold mb-2 font-poppins">Projects</h2>
        <div className="flex flex-col items-center justify-between">
          <ProjectCard
            title={"Brainly"}
            liveLink={"https://brainlyui.vercel.app/"}
            img={brainlyImg}
            githubLink={"https://github.com/Yashx18/brainly"}
            description={
              "A smart, minimal app to save and organize links, tweets, messages, and notes in one place. Brainly helps you declutter your digital life and revisit important content anytime."
            }
            status={"Live"}
          />
          <ProjectCard
            title={"Bimla"}
            liveLink={"https://bimal-murex.vercel.app/"}
            img={projectImg}
            githubLink={"https://github.com/Yashx18/bimal"}
            description={
              "A humorous single-page web parody inspired by classic Indian tobacco ads—made for fun, meme culture, and frontend design experimentation."
            }
            status={"Live"}
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
