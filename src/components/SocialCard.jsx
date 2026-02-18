// ============================================================
// k. SCARF — SocialCard Component
// Developed by programmer Ziad Al-Bakry
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import { getIcon, Icons } from "./Icons";
import { ANIMATION_EASE, ANIMATION_DURATION } from "../data/animations";

export default function SocialCard({ link, index, loaded }) {
  const [hovered, setHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, x: 24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: ANIMATION_DURATION.slow,
        ease: ANIMATION_EASE.smooth,
        delay: index * 0.07 + 0.25,
      },
    },
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.06,
      rotate: -3,
      transition: {
        duration: ANIMATION_DURATION.fast,
        ease: ANIMATION_EASE.smooth,
      },
    },
  };

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setTimeout(() => setHovered(false), 300)}
      initial="hidden"
      animate={loaded ? "visible" : "hidden"}
      variants={cardVariants}
      style={{
        textDecoration: "none",
        display: "block",
      }}
    >
      <motion.div
        animate={hovered ? "hover" : "rest"}
        initial="rest"
        style={{
          background: hovered
            ? `linear-gradient(135deg, ${link.color}18, rgba(12,12,14,0.97), ${link.color}0a)`
            : "rgba(13,13,16,0.93)",
          border: `1px solid ${hovered ? link.color + "45" : "rgba(255,255,255,0.055)"}`,
          borderRadius: 16,
          boxShadow: hovered
            ? `0 6px 28px ${link.color}14, 0 1px 0 ${link.color}20`
            : "0 2px 10px rgba(0,0,0,0.45)",
          backdropFilter: "blur(16px)",
          position: "relative",
          overflow: "hidden",
        }}
        transition={{
          duration: ANIMATION_DURATION.fast,
          ease: ANIMATION_EASE.smooth,
        }}
        whileHover={{ scale: 1.013, x: -2 }}
      >
        {/* Right accent bar */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: ANIMATION_DURATION.fast }}
          style={{
            position: "absolute",
            right: 0,
            top: "15%",
            bottom: "15%",
            width: 3,
            borderRadius: "3px 0 0 3px",
            background: `linear-gradient(to bottom, transparent, ${link.color}, transparent)`,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "clamp(10px, 2vw, 14px)", padding: "clamp(10px, 2vw, 13px) clamp(12px, 3vw, 16px)" }}>
          {/* Icon box */}
          <motion.div
            animate={hovered ? "hover" : "rest"}
            variants={iconVariants}
            style={{
              width: "clamp(36px, 8vw, 44px)",
              height: "clamp(36px, 8vw, 44px)",
              borderRadius: "clamp(8px, 2vw, 12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              background: hovered ? `${link.color}20` : "rgba(255,255,255,0.045)",
              color: hovered ? link.color : "rgba(255,255,255,0.45)",
              border: `1px solid ${hovered ? link.color + "38" : "rgba(255,255,255,0.045)"}`,
              boxShadow: hovered ? `0 0 16px ${link.color}22` : "none",
              fontSize: "clamp(18px, 4vw, 22px)",
            }}
            transition={{
              duration: ANIMATION_DURATION.fast,
              ease: ANIMATION_EASE.smooth,
            }}
          >
            {getIcon(link.id)}
          </motion.div>

          {/* Text block */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 1.5vw, 8px)", marginBottom: "clamp(1px, 0.3vw, 2px)" }}>
              <motion.span
                animate={{ color: hovered ? "#fff" : "rgba(255,255,255,0.82)" }}
                transition={{ duration: ANIMATION_DURATION.fast }}
                style={{
                  fontFamily: "Cairo, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(13px, 3vw, 15px)",
                }}
              >
                {link.name}
              </motion.span>
              <span
                style={{
                  fontSize: "clamp(9px, 1.8vw, 11px)",
                  padding: "1px clamp(6px, 1.5vw, 8px)",
                  borderRadius: 20,
                  background: hovered ? `${link.color}20` : "rgba(255,255,255,0.045)",
                  color: hovered ? link.color : "rgba(255,255,255,0.3)",
                  border: `1px solid ${hovered ? link.color + "30" : "rgba(255,255,255,0.05)"}`,
                  fontFamily: "Cairo, sans-serif",
                  transition: "all 0.3s",
                }}
              >
                {link.badge}
              </span>
            </div>
            <motion.div
              animate={{ color: hovered ? link.color : "rgba(255,255,255,0.32)" }}
              transition={{ duration: ANIMATION_DURATION.fast }}
              style={{
                fontFamily: "Cairo, sans-serif",
                fontSize: "clamp(11px, 2.2vw, 13px)",
                fontWeight: 400,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                direction: "ltr",
                textAlign: "right",
              }}
            >
              {link.handle}
            </motion.div>
            <div
              style={{
                fontFamily: "Cairo, sans-serif",
                fontSize: "clamp(10px, 2vw, 12px)",
                color: "rgba(255,255,255,0.22)",
                marginTop: "clamp(0.5px, 0.2vw, 1px)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {link.description}
            </div>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ x: hovered ? -2 : 0, color: hovered ? link.color : "rgba(255,255,255,0.14)" }}
            transition={{ duration: ANIMATION_DURATION.fast }}
            style={{
              flexShrink: 0,
              fontSize: "clamp(16px, 4vw, 20px)",
            }}
          >
            <Icons.Arrow />
          </motion.div>
        </div>
      </motion.div>
    </motion.a>
  );
}
