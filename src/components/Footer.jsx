// ============================================================
// k. SCARF — Footer Component (High Performance Edition)
// ============================================================

import { motion } from "framer-motion";
import { STORE_INFO } from "../data/constants";
import { ANIMATION_EASE, ANIMATION_DURATION } from "../data/animations";

// Defined outside component — never recreated on re-render
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 1.0 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_DURATION.normal, ease: ANIMATION_EASE.smooth },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: ANIMATION_DURATION.slow, delay: 1.1 },
  },
};

export default function Footer({ loaded }) {
  return (
    <motion.div
      initial="hidden"
      animate={loaded ? "visible" : "hidden"}
      variants={containerVariants}
      style={{ textAlign: "center", marginTop: "clamp(24px, 6vw, 36px)" }}
    >
      <motion.div
        variants={itemVariants}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(6px, 1.5vw, 10px)",
          marginBottom: "clamp(6px, 1.5vw, 8px)",
        }}
      >
        <motion.div
          variants={lineVariants}
          style={{
            height: 1,
            width: "clamp(20px, 5vw, 28px)",
            background: "linear-gradient(to right, transparent, rgba(180,140,30,0.2))",
            transformOrigin: "left",
          }}
        />
        <span
          style={{
            fontSize: "clamp(9px, 1.5vw, 10px)",
            letterSpacing: "0.2em",
            color: "rgba(180,140,30,0.28)",
            fontFamily: "Georgia, serif",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {STORE_INFO.name}
        </span>
        <motion.div
          variants={lineVariants}
          style={{
            height: 1,
            width: "clamp(20px, 5vw, 28px)",
            background: "linear-gradient(to left, transparent, rgba(180,140,30,0.2))",
            transformOrigin: "right",
          }}
        />
      </motion.div>

      <motion.p
        variants={itemVariants}
        style={{
          fontSize: "clamp(11px, 2vw, 11px)",
          color: "rgba(255,255,255,0.13)",
          fontFamily: "Cairo, sans-serif",
        }}
      >
        جميع الحقوق محفوظة © {STORE_INFO.year}
      </motion.p>

      <motion.p
        variants={itemVariants}
        style={{
          fontSize: "clamp(10px, 1.8vw, 10px)",
          color: "rgba(255,255,255,0.1)",
          fontFamily: "'Courier New', monospace",
          marginTop: "clamp(2px, 0.5vw, 4px)",
          letterSpacing: "0.05em",
        }}
      >
        Developed by {STORE_INFO.developer}
      </motion.p>
    </motion.div>
  );
}
