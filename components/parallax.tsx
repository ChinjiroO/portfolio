import { useState, useRef, ReactNode } from "react";
import { useIsomorphicLayoutEffect } from "framer-motion";

import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  offset?: number;
};

// ref: https://samuelkraft.com/blog/spring-parallax-framer-motion-guide
const Parallax = ({ children, offset = 50 }: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useViewportScroll();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  // start animating our element when we've scrolled it into view
  const initial = elementTop - clientHeight;
  // end our animation when we've scrolled the offset specified
  const final = elementTop + offset;

  // const y = useTransform(scrollY, [initial, final], [offset, -offset])
  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  // apply a spring to ease the result
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useIsomorphicLayoutEffect(() => {
    const element = ref?.current?.getBoundingClientRect().top;
    // save our layout measurements in a function in order to trigger
    // it both on mount and on resize
    const onResize = () => {
      // use getBoundingClientRect instead of offsetTop in order to
      // get the offset relative to the viewport
      if (!element) {
        console.log("error");
      } else {
        setElementTop(element + window.scrollY || window.pageYOffset);
      }
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};
export default Parallax;
