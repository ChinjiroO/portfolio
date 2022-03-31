import Parallax from "./parallax";
import { BsPhoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";

const ContactSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[500px] w-screen items-center font-bold max-w-5xl px-5 my-5 text-slate-100 gap-8">
      <div className="h-full text-2xl sm:px-8">
        <Parallax offset={75}>
          <div className="flex flex-col gap-3">
            <p className="uppercase">contact me</p>
            <span className="text-base font-normal text-midnight-100 mb-5">
              Fill up the form for a contact me.
            </span>
            <a href="tel:+66825726836">
              <button className="flex items-center py-2 px-1 w-full rounded-md text-base gap-2 hover:bg-white/20 transition-all">
                <BsPhoneFill className="text-xl" />
                <p>0825726836</p>
              </button>
            </a>
            <a href="techinseoikrathok@gmail.com">
              <button className="flex items-center py-2 px-1 w-full rounded-md text-base gap-2 hover:bg-white/20 transition-all">
                <GrMail className="text-xl" />
                <p>techinseoikrathok@gmail.com</p>
              </button>
            </a>
            <a href="">
              <button className="flex items-center py-2 px-1 w-full rounded-md text-base gap-2 hover:bg-white/20 transition-all">
                <MdLocationOn className="text-xl" />
                <p>950 m.4 Nakhon Ratchasima.</p>
              </button>
            </a>
          </div>
        </Parallax>
      </div>

      <Parallax offset={75}>
        <div className="flex flex-col gap-4 bg-white rounded-xl font-sans font-medium text-xl text-midnight-200 min-h-[500px] p-8">
          <div className="flex flex-col w-full gap-2">
            <p className="">Your Name</p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name."
              className="w-full rounded-md border-2 p-2 text-base "
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <p className="">E-mail</p>
            <input
              type="email"
              name="email"
              placeholder="your_email@example.com"
              className="w-full rounded-md border-2 p-2 text-base "
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <p className="">Message</p>
            <textarea
              placeholder="message"
              rows={5}
              className="w-full rounded-md border-2 p-2 text-base resize-none"
            />
          </div>
          <div className="flex flex-col items-end w-full gap-2">
            <button className="w-full sm:w-fit px-4 py-2 rounded-md bg-sky-400 hover:bg-sky-500 shadow-md text-white text-base">
              Send Message
            </button>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ContactSection;
