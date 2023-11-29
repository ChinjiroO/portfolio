'use client';

import { useState, useRef, ReactNode } from 'react';
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useIsomorphicLayoutEffect,
  useReducedMotion,
  AnimatePresence,
} from 'framer-motion';

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

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useIsomorphicLayoutEffect(() => {
    const element = ref?.current?.getBoundingClientRect().top;
    const onResize = () => {
      if (!element) {
        console.log('element === undefined');
      } else {
        setElementTop(element + window.scrollY || window.pageYOffset);
      }
      setClientHeight(window.innerHeight);
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [ref]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence initial={false}>
      <motion.div ref={ref} style={{ y }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
export default Parallax;
