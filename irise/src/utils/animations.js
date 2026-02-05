export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const hoverLift = {
  whileHover: {
    y: -8,
    boxShadow: "0 30px 80px rgba(124,124,255,0.15)",
    transition: { duration: 0.3 }
  }
};
