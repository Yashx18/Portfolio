import newPfp from '../assets/NewPFP.JPG';

const Heading = () => {
  return (
    <section className="animate-slide-in-blur-up mb-2 flex w-full max-w-[663px] translate-y-5 items-start justify-between opacity-0 delay-500">
      <div className="mb-2 w-auto">
        <h1 className="flex h-auto w-auto flex-col items-start justify-between">
          <span className="font-poppins mb-1 text-2xl font-semibold md:text-5xl md:font-medium">
            Hey, I'm Yash.
          </span>
          <span className="mb-3 text-xl font-medium md:text-3xl md:font-medium">
            <span className="font-instrument italic">Web Developer</span>
            <span className="font-poppins font-normal"> & </span>
            <span className="font-instrument italic">Designer</span>
          </span>
        </h1>
        <div className="flex items-center">
          <div className="flex items-center rounded-md border border-[#636c79] px-3 py-1 hover:bg-[#101215]">
            <a href="#contact">
              <span>Contact</span>
            </a>
          </div>
          <div className="ml-2 flex items-center rounded-md border border-[#4ade80] px-2 py-1 text-[#4ade80]">
            <span className="animate-pulse rounded-full bg-[#4ade80] px-1 py-1"></span>
            <span className="ml-2">Open to work</span>
          </div>
        </div>
      </div>
      <div className="flex w-1/5 items-center justify-center rounded-full border border-[#4d4d4d]">
        <img src={newPfp} alt="Profile Picture" className="h-auto w-auto rounded-full" />
      </div>
    </section>
  );
};

export default Heading;
