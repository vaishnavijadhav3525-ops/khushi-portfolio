import type { Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      delay,
    },
  },
});

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

export const zoomIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18, delay },
  },
});

export const slideIn = (direction: "left" | "right" | "up" | "down", delay = 0): Variants => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

export const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 18 },
  },
};

export const hoverScale = {
  whileHover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 25 } },
  whileTap: { scale: 0.97 },
};

export const hoverLift = {
  whileHover: { y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export const viewportConfig = {
  once: true,
  amount: 0.15,
};
