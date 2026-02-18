// ============================================================
// k. SCARF — Background Component (Midnight Tech Edition)
// ============================================================
import { useMemo } from "react";
import { motion } from "framer-motion";

const PARTICLE_COLORS = ["#1e3a8a", "#2563eb", "#1d4ed8", "#0ea5e9"];

function generateParticles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 70 + 20,
    left: Math.random() * 100,
    top: Math.random() * 100,
    color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    duration: Math.random() * 6 + 5,
    delay: Math.random() * 4,
  }));
}

export default function Background({ mouseX, mouseY }) {
  const particles = useMemo(() => generateParticles(14), []);

  return (
    <>
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.25) 1px, transparent 1px)",
          opacity: 0.2,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* Cursor soft glow */}
      <motion.div
        animate={{
          left: mouseX - 300,
          top: mouseY - 150,
        }}
        transition={{ type: "tween", duration: 0.15 }}
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 40,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Ambient mesh lights */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <motion.div
          animate={{ opacity: [0.1, 0.16, 0.1], scale: [1, 1.06, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            top: -120,
            left: -120,
            borderRadius: "50%",
            background: "#1e3a8a",
            filter: "blur(140px)",
          }}
        />

        <motion.div
          animate={{ opacity: [0.08, 0.14, 0.08], scale: [1, 1.08, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            bottom: -80,
            right: -60,
            borderRadius: "50%",
            background: "#2563eb",
            filter: "blur(120px)",
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            opacity: [0.04, 0.1, 0.04],
            y: [0, -25, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            borderRadius: "50%",
            background: p.color,
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />
    </>
  );
}
