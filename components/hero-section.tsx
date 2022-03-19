import { motion, useViewportScroll } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col h-[95vh] w-full justify-center items-center font-bold max-w-5xl">
        <div className="flex text-md font-light">
          <p className="mr-2 text-red-101 animate-bounce">Hi!</p>
          <p className="">Welcome to my portfolio website</p>
        </div>
        <div className="text-3xl">
          <p className="">My name’s</p>
          <p className="text-blue-101">Techin Seoikrathok.</p>
        </div>
      </div>
    </motion.div>
  );
}
