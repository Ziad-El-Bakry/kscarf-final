// ============================================================
// k. SCARF — Custom Hooks
// Developed by programmer Ziad Al-Bakry
// ============================================================

import { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

/** Track mouse/pointer position */
export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return pos;
}

/** Delay-mount to trigger CSS entrance animations */
export function usePageLoaded(delayMs = 80) {
  const [loaded, setLoaded] = useState(false);
  

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);

  return loaded;
}

/** Hook to trigger animation when element comes into view */
export function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return { ref, isInView };
}

/** Hook for staggered list animations */
export function useStaggerAnimation(itemCount, delayBetween = 0.1) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return {
    containerRef,
    isInView,
    getItemDelay: (index) => (isInView ? index * delayBetween : 0),
  };
}
