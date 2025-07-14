import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="flex  items-start justify-between">
      <div className=" flex flex-col items-start w-auto mb-2">
        <h2 className="text-xl font-bold mb-2">Reach out to me</h2>
        <div>
          <p>
            Most of the time, I'm hanging out on Telegram, while coding. I'm
            also super active on X, so feel free to DM me there!
          </p>
          <div className="w-full h-auto  my-2 flex ">
            <a
              href="https://x.com/yashx024"
              className="border border-[#636c79] px-4 py-1 flex items-center mr-2 rounded-md hover:bg-[#101215]"
            >
              <FaXTwitter className="mr-2" /> Twitter
            </a>
            <a
              href="https://t.me/kenx024"
              className="border  border-[#636c79] px-3 py-1 flex items-center rounded-md hover:bg-[#101215]"
            >
              <FaTelegram className="mr-2" />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
