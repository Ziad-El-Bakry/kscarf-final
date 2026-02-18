// ============================================================
// k. SCARF — StoreHeader Component
// Developed by programmer Ziad Al-Bakry
// ============================================================

import { motion } from "framer-motion";
import { LOGO_SRC } from "../data/logo";
import { STORE_INFO } from "../data/constants";
import { ANIMATION_EASE, ANIMATION_DURATION, FADE_IN_UP, ROTATE_IN } from "../data/animations";

export default function StoreHeader({ loaded }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_DURATION.slow,
        ease: ANIMATION_EASE.smooth,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={loaded ? "visible" : "hidden"}
      variants={containerVariants}
      style={{
        textAlign: "center",
        marginBottom: "clamp(24px, 6vw, 36px)",
      }}
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
          animate={{ scaleX: loaded ? 1 : 0 }}
          transition={{ duration: ANIMATION_DURATION.slow, delay: 0.2 }}
          style={{ width: "clamp(24px, 5vw, 32px)", height: 1, background: "linear-gradient(to right, transparent, rgba(180,140,30,0.4))", transformOrigin: "left" }}
        />
        <span style={{ fontSize: "clamp(8px, 1.2vw, 10px)", letterSpacing: "0.35em", color: "rgba(180,140,30,0.55)", fontFamily: "Georgia, serif", textTransform: "uppercase" }}>
          Est. 2026
        </span>
        <motion.div
          animate={{ scaleX: loaded ? 1 : 0 }}
          transition={{ duration: ANIMATION_DURATION.slow, delay: 0.2 }}
          style={{ width: "clamp(24px, 5vw, 32px)", height: 1, background: "linear-gradient(to left, transparent, rgba(180,140,30,0.4))", transformOrigin: "right" }}
        />
      </motion.div>

      {/* Logo ring */}
      <motion.div
        variants={itemVariants}
        style={{ position: "relative", display: "inline-block", marginBottom: "clamp(12px, 3vw, 15px)" }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          animate={{
            boxShadow: [
              "0 0 36px rgba(180,140,30,0.15), 0 0 70px rgba(180,140,30,0.06)",
              "0 0 42px rgba(180,140,30,0.25), 0 0 80px rgba(180,140,30,0.12)",
              "0 0 36px rgba(180,140,30,0.15), 0 0 70px rgba(180,140,30,0.06)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          style={{
            width: "clamp(180px, 60vw, 250px)",
            height: "clamp(110px, 35vw, 150px)",
            borderRadius: 90,
            overflow: "hidden",
            background: "#080808",
            border: "1.5px solid rgba(180,140,30,0.45)",
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
          {/* Spinning ring */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 20,
              border: "1px solid transparent",
              borderTopColor: "rgba(180,140,30,0.55)",
              borderRightColor: "rgba(180,140,30,0.18)",
              animation: "kSpin 5s linear infinite",
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
          marginBottom: "clamp(2px, 1vw, 4px)",
          marginTop: "clamp(4px, 1vw, 6px)",
          background: "linear-gradient(135deg, #b8860b 0%, #e8d48a 42%, #b8860b 72%, #8b6914 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {STORE_INFO.name}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        style={{
          fontFamily: "Cairo, sans-serif",
          fontSize: "clamp(12px, 2.5vw, 14px)",
          color: "rgba(180,140,30,0.5)",
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
          animate={{ scaleX: loaded ? 1 : 0 }}
          transition={{ duration: ANIMATION_DURATION.slow, delay: 0.4 }}
          style={{ height: 1, width: "clamp(36px, 8vw, 48px)", background: "linear-gradient(to right, transparent, rgba(180,140,30,0.3))", transformOrigin: "left" }}
        />
        <motion.div
          animate={{ scale: loaded ? 1 : 0 }}
          transition={{ duration: ANIMATION_DURATION.normal, delay: 0.5 }}
          style={{ width: "clamp(3px, 0.5vw, 4px)", height: "clamp(3px, 0.5vw, 4px)", borderRadius: "50%", background: "rgba(180,140,30,0.5)" }}
        />
        <motion.div
          animate={{ scaleX: loaded ? 1 : 0 }}
          transition={{ duration: ANIMATION_DURATION.slow, delay: 0.4 }}
          style={{ height: 1, width: "clamp(36px, 8vw, 48px)", background: "linear-gradient(to left, transparent, rgba(180,140,30,0.3))", transformOrigin: "right" }}
        />
      </motion.div>

      <motion.p
        variants={itemVariants}
        style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(11px, 2vw, 12px)", color: "rgba(255,255,255,0.27)", marginTop: "clamp(8px, 2vw, 10px)", letterSpacing: "0.04em" }}
      >
        اتواصل معانا على أي منصة 👇
      </motion.p>
    </motion.div>
  );
}
