'use client';

import React, { useRef, useState } from 'react';

import Parallax from './parallax';
import emailjs from '@emailjs/browser';

//icons
import { BsPhoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md';

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  //env values
  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (form.current !== null) {
      emailjs
        .sendForm(
          service_id as string,
          template_id as string,
          form.current,
          public_key,
        )
        .then((res) => {
          console.log(res);
          window.alert('Send message success.');
          // Value cleared
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        })
        .catch((err) => {
          console.log(err.message);
          window.alert('Send message failed.');
        });
    }
  };

  return (
    <div className='grid w-screen max-w-5xl grid-cols-1 items-center gap-4 px-5 pb-20 font-bold text-slate-100 md:grid-cols-2 md:pb-0'>
      <div className='h-full text-2xl'>
        <Parallax offset={75}>
          <ContactInfo />
        </Parallax>
      </div>

      <Parallax offset={75}>
        <form
          ref={form}
          className='flex flex-col gap-4 rounded-xl border border-gray-600 p-8 font-sans text-lg font-medium'
          onSubmit={handleSubmit}
        >
          <div className='flex w-full flex-col gap-2'>
            <label>Your Name *</label>
            <input
              required
              type='text'
              name='name'
              placeholder='Your name'
              className='w-full rounded-md bg-slate-50/5 p-2 text-base placeholder-midnight-100'
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div className='flex w-full flex-col gap-2'>
            <p>E-mail *</p>
            <input
              required
              type='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder='Your_email@example.com'
              className='w-full rounded-md bg-slate-50/5 p-2 text-base placeholder-midnight-100'
            />
          </div>
          <div className='flex w-full flex-col gap-2'>
            <p>Subject *</p>
            <input
              required
              type='text'
              name='subject'
              placeholder='Subject'
              className='w-full rounded-md bg-slate-50/5 p-2 text-base placeholder-midnight-100'
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </div>
          <div className='flex w-full flex-col gap-2'>
            <p>Message</p>
            <textarea
              placeholder='Message...'
              name='message'
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className='w-full resize-none rounded-md bg-slate-50/5 p-2 text-base placeholder-midnight-100'
            />
          </div>
          <div className='flex w-full flex-col items-end gap-2'>
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
      type='submit'
      value='Submit'
      className='w-full rounded-md border border-green-101 from-blue-101 to-green-101 px-4 py-2 text-base text-green-101 shadow-md transition-all hover:border-transparent hover:bg-gradient-to-tr hover:text-white hover:transition-all sm:w-auto'
    >
      Send Message
    </button>
  );
};

const ContactInfo = () => {
  return (
    <div className='flex flex-wrap gap-3 md:flex-col'>
      <div>
        <p className='uppercase text-green-101'>contact me</p>
        <span className='mb-5 text-base font-normal text-midnight-100'>
          Fill up the form to contact me. I will get back to you within 24
          hours.
        </span>
      </div>
      <div className='h-[2px] w-full rounded-full bg-gradient-to-r from-green-101 to-blue-101' />
      <div>
        <a href='tel:+66825726836'>
          <button className='flex w-full items-center gap-2 rounded-md px-1 py-2 text-base transition-all hover:bg-white/20'>
            <BsPhoneFill className='text-xl' />
            <p>0825726836</p>
          </button>
        </a>
        <a href='mailto:techinseoikrathok@gmail.com'>
          <button className='flex w-full items-center gap-2 rounded-md px-1 py-2 text-base transition-all hover:bg-white/20'>
            <GrMail className='text-xl' />
            <p>techinseoikrathok@gmail.com</p>
          </button>
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=Khon+Buri+District,+Nakhon+Ratchasima`}
        >
          <button className='flex w-full items-center gap-2 rounded-md px-1 py-2 text-base transition-all hover:bg-white/20'>
            <MdLocationOn className='text-xl' />
            <p>950 m.4 Nakhon Ratchasima.</p>
          </button>
        </a>
      </div>
    </div>
  );
};
