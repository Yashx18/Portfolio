import newPfp from "../assets/NewPFP.JPG";

const Heading = () => {
  return (
    <section className="flex w-full max-w-[663px] items-start justify-between animate-slide-in-blur-up translate-y-5 opacity-0 delay-500 mb-2">
      <div className="w-auto  mb-2">
        <h1 className="flex flex-col items-start justify-between h-auto w-auto">
          <span className="mb-1 font-poppins md:font-medium md:text-5xl font-semibold text-2xl">
            Hey, I'm Yash.
          </span>
          <span className="mb-3  md:font-medium md:text-3xl font-medium text-xl">
            <span className="font-instrument italic">Web Developer</span>
            <span className="font-poppins font-normal"> & </span>
            <span className="font-instrument italic">Designer</span>
          </span>
        </h1>
        <div className="flex items-center">
          <div className="border  border-[#636c79] px-3 py-1 flex items-center rounded-md hover:bg-[#101215]">
            <a href="#contact">
              <span>Contact</span>
            </a>
          </div>
          <div className="border  border-[#4ade80] px-2 py-1 flex items-center rounded-md ml-2 text-[#4ade80]">
            <span className="px-1 py-1 bg-[#4ade80] rounded-full animate-pulse"></span>
            <span className="ml-2">Available</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/5 border border-[#4d4d4d] rounded-full">
        <img
          src={newPfp}
          alt="Profile Picture"
          className="w-auto h-auto rounded-full"
        />
      </div>
    </section>
  );
};

export default Heading;
