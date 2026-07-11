import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LOGO_SRC } from "../data/logo";

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // give time for exit animation
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(15px)", scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#06030A",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Ambient Gold Glow Behind Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 1], opacity: [0, 0.4, 0.15] }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: "clamp(200px, 50vw, 400px)",
              height: "clamp(100px, 25vw, 200px)",
              background: "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.35) 0%, transparent 70%)",
              filter: "blur(25px)",
              zIndex: 1,
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              width: "clamp(220px, 60vw, 350px)",
              height: "clamp(80px, 25vw, 130px)",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Logo with contrast boost, screen blend, and edge fade to perfectly integrate the background */}
            <motion.img
              animate={{ 
                filter: [
                  "contrast(1.2) brightness(0.9) drop-shadow(0 0 0px rgba(212,175,55,0))", 
                  "contrast(1.2) brightness(1.15) drop-shadow(0 0 25px rgba(212,175,55,0.4))", 
                  "contrast(1.2) brightness(1) drop-shadow(0 0 10px rgba(212,175,55,0.2))"
                ] 
              }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              src={LOGO_SRC}
              alt="Loading"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                mixBlendMode: "screen",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 65%, transparent 100%)",
                maskImage: "radial-gradient(ellipse at center, black 65%, transparent 100%)",
              }}
            />
          </motion.div>
          
          {/* Animated Gold Progress Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "clamp(150px, 40vw, 250px)", opacity: [0, 1, 0] }}
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
            style={{
              position: "absolute",
              bottom: "35%",
              height: "1px",
              background: "linear-gradient(to right, transparent, rgba(212, 175, 55, 0.8), transparent)",
              zIndex: 2,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
