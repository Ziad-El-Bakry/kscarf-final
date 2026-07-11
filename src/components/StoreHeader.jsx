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
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASE.smooth,
    },
  },
};

const lineScaleVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: ANIMATION_DURATION.slow, delay: 0.2 },
  },
};

const dividerDotVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { duration: ANIMATION_DURATION.normal, delay: 0.4 },
  },
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
            background:
              "linear-gradient(to right, transparent, rgba(224, 163, 184, 0.4))",
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
            background:
              "linear-gradient(to left, transparent, rgba(224, 163, 184, 0.4))",
            transformOrigin: "right",
          }}
        />
      </motion.div>

      {/* Logo */}
      <motion.div
        variants={itemVariants}
        style={{
          position: "relative",
          display: "inline-flex",
          justifyContent: "center",
          marginBottom: "clamp(12px, 3vw, 15px)",
          width: "100%",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          style={{
            width: "clamp(240px, 80vw, 380px)",
            height: "clamp(70px, 25vw, 120px)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maskImage: "radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 70%)",
          }}
        >
          <motion.img
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={LOGO_SRC}
            alt={`${STORE_INFO.name} Logo`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: "contrast(1.2) drop-shadow(0 4px 15px rgba(212, 175, 55, 0.15))",
              mixBlendMode: "screen",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 65%, transparent 100%)",
              maskImage: "radial-gradient(ellipse at center, black 65%, transparent 100%)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Name (Visually Hidden since the new logo includes the name) */}
      <motion.h1
        variants={itemVariants}
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          border: 0,
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

      {/* Unified Quote */}
      <motion.div
        variants={itemVariants}
        dir="ltr"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "clamp(12px, 3vw, 18px)",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(26px, 7vw, 36px)",
          fontStyle: "italic",
          fontWeight: "600",
          letterSpacing: "0.04em",
          lineHeight: "1.3",
          textAlign: "center",
          background: "linear-gradient(to right, #D4A017, #F8E5A2, #E0A3B8, #e622e6ff, #D4A017)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "textShine 5s linear infinite",
          filter: "drop-shadow(0 2px 4px rgba(224, 163, 184, 0.2))"
        }}
      >
        <div>We don't follow trends,</div>
        <div>we create them.</div>
        
        {/* Minimal Star Divider */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(8px, 2vw, 14px)", marginTop: "clamp(12px, 3vw, 16px)", width: "100%", fontFamily: "Arial, sans-serif" }}>
          <motion.div
            variants={lineScaleVariants}
            style={{ height: "1px", width: "clamp(40px, 15vw, 80px)", background: "linear-gradient(to right, transparent, rgba(224, 163, 184, 0.4))" }}
          />
          <motion.div variants={dividerDotVariants} style={{ color: "rgba(224, 163, 184, 0.7)", fontSize: "clamp(12px, 2vw, 14px)", textShadow: "0 0 8px rgba(224, 163, 184, 0.6)" }}>
            ✦
          </motion.div>
          <motion.div
            variants={lineScaleVariants}
            style={{ height: "1px", width: "clamp(40px, 15vw, 80px)", background: "linear-gradient(to left, transparent, rgba(224, 163, 184, 0.4))" }}
          />
        </div>
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
