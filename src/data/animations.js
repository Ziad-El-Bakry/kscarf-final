// ============================================================
// k. SCARF — Animation Configuration & Presets
// Developed by programmer Ziad El-Bakry
// ============================================================

export const ANIMATION_EASE = {
  smooth: [0.16, 1, 0.3, 1],
  bounce: [0.34, 1.56, 0.64, 1],
  easeOut: [0, 0, 0.2, 1],
  elastic: [0.175, 0.885, 0.32, 1.275],
};

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  slowest: 1.2,
};

export const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

export const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASE.smooth,
    },
  },
};

export const SCALE_HOVER = {
  scale: 1.05,
  transition: {
    duration: ANIMATION_DURATION.fast,
    ease: ANIMATION_EASE.smooth,
  },
};

export const FADE_IN_UP = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.slow,
      ease: ANIMATION_EASE.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -24,
    transition: { duration: ANIMATION_DURATION.fast },
  },
};

export const FADE_IN_DOWN = {
  initial: { opacity: 0, y: -24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.slow,
      ease: ANIMATION_EASE.smooth,
    },
  },
};

export const ROTATE_IN = {
  initial: { opacity: 0, rotate: -180 },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: ANIMATION_DURATION.slow,
      ease: ANIMATION_EASE.elastic,
    },
  },
};

export const PULSE_ANIMATION = {
  animate: {
    opacity: [0.4, 0.8, 0.4],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const FLOAT_ANIMATION = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const GLOW_ANIMATION = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(180,140,30,0.3)",
      "0 0 40px rgba(180,140,30,0.5)",
      "0 0 20px rgba(180,140,30,0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
