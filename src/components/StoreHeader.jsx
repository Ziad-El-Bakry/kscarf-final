// ============================================================
// k. SCARF — StoreHeader Component (High Performance Edition)
// ============================================================

import { motion } from "framer-motion";
import { LOGO_SRC } from "../data/logo";
import { STORE_INFO } from "../data/constants";
import { ANIMATION_EASE, ANIMATION_DURATION } from "../data/animations";

// Defined outside component — never recreated on re-render
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_DURATION.normal, ease: ANIMATION_EASE.smooth },
  },
};

const lineScaleVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: ANIMATION_DURATION.slow, delay: 0.2 } },
};

const dividerDotVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: ANIMATION_DURATION.normal, delay: 0.4 } },
};

export default function StoreHeader({ loaded }) {
  return (
    <motion.div
      initial="hidden"
      animate={loaded ? "visible" : "hidden"}
      variants={containerVariants}
      style={{ textAlign: "center", marginBottom: "clamp(24px, 6vw, 36px)" }}
    >
      {/* Era tag */}
      <motion.div
        variants={itemVariants}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "clamp(6px, 1.5vw, 8px)",
          marginBottom: "clamp(16px, 4vw, 20px)",
        }}
      >
        <motion.div
          variants={lineScaleVariants}
          style={{
            width: "clamp(24px, 5vw, 32px)",
            height: 1,
            background: "linear-gradient(to right, transparent, rgba(224, 163, 184, 0.4))",
            transformOrigin: "left",
          }}
        />
        <span
          style={{
            fontSize: "clamp(8px, 1.2vw, 10px)",
            letterSpacing: "0.35em",
            color: "rgba(224, 163, 184, 0.8)",
            fontFamily: "Georgia, serif",
            textTransform: "uppercase",
          }}
        >
          Est. 2026
        </span>
        <motion.div
          variants={lineScaleVariants}
          style={{
            width: "clamp(24px, 5vw, 32px)",
            height: 1,
            background: "linear-gradient(to left, transparent, rgba(224, 163, 184, 0.4))",
            transformOrigin: "right",
          }}
        />
      </motion.div>

      {/* Logo */}
      <motion.div
        variants={itemVariants}
        style={{ position: "relative", display: "inline-block", marginBottom: "clamp(12px, 3vw, 15px)" }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          animate={{
            boxShadow: [
              "0 0 36px rgba(224, 163, 184, 0.15), 0 0 70px rgba(224, 163, 184, 0.05)",
              "0 0 42px rgba(224, 163, 184, 0.25), 0 0 80px rgba(224, 163, 184, 0.15)",
              "0 0 36px rgba(224, 163, 184, 0.15), 0 0 70px rgba(224, 163, 184, 0.05)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            width: "clamp(180px, 60vw, 250px)",
            height: "clamp(110px, 35vw, 150px)",
            borderRadius: 90,
            overflow: "hidden",
            background: "rgba(20, 10, 30, 0.4)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1.5px solid rgba(224, 163, 184, 0.4)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.img
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            src={LOGO_SRC}
            alt={`${STORE_INFO.name} Logo`}
            style={{ width: "100%", height: "100%", objectFit: "contain", padding: 8 }}
          />
          {/* Spinning ring — pure CSS */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 20,
              border: "1px solid transparent",
              borderTopColor: "rgba(224, 163, 184, 0.6)",
              borderRightColor: "rgba(224, 163, 184, 0.15)",
              animation: "kSpin 4s linear infinite",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Name */}
      <motion.h1
        variants={itemVariants}
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 700,
          fontSize: "clamp(28px, 7vw, 38px)",
          letterSpacing: "0.18em",
          marginTop: "clamp(4px, 1vw, 6px)",
          background: "linear-gradient(to right, #E0A3B8, #D8BFD8, #802360, #1B2956, #D4A017, #E0A3B8)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "textShine 5s linear infinite",
        }}
      >
        {STORE_INFO.name}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        style={{
          fontFamily: "Cairo, sans-serif",
          fontSize: "clamp(12px, 2.5vw, 14px)",
          color: "rgba(224, 163, 184, 0.7)",
          letterSpacing: "0.18em",
          marginBottom: "clamp(10px, 2.5vw, 14px)",
        }}
      >
        {STORE_INFO.tagline}
      </motion.p>

      {/* Divider */}
      <motion.div
        variants={itemVariants}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(8px, 1.5vw, 10px)" }}
      >
        <motion.div
          variants={lineScaleVariants}
          style={{
            height: 1,
            width: "clamp(36px, 8vw, 48px)",
            background: "linear-gradient(to right, transparent, rgba(224, 163, 184, 0.3))",
            transformOrigin: "left",
          }}
        />
        <motion.div
          variants={dividerDotVariants}
          style={{
            width: "clamp(3px, 0.5vw, 4px)",
            height: "clamp(3px, 0.5vw, 4px)",
            borderRadius: "50%",
            background: "rgba(224, 163, 184, 0.6)",
          }}
        />
        <motion.div
          variants={lineScaleVariants}
          style={{
            height: 1,
            width: "clamp(36px, 8vw, 48px)",
            background: "linear-gradient(to left, transparent, rgba(224, 163, 184, 0.3))",
            transformOrigin: "right",
          }}
        />
      </motion.div>

      <motion.p
        variants={itemVariants}
        style={{
          fontFamily: "Cairo, sans-serif",
          fontSize: "clamp(11px, 2vw, 12px)",
          color: "rgba(255, 255, 255, 0.25)",
          marginTop: "clamp(8px, 2vw, 10px)",
          letterSpacing: "0.04em",
        }}
      >
        اتواصل معانا على أي منصة 👇
      </motion.p>
    </motion.div>
  );
}
