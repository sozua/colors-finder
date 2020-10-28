export const defaultVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const showUpVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
  },
};

export const defaultTransitionWithDelay = (delay = 0) => {
  return {
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.9],
    delay,
  };
};

export const defaultTransitionWithDurationAndDelay = (
  duration = 0.8,
  delay = 0
) => {
  return {
    duration,
    ease: [0.6, -0.05, 0.01, 0.9],
    delay,
  };
};

export const defaultTransition = {
  duration: 0.8,
  ease: [0.6, -0.05, 0.01, 0.9],
};
