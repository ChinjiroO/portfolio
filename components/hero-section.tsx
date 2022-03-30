import { motion, useTransform, useViewportScroll } from "framer-motion";
import Parallax from "./parallax";

const HeroSection: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, -2]);

  return (
    <div className="flex overflow-x-hidden flex-col h-[95vh] w-full justify-center items-center font-bold max-w-5xl">
      <Parallax offset={50}>
        <motion.div style={{ scale }}>
          <div className="flex text-md sm:text-xl font-light">
            <p className="mr-2 text-red-101 animate-bounce">Hi!</p>
            <p className="">Welcome to my portfolio website</p>
          </div>
          <div className="text-3xl sm:text-6xl">
            <p className="">My name’s</p>
            <p className="text-blue-101">Techin Seoikrathok.</p>
          </div>
          <div className="flex justify-center sm:justify-start items-center w-full mt-5">
            {/* ADD link to download resume pdf. */}
            <button className="w-full sm:w-auto px-4 py-2 rounded-md bg-sky-400 hover:bg-sky-500 shadow-md text-white text-md sm:text-2xl">
              RESUME
            </button>
          </div>
        </motion.div>
      </Parallax>
    </div>
  );
};
export default HeroSection;
