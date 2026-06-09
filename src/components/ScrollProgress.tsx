import { useScroll, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        backgroundColor: '#b77b4c',
        transformOrigin: 'left',
        scaleX: scrollYProgress,
        zIndex: 200,
      }}
    />
  );
}
