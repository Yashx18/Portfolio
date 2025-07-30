const Footer = () => {
  return (
    <section className="flex w-full max-w-[663px] items-center justify-between  px-10 py-20 animate-slide-in-blur-up translate-y-5 opacity-0 delay-500">
      <div className=" flex flex-col items-center w-full ">
        <div className=" px-[12px] py-[4px] bg-white rounded-2xl mb-5"></div>
        <p className="text-xl text-[#9c9c9c] font-poppins">
          say hello on
          <a
            href="https://x.com/TheKen__"
            target="_blank"
            className="text-[#3b82f6] hover:underline w-fit ml-1.5 font-poppins"
          >
            𝕏
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
