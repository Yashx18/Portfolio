import { FiHome } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuNotebook } from "react-icons/lu";
import { IoSunnyOutline } from "react-icons/io5";
import { RxMoon } from "react-icons/rx";
import { FaTelegram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2  px-4 py-3 rounded-full backdrop-blur-md bg-[#111213] shadow-md border border-white/8 flex items-center justify-around ">
      <div className="px-2 m-1 flex items-center justify-center">
        <a href="#home">
          <FiHome className="h-[20px] w-[20px]" />
        </a>
      </div>
      <div className="px-2 m-1 flex items-center justify-center">
        <LuNotebook className="h-[20px] w-[20px]" />
      </div>
      <div className="px-2 m-1 flex items-center justify-center">
        <a href="https://github.com/Yashx18">
          <FaGithub className="h-[20px] w-[20px]" />
        </a>
      </div>
      <div className="px-2 m-1 flex items-center justify-center">
        <FaTelegram className="h-[20px] w-[20px]" />
      </div>
      <div className="px-2 m-1 flex items-center justify-center">
        <FaXTwitter className="h-[20px] w-[20px]" />
      </div>
      <div className="px-2 m-1 flex items-center justify-center">
        <MdOutlineEmail className="h-[20px] w-[20px]" />
      </div>

      <div className="px-2 m-1 flex items-center justify-center">
        <RxMoon className="h-[20px] w-[20px]" />
      </div>
    </div>
  );
};

export default Navbar;
