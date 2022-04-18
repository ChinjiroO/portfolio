import { motion, useTransform, useViewportScroll } from "framer-motion";
import Parallax from "./parallax";

const HeroSection: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, -2]);

  return (
    <div className="flex overflow-x-hidden flex-col h-screen max-h-[1500px] w-full justify-center items-center font-bold max-w-5xl px-5">
      <Parallax offset={50}>
        <motion.div style={{ scale }}>
          <div className="flex text-md sm:text-xl font-light">
            <p className="mr-2 text-red-101 animate-bounce">Hi!</p>
            <p className="">Welcome to my portfolio website</p>
          </div>
          <div className="text-3xl sm:text-6xl">
            <p className="">My name’s</p>
            <p className="text-transparent bg-clip-text bg-gradient-to-br from-blue-101 to-green-101">
              Techin Seoikrathok.
            </p>
          </div>
          <div className="flex justify-center sm:justify-start items-center w-full mt-5">
            <a href="/assets/docs/CV.pdf">
              <button className="flex justify-center items-center w-full sm:w-auto px-4 py-2 rounded-md border border-green-101 text-green-101 hover:bg-gradient-to-tr from-blue-101 hover:border-transparent to-green-101 hover:text-white shadow-md text-md sm:text-2xl transition-all hover:transition-all">
                RESUME
                <p className="text-sm font-thin ml-1">(pdf)</p>
              </button>
            </a>
          </div>
        </motion.div>
      </Parallax>
    </div>
  );
};
export default HeroSection;
