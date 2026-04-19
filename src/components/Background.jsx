// ============================================================
// k. SCARF — Background Component (Midnight Amethyst Edition)
// ============================================================

const bgStyles = `
  @keyframes blob-float-1 {
    0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.6; }
    33%       { transform: translate(30px, -50px) scale(1.1); opacity: 0.8; }
    66%       { transform: translate(-20px, 20px) scale(0.9); opacity: 0.7; }
  }
  @keyframes blob-float-2 {
    0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.5; }
    33%       { transform: translate(-40px, 40px) scale(0.95); opacity: 0.7; }
    66%       { transform: translate(20px, -20px) scale(1.05); opacity: 0.6; }
  }
  @keyframes twinkle {
    0% { opacity: 0; transform: scale(0.5); }
    50% { opacity: 1; transform: scale(1.2); }
    100% { opacity: 0; transform: scale(0.5); }
  }
  @keyframes spark-drift {
    0% { transform: translateY(0) translateX(0); opacity: 0; }
    20% { opacity: var(--max-opacity, 0.8); }
    80% { opacity: var(--max-opacity, 0.8); }
    100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
  }
  .bg-orb {
    position: absolute;
    border-radius: 50%;
    will-change: transform, opacity;
    pointer-events: none;
    filter: blur(90px);
  }
  .bg-orb-1 {
    width: 60vw; height: 60vw;
    top: -20vw; left: -10vw;
    background: #36175E; /* Deep Purple */
    animation: blob-float-1 15s ease-in-out infinite;
  }
  .bg-orb-2 {
    width: 70vw; height: 70vw;
    bottom: -30vw; right: -20vw;
    background: #802360; /* Midnight Magenta */
    filter: blur(120px);
    animation: blob-float-2 18s ease-in-out infinite 2s;
  }
  .bg-orb-3 {
    width: 50vw; height: 50vw;
    top: 30%; left: 40%;
    background: #1B2956; /* Deep Indigo / Blue */
    animation: blob-float-1 20s ease-in-out infinite 4s;
    opacity: 0.5;
  }
  .bg-grain {
    position: fixed;
    top: -50%; left: -50%;
    right: -50%; bottom: -50%;
    width: 200%; height: 200%;
    background: url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
    opacity: 0.04;
    pointer-events: none;
    z-index: 1;
  }
`;

export default function Background() {
  return (
    <>
      <style>{bgStyles}</style>

      {/* Ambient orbs — pure CSS */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      {/* Magical Sparks / Twinkling effects */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              background: ["#E0A3B8", "#D8BFD8", "#FFB6C1", "#FFFFFF"][Math.floor(Math.random() * 4)],
              borderRadius: "50%",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + 100 + "%",
              boxShadow: "0 0 8px rgba(255,182,193,0.8)",
              "--max-opacity": Math.random() * 0.5 + 0.3,
              animation: `spark-drift ${Math.random() * 15 + 10}s linear infinite ${Math.random() * 10}s, twinkle ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="bg-grain" />
    </>
  );
}
