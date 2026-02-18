// ============================================================
// k. SCARF — SparkleBanner — Interactive Last Section
// Developed by programmer Ziad Al-Bakry
// ============================================================

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ANIMATION_EASE, ANIMATION_DURATION } from "../data/animations";

function Spark({ x, y, color, id }) {
  return (
    <motion.div
      key={id}
      initial={{ x, y, scale: 1, opacity: 1 }}
      animate={{
        x: x + (Math.random() - 0.5) * 120,
        y: y + (Math.random() - 0.5) * 120,
        scale: 0,
        opacity: 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      style={{
        position: "fixed",
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: color,
        pointerEvents: "none",
        zIndex: 9999,
        boxShadow: `0 0 8px ${color}`,
      }}
    />
  );
}

const SPARK_COLORS = [
  "#daa520",
  "#fff3a0",
  "#b8860b",
  "#f5d060",
  "#e8c840",
  "#fffbe0",
];

export default function SparkleBanner({ loaded }) {
  const [sparks, setSparks] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const counterRef = useRef(0);

  const spawnSparks = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const newSparks = Array.from({ length: 18 }, (_, i) => ({
      id: counterRef.current++,
      x: cx + (Math.random() - 0.5) * rect.width * 0.8,
      y: cy + (Math.random() - 0.5) * rect.height * 0.8,
      color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
    }));

    setSparks((prev) => [...prev.slice(-40), ...newSparks]);
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
    setTimeout(() => setSparks((prev) => prev.slice(newSparks.length)), 800);
  }, []);

  return (
    <>
      {/* Floating sparks */}
      <AnimatePresence>
        {sparks.map((s) => (
          <Spark key={s.id} {...s} />
        ))}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: ANIMATION_DURATION.slowest,
          delay: 1.3,
          ease: ANIMATION_EASE.smooth,
        }}
        style={{
          marginTop: 28,
        }}
      ></motion.div>
    </>
  );
}
