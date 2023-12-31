const defaultEase = [0, 0.71, 0.2, 1.01];

export const SpringEffect = {
  initial: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.3,
      ease: defaultEase,
      scale: {
        type: "spring",
        damping: 7,
        stiffness: 80,
        restDelta: 0.001,
      },
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: defaultEase,
      scale: {
        type: "spring",
        damping: 7,
        stiffness: 80,
        restDelta: 0.001,
      },
    },
  },
};
