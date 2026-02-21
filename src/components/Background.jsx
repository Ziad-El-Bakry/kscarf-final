// ============================================================
// k. SCARF — Background Component (High Performance Edition)
// ============================================================

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
    background: #0d3b4a;
    filter: blur(130px);
    animation: orb-float-1 9s ease-in-out infinite;
  }
  .bg-orb-2 {
    width: 320px; height: 320px;
    bottom: -80px; right: -60px;
    background: #1a5276;
    filter: blur(110px);
    animation: orb-float-2 11s ease-in-out infinite 2s;
  }
  .bg-orb-3 {
    width: 200px; height: 200px;
    top: 40%; left: 60%;
    background: #0b3d5e;
    filter: blur(80px);
    animation: orb-float-1 13s ease-in-out infinite 4s;
    opacity: 0.10;
  }
  .bg-orb-4 {
    width: 160px; height: 160px;
    top: 20%; left: 10%;
    background: #0e2d3d;
    filter: blur(70px);
    animation: orb-float-2 15s ease-in-out infinite 1s;
    opacity: 0.09;
  }
  .bg-grid {
    position: absolute;
    inset: 0;
    opacity: 0.022;
    background-image:
      linear-gradient(rgba(100,200,220,1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(100,200,220,1) 1px, transparent 1px);
    background-size: 80px 80px;
    animation: grid-drift 60s linear infinite;
    pointer-events: none;
    will-change: background-position;
  }
`;

export default function Background() {
  return (
    <>
      <style>{bgStyles}</style>

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
