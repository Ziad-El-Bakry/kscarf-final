// ============================================================
// k. SCARF — AuroraStars Background Component
// Developed by programmer Ziad El-Bakry
// ============================================================

import { useEffect, useRef } from "react";

export default function AuroraStars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;
    const STAR_COUNT = 90;
    let stars = [];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      buildStars();
    }

    function buildStars() {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.1 + 0.2,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        phase: Math.random() * Math.PI * 2,
        speed: 0.004 + Math.random() * 0.006,
      }));
    }

    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // ── Aurora orbs ──────────────────────────────────────
      const orbs = [
        {
          x: W * 0.15 + Math.sin(t * 0.6) * W * 0.05,
          y: H * 0.15 + Math.cos(t * 0.5) * H * 0.08,
          rx: W * 0.38,
          ry: H * 0.38,
          color: "rgba(120, 40, 200, 0.18)",
        },
        {
          x: W * 0.82 + Math.cos(t * 0.45) * W * 0.06,
          y: H * 0.75 + Math.sin(t * 0.55) * H * 0.07,
          rx: W * 0.32,
          ry: H * 0.32,
          color: "rgba(180, 55, 140, 0.14)",
        },
        {
          x: W * 0.5 + Math.sin(t * 0.35) * W * 0.08,
          y: H * 0.45 + Math.cos(t * 0.4) * H * 0.06,
          rx: W * 0.25,
          ry: H * 0.25,
          color: "rgba(80, 20, 160, 0.13)",
        },
      ];

      orbs.forEach((orb) => {
        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.rx);
        g.addColorStop(0, orb.color);
        g.addColorStop(1, "transparent");
        ctx.save();
        ctx.scale(1, orb.ry / orb.rx);
        ctx.beginPath();
        ctx.arc(orb.x, orb.y * (orb.rx / orb.ry), orb.rx, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.restore();
      });

      // ── Stars ─────────────────────────────────────────────
      stars.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.phase += s.speed;

        if (s.x < 0) s.x = W;
        if (s.x > W) s.x = 0;
        if (s.y < 0) s.y = H;
        if (s.y > H) s.y = 0;

        const alpha = 0.25 + 0.55 * Math.abs(Math.sin(s.phase));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      t += 0.008;
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}
  