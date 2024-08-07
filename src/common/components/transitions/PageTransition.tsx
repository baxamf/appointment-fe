import { motion, useIsPresent } from "framer-motion";

export default function PageTransition() {
  const isPresent = useIsPresent();
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{
        scaleY: 0,
        transition: { duration: 1, ease: "circOut", delay: 0.5 },
      }}
      exit={{ scaleY: 1, transition: { duration: 1, ease: "circIn" } }}
      style={{ originY: isPresent ? 0 : 1 }}
      className="fixed z-50 bg-colorBg inset-0"
    />
  );
}
