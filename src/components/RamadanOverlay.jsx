// ============================================================
// k. SCARF — RamadanOverlay Component
// Pure CSS animations — zero JS per frame, GPU compositor only.
// ============================================================

// ── Injected styles ──────────────────────────────────────────
const ramadanStyles = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.15; transform: scale(1); }
    50%       { opacity: 0.95; transform: scale(1.35); }
  }
  @keyframes crescentGlow {
    0%, 100% { box-shadow: 0 0 18px 4px rgba(212,160,23,0.20), 0 0 40px 10px rgba(212,160,23,0.08); }
    50%       { box-shadow: 0 0 30px 8px rgba(212,160,23,0.40), 0 0 70px 20px rgba(212,160,23,0.15); }
  }
  @keyframes lanternSway {
    0%, 100% { transform: rotate(-5deg) translateY(0px); }
    50%       { transform: rotate(5deg)  translateY(3px); }
  }
  @keyframes lanternGlow {
    0%, 100% { opacity: 0.55; }
    50%       { opacity: 0.90; }
  }
  @keyframes fadeInRamadan {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0);    }
  }

  .rm-overlay {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 5;
    overflow: hidden;
  }

  /* ── Stars ── */
  .rm-star {
    position: absolute;
    border-radius: 50%;
    background: #e8d48a;
    will-change: transform, opacity;
  }

  /* ── Crescent ── */
  .rm-crescent-wrap {
    position: absolute;
    top: clamp(18px, 4vh, 36px);
    right: clamp(18px, 5vw, 48px);
    //width: clamp(48px, 9vw, 72px);
    height: clamp(48px, 9vw, 72px);
    animation: crescentGlow 3.5s ease-in-out infinite;
  }
  .rm-crescent-outer {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: #e8d48a;
  }
  .rm-crescent-inner {
    position: absolute;
    top: 10%;
    right: -12%;
    width: 82%;
    height: 82%;
    border-radius: 60%;
    background: #0a1a2e;
  }

  /* ── Lantern shared ── */
  .rm-lantern {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform-origin: top center;
    will-change: transform, opacity;
    animation:
      lanternSway 4s ease-in-out infinite,
      lanternGlow 3s ease-in-out infinite;
  }
  .rm-lantern-body {
    border-radius: 40% 40% 50% 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .rm-lantern-body::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 60%);
    border-radius: inherit;
  }
  .rm-lantern-top {
    width: 40%;
    background: rgba(212,160,23,0.8);
    border-radius: 3px 3px 0 0;
  }
  .rm-lantern-string {
    width: 1.5px;
    background: rgba(212,160,23,0.5);
  }
  .rm-lantern-bottom {
    width: 8px;
    height: 14px;
    background: linear-gradient(to bottom, rgba(212,160,23,0.8), transparent);
    border-radius: 0 0 50% 50%;
  }
  .rm-lantern-glow {
    position: absolute;
    inset: -30%;
    border-radius: 50%;
    pointer-events: none;
  }

  /* big lantern — left */
  .rm-lantern-left {
    top: clamp(60px, 12vh, 120px);
    left: clamp(10px, 3vw, 36px);
    animation-duration: 4.2s, 3.3s;
    animation-delay: 0s, 0.4s;
  }
  .rm-lantern-left .rm-lantern-body {
    width: clamp(24px, 4.5vw, 38px);
    height: clamp(36px, 7vw, 56px);
    background: linear-gradient(135deg, #c8860a, #d4a017, #e8b830);
    border: 1px solid rgba(212,160,23,0.6);
    box-shadow: 0 0 14px 4px rgba(212,160,23,0.3), inset 0 0 10px rgba(255,200,60,0.25);
  }
  .rm-lantern-left .rm-lantern-top  { height: clamp(5px,1vw,8px); }
  .rm-lantern-left .rm-lantern-string { height: clamp(16px,3vh,26px); }
  .rm-lantern-left .rm-lantern-glow {
    background: radial-gradient(circle, rgba(212,160,23,0.25), transparent 65%);
  }

  /* small lantern — right */
  .rm-lantern-right {
    top: clamp(90px, 17vh, 160px);
    right: clamp(12px, 4vw, 48px);
    animation-duration: 3.6s, 2.8s;
    animation-delay: 0.8s, 1.2s;
  }
  .rm-lantern-right .rm-lantern-body {
    width: clamp(18px, 3.2vw, 28px);
    height: clamp(26px, 5vw, 40px);
    background: linear-gradient(135deg, #a05c06, #c8860a, #d4a017);
    border: 1px solid rgba(180,120,10,0.6);
    box-shadow: 0 0 10px 3px rgba(180,120,10,0.28), inset 0 0 8px rgba(255,180,40,0.2);
  }
  .rm-lantern-right .rm-lantern-top  { height: clamp(4px,0.8vw,6px); }
  .rm-lantern-right .rm-lantern-string { height: clamp(12px,2.5vh,20px); }
  .rm-lantern-right .rm-lantern-glow {
    background: radial-gradient(circle, rgba(180,120,10,0.22), transparent 65%);
  }
`;

// ── Star data (generated once at module level) ────────────────
const STARS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  top:  `${5 + Math.sin(i * 7.3) * 40 + 42}%`,
  left: `${3 + ((i * 37) % 94)}%`,
  size: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1.5,
  delay: `${(i * 0.37) % 3.2}s`,
  duration: `${1.8 + (i % 5) * 0.6}s`,
}));

function Lantern({ side }) {
  return (
    <div className={`rm-lantern rm-lantern-${side}`}>
      <div className="rm-lantern-top" />
      <div className="rm-lantern-string" />
      <div className="rm-lantern-body">
        <div className="rm-lantern-glow" />
      </div>
      <div className="rm-lantern-bottom" />
    </div>
  );
}

export default function RamadanOverlay() {
  return (
    <>
      <style>{ramadanStyles}</style>

      <div className="rm-overlay" aria-hidden="true">
        {/* Stars */}
        {STARS.map((s) => (
          <div
            key={s.id}
            className="rm-star"
            style={{
              top: s.top,
              left: s.left,
              width:  s.size,
              height: s.size,
              animationName: "twinkle",
              animationDuration: s.duration,
              animationDelay: s.delay,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }}
          />
        ))}

        {/* Crescent moon */}
        <div className="rm-crescent-wrap">
          <div className="rm-crescent-outer" />
          <div className="rm-crescent-inner" />
        </div>

        {/* Lanterns */}
        <Lantern side="left" />
        <Lantern side="right" />
      </div>
    </>
  );
}
