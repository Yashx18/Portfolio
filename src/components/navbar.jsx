import { FiHome } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuNotebook } from "react-icons/lu";
import { IoSunnyOutline } from "react-icons/io5";
import { RxMoon } from "react-icons/rx";
import { FaTelegram } from "react-icons/fa";

import { Dock, DockIcon } from "./magicui/dock";

const Navbar = () => {
  return (
    <Dock className="fixed bottom-5 left-1/2 -translate-x-1/2 backdrop-blur-md bg-[#111213] rounded-full shadow-md border border-white/8 px-2">
      <DockIcon>
        <a href="#home">
          <FiHome className="h-[18px] w-[18px]" />
        </a>
      </DockIcon>

      <DockIcon>
        <a href="">
          <LuNotebook className="h-[18px] w-[18px]" />
        </a>
      </DockIcon>

      <div
        data-orientation="vertical"
        role="none"
        class="shrink-0 bg-white/8 w-[1px] h-full"
        mousex="[object Object]"
        magnification="60"
        distance="140"
      ></div>

      <DockIcon>
        <a target="_blank" href="https://github.com/Yashx18">
          <FaGithub className="h-[18px] w-[18px]" />
        </a>
      </DockIcon>

      <DockIcon>
        <a target="_blank" href="https://t.me/kenx024">
          <FaTelegram className="h-[18px] w-[18px]" />
        </a>
      </DockIcon>

      <DockIcon>
        <a target="_blank" href="https://x.com/yashx024">
          <FaXTwitter className="h-[18px] w-[18px]" />
        </a>
      </DockIcon>

      <DockIcon>
        <a target="_blank" href="mailto:yashx024@gmail.com">
          <MdOutlineEmail className="h-[18px] w-[18px]" />
        </a>
      </DockIcon>

      <div
        data-orientation="vertical"
        role="none"
        class="shrink-0 bg-white/8 w-[1px] h-full"
        mousex="[object Object]"
        magnification="60"
        distance="140"
      ></div>

      <DockIcon>
        <RxMoon className="h-[18px] w-[18px]" />
      </DockIcon>
    </Dock>
  );
};

export default Navbar;
