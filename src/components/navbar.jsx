import { FiHome } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuNotebook } from "react-icons/lu";
import { IoSunnyOutline } from "react-icons/io5";
import { RxMoon } from "react-icons/rx";
import { FaTelegram } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

import { Dock, DockIcon } from "./magicui/dock";

const Navbar = () => {
  return (
    <Dock
      className="fixed bottom-5 left-1/2 -translate-x-1/2 backdrop-blur-xl rounded-full shadow-md border border-white/30 px-2 bg-[#292929]\100 w-auto z-1 "
      bgColor="bg-[#08090a]/90 backdrop-blur-sm"
    >
      <DockIcon link={"#home"}>
        <FiHome className="h-[18px] w-[18px]" />
      </DockIcon>

      <DockIcon
        link={
          "https://www.figma.com/design/xvmNxMkz0r8YBVN60VJ7CW/Showcase?node-id=12-52&t=ziGuNpXWDORTXcao-1"
        }
        target={"_blank"}
      >
        <FaFigma className="h-[18px] w-[18px]" />
      </DockIcon>

      <div
        data-orientation="vertical"
        role="none"
        class="shrink-0 bg-white/8 w-[1px] h-full"
        mousex="[object Object]"
        magnification="60"
        distance="140"
      ></div>

      <DockIcon link={"https://github.com/Yashx18"} target={"_blank"}>
        <FaGithub className="h-[18px] w-[18px]" />
      </DockIcon>

      <DockIcon link={"https://t.me/kenx024"} target={"_blank"}>
        <FaTelegram className="h-[18px] w-[18px]" />
      </DockIcon>

      <DockIcon link={"https://x.com/TheKen__"} target={"_blank"}>
        <FaXTwitter className="h-[18px] w-[18px]" />
      </DockIcon>

      <DockIcon link={"mailto:yashx024@gmail.com"} target={"_blank"}>
        <MdOutlineEmail className="h-[18px] w-[18px]" />
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
