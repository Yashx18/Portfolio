import amityLogo from "../assets/amityLogo.png"
const Education = () => {
  return (
    <section className="flex w-full max-w-[663px] items-start justify-between animate-slide-in-blur-up translate-y-5 opacity-0 delay-500">
      <div className=" flex flex-col items-start w-full mb-6">
        <h2 className="text-xl font-bold mb-2 font-poppins">Education</h2>
        <div className="flex items-center justify-between w-full mb-2">
          {/* Right Section */}
          <div className="flex items-center justify-between ">
            {/* Image */}
            <div className="w-15 flex items-center justify-center border rounded-full">
              <img
                src={amityLogo}
                alt="Logo of University"
                className="object-cover w-full"
              />
            </div>
            {/* Info */}
            <div className="flex flex-col items-start justify-between sm:ml-4 ml-2">
              <h4 className="sm:font- sm:text-xl text-lg font-medium font-roboto">
                Amity University
              </h4>
              <p className="mt-1 sm:text-sm text-xs font-roboto sm:font-medium font-light text-[#c9c9c9]">
                BCA in Data Analytics.
              </p>
            </div>
          </div>
          {/* Time Period */}
          <div className="text-[18px] text-[#a0a0a0]">(2023-2026)</div>
        </div>
      </div>
    </section>
  );
};

export default Education;
