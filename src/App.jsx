// ============================================================
// k. SCARF — Main App
// Developed by programmer Ziad El-Bakry
// ============================================================

import "./styles/global.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePageLoaded } from "./hooks/useAnimations";
import { SOCIAL_LINKS } from "./data/constants";
import { ANIMATION_DURATION, ANIMATION_EASE } from "./data/animations";
import AuroraStars   from "./components/AuroraStars";
import StoreHeader   from "./components/StoreHeader";
import SocialCard    from "./components/SocialCard";
import SparkleBanner from "./components/SparkleBanner";
import Footer        from "./components/Footer";
import SplashScreen  from "./components/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const loaded = usePageLoaded(80) && !showSplash;

  useEffect(() => {
    // Keyboard navigation for accessibility
    const handleKeyDown = (e) => {
      // Navigate through social links with arrow keys
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const links = document.querySelectorAll('a[href*="://"]');
        const currentIndex = Array.from(links).findIndex(link => link === document.activeElement);
        if (currentIndex >= 0) {
          e.preventDefault();
          const nextIndex = e.key === "ArrowDown" ? currentIndex + 1 : currentIndex - 1;
          if (links[nextIndex]) links[nextIndex].focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      dir="rtl"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        
        fontFamily: "'Cairo', Georgia, serif",
      }}
    >
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {/* ── Animated Background ── */}
      <AuroraStars />

      {/* ── Page content ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: ANIMATION_DURATION.normal,
          ease: ANIMATION_EASE.smooth,
        }}
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "clamp(320px, 90vw, 520px)",
          margin: "0 auto",
          padding: "clamp(24px, 8vw, 48px) clamp(12px, 5vw, 24px) clamp(20px, 6vw, 32px)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo + store name */}
        <StoreHeader loaded={loaded} />

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: ANIMATION_DURATION.slow,
            delay: 0.6,
            ease: ANIMATION_EASE.smooth,
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(8px, 2vw, 12px)",
          }}
        >
          {SOCIAL_LINKS.map((link, i) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, x: 20 }}
              animate={loaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
               transition={{
                duration: ANIMATION_DURATION.slow,
                delay: 0.8 + i * 0.08,
                ease: ANIMATION_EASE.smooth,
              }}
            >
              <SocialCard link={link} index={i} loaded={loaded} />
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive developer section */}
        <SparkleBanner loaded={loaded} />

        {/* Copyright footer */}
        <Footer loaded={loaded} />
      </motion.div>

      {/* ── Scroll indicator — pure CSS pulse ── */}
      <div
        style={{
          position: "fixed",
          bottom: "clamp(12px, 4vh, 24px)",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(16px, 2.5vw, 24px)",
          pointerEvents: "none",
          color: "rgba(224, 163, 184, 0.4)",
          animation: "kPulse 2.5s ease-in-out infinite",
        }}
      >
        ↓
      </div>
    </div>
  );
}
