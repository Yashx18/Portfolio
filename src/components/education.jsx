import amityLogo from "../assets/amityLogo.png"
const Education = () => {
  return (
    <section className="flex  items-start justify-between">
      <div className=" flex flex-col items-start w-full mb-4">
        <h2 className="text-xl font-bold mb-2">Education</h2>
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
            <div className="flex flex-col items-start justify-between ml-4">
              <h4 className="font-semibold text-xl">Amity University</h4>
              <p className="mt-1 ">BCA in Data Analytics.</p>
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
