import pfp from "../assets/pfp.jpg";
import { GoDotFill } from "react-icons/go";

const Heading = () => {
  return (
    <section className="flex  items-start justify-between ">
      <div className="w-auto mb-6">
        <h1 className="flex flex-col items-start justify-between font-bold text-4xl h-auto w-auto">
          <span className="mb-2">Hey, I'm Yash.</span>
          <span className="mb-3">Developer & Designer</span>
        </h1>
        <div className="flex items-center">
          <div className="border  border-[#636c79] px-3 py-1 flex items-center rounded-md hover:bg-[#101215]">
            <a href="#contact">
              <span>Contact</span>
            </a>
          </div>
          <div className="border  border-[#636c79] px-2 py-1 flex items-center rounded-md ml-2 ">
            <span>
              <GoDotFill />
            </span>
            <span>Available</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/5 border rounded-full">
        <img
          src={pfp}
          alt="Profile Picture"
          className="w-auto h-auto rounded-full"
        />
      </div>
    </section>
  );
};

export default Heading;
