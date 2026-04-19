// ============================================================
// k. SCARF — Background Component (High Performance Edition)
// ============================================================

import { useEffect, useState, useMemo } from "react";
import Snowfall from "react-snowfall";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// All animations are pure CSS — zero JS per frame, GPU compositor only.
const bgStyles = `
  @keyframes orb-float-1 {
    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.12; }
    50%       { transform: translateY(-30px) scale(1.06); opacity: 0.18; }
  }
  @keyframes orb-float-2 {
    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.08; }
    50%       { transform: translateY(20px) scale(1.08); opacity: 0.14; }
  }
  @keyframes grid-drift {
    0%   { background-position: 0% 0%; }
    100% { background-position: 80px 80px; }
  }
  .bg-orb {
    position: absolute;
    border-radius: 50%;
    will-change: transform, opacity;
    pointer-events: none;
  }
  .bg-orb-1 {
    width: 420px; height: 420px;
    top: -120px; left: -120px;
    background: #064e3b;
    filter: blur(130px);
    animation: orb-float-1 9s ease-in-out infinite;
  }
  .bg-orb-2 {
    width: 320px; height: 320px;
    bottom: -80px; right: -60px;
    background: #b48c1e;
    filter: blur(110px);
    animation: orb-float-2 11s ease-in-out infinite 2s;
  }
  .bg-orb-3 {
    width: 200px; height: 200px;
    top: 40%; left: 60%;
    background: #047857;
    filter: blur(80px);
    animation: orb-float-1 13s ease-in-out infinite 4s;
    opacity: 0.07;
  }
  .bg-orb-4 {
    width: 160px; height: 160px;
    top: 20%; left: 10%;
    background: #d4af37;
    filter: blur(70px);
    animation: orb-float-2 15s ease-in-out infinite 1s;
    opacity: 0.06;
  }
  .bg-grid {
    position: absolute;
    inset: 0;
    opacity: 0.025;
    background-image:
      linear-gradient(rgba(59,130,246,1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px);
    background-size: 80px 80px;
    animation: grid-drift 60s linear infinite;
    pointer-events: none;
    will-change: background-position;
  }
`;

export default function Background() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } },
      particles: {
        color: { value: "#e8d48a" },
        links: {
          color: "#e8d48a",
          distance: 120,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: true,
          speed: 0.6,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 70,
        },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2.5 } },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <>
      <style>{bgStyles}</style>

      {/* tsParticles Effect - Festive Gold Particles */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          style={{ position: "absolute", zIndex: 0, inset: 0, pointerEvents: "none" }}
        />
      )}

      {/* Snowfall effect over the entire background */}
      <Snowfall 
        color="#fff" 
        snowflakeCount={100} 
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1, 
          pointerEvents: "none",
          opacity: 0.3
        }} 
      />

      {/* Floating Eid Elements */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "15%", right: "8%", fontSize: "clamp(50px, 8vw, 80px)", opacity: 0.15,
          animation: "orb-float-1 8s ease-in-out infinite", filter: "drop-shadow(0 0 20px #e8d48a)"
        }}>
          🌙
        </div>
        <div style={{
          position: "absolute", top: "40%", left: "10%", fontSize: "clamp(40px, 6vw, 60px)", opacity: 0.12,
          animation: "orb-float-2 10s ease-in-out infinite 1s", filter: "drop-shadow(0 0 15px #e8d48a)"
        }}>
          🏮
        </div>
        <div style={{
          position: "absolute", bottom: "20%", right: "15%", fontSize: "clamp(45px, 7vw, 70px)", opacity: 0.14,
          animation: "orb-float-1 12s ease-in-out infinite 2s", filter: "drop-shadow(0 0 15px #e8d48a)"
        }}>
          🏮
        </div>
        <div style={{
          position: "absolute", bottom: "10%", left: "25%", fontSize: "clamp(30px, 5vw, 50px)", opacity: 0.08,
          animation: "orb-float-2 14s ease-in-out infinite 3s", filter: "drop-shadow(0 0 10px #e8d48a)"
        }}>
          ✨
        </div>
      </div>

      {/* Ambient orbs — pure CSS, no JS per frame */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
        <div className="bg-orb bg-orb-4" />
      </div>

      {/* Subtle animated grid */}
      <div className="bg-grid" />
    </>
  );
}
