import { motion, useTransform, useViewportScroll } from "framer-motion";
import Parallax from "./parallax";

const HeroSection = () => {
  const { scrollYProgress } = useViewportScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, -2]);

  return (
    <div className="flex overflow-x-hidden flex-col h-[95vh] w-full justify-center items-center font-bold max-w-5xl">
      <Parallax offset={50}>
        <motion.div style={{ scale }}>
          <div className="flex text-sm sm:text-md font-light">
            <p className="mr-2 text-red-101 animate-bounce">Hi!</p>
            <p className="">Welcome to my portfolio website</p>
          </div>
          <div className="text-3xl">
            <p className="">My name’s</p>
            <p className="text-blue-101">Techin Seoikrathok.</p>
          </div>
        </motion.div>
      </Parallax>
    </div>
  );
};
export default HeroSection;
