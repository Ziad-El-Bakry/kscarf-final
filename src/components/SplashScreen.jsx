import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LOGO_SRC } from "../data/logo";

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600); // give time for exit animation
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#08040C",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: "clamp(120px, 40vw, 180px)",
              height: "clamp(120px, 40vw, 180px)",
              position: "relative",
            }}
          >
            {/* Logo */}
            <img
              src={LOGO_SRC}
              alt="Loading"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                position: "relative",
                zIndex: 2,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
