import { BsLine, BsGithub, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className='flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 text-slate-200 sm:py-0'>
      <ul className='flex'>© 2022 Techin Seoikrathok.</ul>
      <div className='flex gap-4'>
        <a
          href='https://line.me/ti/p/SEjsmdq3Yn'
          className='flex items-center hover:text-slate-300'
        >
          <BsLine className='text-xl' />
        </a>
        <a
          href='https://twitter.com/CeeJay8991'
          className='flex items-center hover:text-slate-300'
        >
          <BsTwitter className='text-xl' />
        </a>
        <a
          href='https://github.com/ChinjiroO'
          className='flex items-center hover:text-slate-300'
        >
          <BsGithub className='text-xl' />
        </a>
      </div>
    </div>
  );
}
