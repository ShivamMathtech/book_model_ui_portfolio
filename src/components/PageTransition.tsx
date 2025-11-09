import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ 
        rotateY: -90,
        opacity: 0,
        transformOrigin: "left center"
      }}
      animate={{ 
        rotateY: 0,
        opacity: 1,
        transformOrigin: "left center"
      }}
      exit={{ 
        rotateY: 90,
        opacity: 0,
        transformOrigin: "left center"
      }}
      transition={{ 
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      style={{
        perspective: "2000px",
        transformStyle: "preserve-3d",
      }}
      className="min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
