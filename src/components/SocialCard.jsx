// ============================================================
// k. SCARF — SocialCard Component (Fluid Animation Edition)
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import { getIcon, Icons } from "./Icons";
import { ANIMATION_EASE, ANIMATION_DURATION } from "../data/animations";

// ── Variants (module-level — never recreated) ────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.07 + 0.25,
    },
  }),
};

const shimmerVariants = {
  rest: { x: "-110%", opacity: 0 },
  hover: {
    x: "110%",
    opacity: 1,
    transition: { duration: 0.55, ease: "easeInOut" },
  },
};

const iconBoxVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.12,
    rotate: -6,
    transition: { type: "spring", stiffness: 400, damping: 18 },
  },
  tap: { scale: 0.9, rotate: 4 },
};

const arrowVariants = {
  rest: { x: 0, opacity: 0.2 },
  hover: {
    x: -5,
    opacity: 1,
    transition: { type: "spring", stiffness: 350, damping: 20 },
  },
};

const accentBarVariants = {
  rest: { scaleY: 0, opacity: 0 },
  hover: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

const badgeVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: { type: "spring", stiffness: 500, damping: 20 },
  },
};

export default function SocialCard({ link, index, loaded }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setTimeout(() => setHovered(false), 350)}
      initial="hidden"
      animate={loaded ? "visible" : "hidden"}
      whileHover="hover"
      whileTap="tap"
      variants={cardVariants}
      custom={index}
      style={{ textDecoration: "none", display: "block", outline: "none" }}
    >
      <motion.div
        variants={{
          rest: {
            scale: 1,
            y: 0,
            boxShadow: "0 2px 12px rgba(0,0,0,0.5)",
          },
          hover: {
            scale: 1.018,
            y: -2,
            boxShadow: `0 8px 32px ${link.color}18, 0 2px 0 ${link.color}22`,
            transition: { type: "spring", stiffness: 300, damping: 22 },
          },
          tap: {
            scale: 0.97,
            y: 0,
            boxShadow: "0 1px 6px rgba(0,0,0,0.6)",
            transition: { duration: 0.12 },
          },
        }}
        style={{
          background: hovered
            ? `linear-gradient(135deg, ${link.color}14, rgba(11,11,14,0.98), ${link.color}08)`
            : "rgba(13,13,16,0.95)",
          border: `1px solid ${hovered ? link.color + "50" : "rgba(255,255,255,0.06)"}`,
          borderRadius: 16,
          position: "relative",
          overflow: "hidden",
          willChange: "transform",
          transition: "background 0.35s ease, border-color 0.35s ease",
        }}
      >
        {/* ── Shimmer sweep on hover ── */}
        <motion.div
          variants={shimmerVariants}
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(105deg, transparent 30%, ${link.color}18 50%, transparent 70%)`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* ── Right accent bar ── */}
        <motion.div
          variants={accentBarVariants}
          style={{
            position: "absolute",
            right: 0,
            top: "10%",
            bottom: "10%",
            width: 3,
            borderRadius: "3px 0 0 3px",
            background: `linear-gradient(to bottom, transparent, ${link.color}, transparent)`,
            transformOrigin: "center",
            zIndex: 2,
          }}
        />

        {/* ── Card content ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(10px, 2vw, 14px)",
            padding: "clamp(11px, 2.2vw, 14px) clamp(12px, 3vw, 16px)",
            position: "relative",
            zIndex: 3,
          }}
        >
          {/* Icon box */}
          <motion.div
            variants={iconBoxVariants}
            style={{
              width: "clamp(38px, 8vw, 46px)",
              height: "clamp(38px, 8vw, 46px)",
              borderRadius: "clamp(10px, 2vw, 13px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              background: hovered ? `${link.color}22` : "rgba(255,255,255,0.05)",
              color: hovered ? link.color : "rgba(255,255,255,0.4)",
              border: `1px solid ${hovered ? link.color + "40" : "rgba(255,255,255,0.05)"}`,
              boxShadow: hovered ? `0 0 18px ${link.color}28` : "none",
              fontSize: "clamp(18px, 4vw, 22px)",
              transition: "background 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s",
            }}
          >
            {getIcon(link.id)}
          </motion.div>

          {/* Text block */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Name + badge row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(4px, 1.5vw, 8px)",
                marginBottom: "clamp(1px, 0.4vw, 3px)",
              }}
            >
              <span
                style={{
                  fontFamily: "Cairo, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(13px, 3vw, 15px)",
                  color: hovered ? "#fff" : "rgba(255,255,255,0.82)",
                  transition: "color 0.25s",
                }}
              >
                {link.name}
              </span>

              <motion.span
                variants={badgeVariants}
                style={{
                  fontSize: "clamp(9px, 1.8vw, 11px)",
                  padding: "1px clamp(6px, 1.5vw, 8px)",
                  borderRadius: 20,
                  background: hovered ? `${link.color}22` : "rgba(255,255,255,0.05)",
                  color: hovered ? link.color : "rgba(255,255,255,0.3)",
                  border: `1px solid ${hovered ? link.color + "35" : "rgba(255,255,255,0.06)"}`,
                  fontFamily: "Cairo, sans-serif",
                  transition: "all 0.25s",
                  display: "inline-block",
                }}
              >
                {link.badge}
              </motion.span>
            </div>

            {/* Handle */}
            <div
              style={{
                fontFamily: "Cairo, sans-serif",
                fontSize: "clamp(11px, 2.2vw, 13px)",
                fontWeight: 500,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                direction: "ltr",
                textAlign: "right",
                color: hovered ? link.color : "rgba(255,255,255,0.35)",
                transition: "color 0.3s",
              }}
            >
              {link.handle}
            </div>

            {/* Description */}
            <div
              style={{
                fontFamily: "Cairo, sans-serif",
                fontSize: "clamp(10px, 2vw, 12px)",
                color: "rgba(255,255,255,0.2)",
                marginTop: "clamp(1px, 0.3vw, 2px)",
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
            variants={arrowVariants}
            style={{
              flexShrink: 0,
              fontSize: "clamp(16px, 4vw, 20px)",
              color: hovered ? link.color : "rgba(255,255,255,0.15)",
              transition: "color 0.3s",
            }}
          >
            <Icons.Arrow />
          </motion.div>
        </div>
      </motion.div>
    </motion.a>
  );
}
