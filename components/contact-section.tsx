import React, { useRef, useState } from "react";

import Parallax from "./parallax";
import emailjs from "@emailjs/browser";

//icons
import { BsPhoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (form.current !== null) {
      emailjs
        .sendForm(
          "service_hn89ahq",
          "template_90b5ru5",
          form.current,
          "8URa5xSio0a2y9bX4"
        )
        .then((res) => {
          console.log(res);
          window.alert("Send message success.");
          // Value cleared
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        })
        .catch((err) => {
          console.log(err.message);
          window.alert("Send message failed.");
        });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-screen items-center font-bold max-w-5xl px-5 text-slate-100 gap-4 pb-20 md:pb-0">
      <div className="h-full text-2xl">
        <Parallax offset={75}>
          <ContactInfo />
        </Parallax>
      </div>

      <Parallax offset={75}>
        <form
          ref={form}
          className="flex flex-col gap-4 rounded-xl font-sans font-medium text-lg p-8 border border-gray-600"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full gap-2">
            <label>Your Name *</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full rounded-md p-2 text-base bg-slate-50/5 placeholder-midnight-100"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <p>E-mail *</p>
            <input
              required
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Your_email@example.com"
              className="w-full rounded-md p-2 text-base bg-slate-50/5 placeholder-midnight-100"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <p>Subject *</p>
            <input
              required
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full rounded-md p-2 text-base bg-slate-50/5 placeholder-midnight-100"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <p>Message</p>
            <textarea
              placeholder="Message..."
              name="message"
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="w-full rounded-md p-2 text-base bg-slate-50/5 placeholder-midnight-100 resize-none"
            />
          </div>
          <div className="flex flex-col items-end w-full gap-2">
            <SendMessageButton />
          </div>
        </form>
      </Parallax>
    </div>
  );
};

export default ContactSection;

const SendMessageButton = () => {
  return (
    <button
      type="submit"
      value="Submit"
      className="w-full sm:w-auto px-4 py-2 rounded-md border border-green-101 text-green-101 hover:bg-gradient-to-tr from-blue-101 hover:border-transparent to-green-101 hover:text-white shadow-md text-base transition-all hover:transition-all"
    >
      Send Message
    </button>
  );
};

const ContactInfo = () => {
  return (
    <div className="flex md:flex-col flex-wrap gap-3">
      <div>
        <p className="uppercase text-green-101">contact me</p>
        <span className="text-base font-normal text-midnight-100 mb-5">
          Fill up the form to contact me. I will get back to you within 24
          hours.
        </span>
      </div>
      <div className="h-[2px] w-full bg-gradient-to-r from-green-101 to-blue-101 rounded-full" />
      <div>
        <a href="tel:+66825726836">
          <button className="flex items-center py-2 px-1 w-full rounded-md text-base gap-2 hover:bg-white/20 transition-all">
            <BsPhoneFill className="text-xl" />
            <p>0825726836</p>
          </button>
        </a>
        <a href="mailto:techinseoikrathok@gmail.com">
          <button className="flex items-center py-2 px-1 w-full rounded-md text-base gap-2 hover:bg-white/20 transition-all">
            <GrMail className="text-xl" />
            <p>techinseoikrathok@gmail.com</p>
          </button>
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=Khon+Buri+District,+Nakhon+Ratchasima`}
        >
          <button className="flex items-center py-2 px-1 w-full rounded-md text-base gap-2 hover:bg-white/20 transition-all">
            <MdLocationOn className="text-xl" />
            <p>950 m.4 Nakhon Ratchasima.</p>
          </button>
        </a>
      </div>
    </div>
  );
};
