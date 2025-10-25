import ProjectCard from './projectCard';
import projectImg from '../assets/projectImg.PNG';
import brainlyImg from '../assets/brainly.png';
import cobaltImg from '../assets/cobaltImg.jpeg';
const Projects = () => {
  return (
    <section className="animate-slide-in-blur-up flex w-full max-w-[663px] translate-y-5 items-start justify-between opacity-0 delay-500">
      <div className="mb-6 flex w-auto flex-col items-start">
        <h2 className="font-poppins mb-2 text-xl font-semibold">Projects</h2>
        <div className="flex flex-col items-center justify-between">
          <ProjectCard
            title={'Cobalt'}
            liveLink={'https://cobalt-lp.vercel.app/'}
            img={cobaltImg}
            githubLink={'https://github.com/Yashx18/CobaltLP'}
            description={
              'A minimal app to manage finances with clarity. Cobalt simplifies business tracking and puts smart finance tools at your fingertips—no spreadsheets, just control.'
            }
            status={'Live'}
          />
          <ProjectCard
            title={'Brainly'}
            liveLink={'https://brainlyui.vercel.app/'}
            img={brainlyImg}
            githubLink={'https://github.com/Yashx18/brainly'}
            description={
              'A smart, minimal app to save and organize links, tweets, messages, and notes in one place. Brainly helps you declutter your digital life and revisit important content anytime.'
            }
            status={'Live'}
          />
          <ProjectCard
            title={'Bimla'}
            liveLink={'https://bimal-murex.vercel.app/'}
            img={projectImg}
            githubLink={'https://github.com/Yashx18/bimal'}
            description={
              'A humorous single-page web parody inspired by classic Indian tobacco ads—made for fun, meme culture, and frontend design experimentation.'
            }
            status={'Live'}
          />
          <p className="font-roboto mb-2 text-lg">More Projects adding soon !!</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
