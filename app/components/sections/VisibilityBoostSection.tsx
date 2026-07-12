"use client";

import Image from "next/image";
import { animate, motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const visibilityBoostLogos = [
  "/logos/business_logo-jukebox-bg-removed.png",
  "/logos/trace_presence_png-2jan-resize-300-jukebox-bg-removed.png",
  "/logos/unnamed (1)-jukebox-bg-removed.png",
  "/logos/unnamed (2)-jukebox-bg-removed.png",
  "/logos/unnamed (3)-jukebox-bg-removed.png",
  "/logos/unnamed (4)-jukebox-bg-removed.png",
  "/logos/unnamed (5)-jukebox-bg-removed.png",
  "/logos/unnamed-jukebox-bg-removed.png",
  "/logos/unnamed-jukebox-bg-removed-2.png",
] as const;

const marqueeLogos = [...visibilityBoostLogos, ...visibilityBoostLogos] as const;

function AnimatedCount({ target, suffix = "", start }: { target: number; suffix?: string; start: boolean }) {
  const motionValue = useMotionValue(0);
  const [value, setValue] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);
  const frameRef = useRef<number | null>(null);

  useMotionValueEvent(motionValue, "change", () => {
    if (frameRef.current !== null) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      setValue(Math.min(target, Math.floor(motionValue.get())));
    });
  });

  useEffect(() => {
    if (!start) {
      return undefined;
    }

    controlsRef.current?.stop();
    setValue(0);
    setIsComplete(false);
    motionValue.set(0);

    controlsRef.current = animate(motionValue, target, {
      duration: 9,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => {
        setValue(target);
        setIsComplete(true);
      },
    });

    return () => {
      controlsRef.current?.stop();
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [motionValue, start, target]);

  const shouldShowSuffix = isComplete || value >= Math.max(target - 1, 0);

  return (
    <span className="visibility-boost__value">
      {value}
      <motion.span
        aria-hidden="true"
        className="inline-block"
        initial={false}
        animate={shouldShowSuffix ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 6 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        {suffix}
      </motion.span>
    </span>
  );
}

export function VisibilityBoostSection() {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.section
      ref={ref}
      className="visibility-boost relative overflow-hidden bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.08),transparent_26%),linear-gradient(180deg,#171717_0%,#151515_100%)]"
      id="visibility-boost"
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="visibility-boost__inner" variants={containerVariants}>
        <motion.div className="visibility-boost__media" aria-hidden="true" variants={itemVariants}>
          <img
            className="visibility-boost__image"
            src="/Untitled%20design%20(14).png"
            alt=""
            loading="lazy"
          />
        </motion.div>

        <motion.div className="visibility-boost__body" variants={containerVariants}>
          <motion.div className="visibility-boost__content" variants={itemVariants}>
            <h2 className="visibility-boost__title">Be on the Top & Get More Traffic to Your Website</h2>
            <p className="visibility-boost__copy">
              Stay ahead of the curve with our proven AI-first strategies for more traffic and
              ultimately more leads. Your brand&apos;s visibility on every platform is our #1 goal.
            </p>
          </motion.div>

          <motion.div className="visibility-boost__stats" aria-label="Performance highlights" variants={containerVariants}>
            <motion.div className="visibility-boost__stat" variants={itemVariants}>
              <AnimatedCount target={20} suffix="+" start={hasAnimated} />
              <span className="visibility-boost__label">Happy clients</span>
            </motion.div>
            <motion.div className="visibility-boost__stat" variants={itemVariants}>
              <AnimatedCount target={100} suffix="+" start={hasAnimated} />
              <span className="visibility-boost__label">Finished projects</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="visibility-boost__logos" aria-label="Client logos">
        <motion.div
          className="visibility-boost__logosTrack"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {marqueeLogos.map((logoPath, index) => (
          <div key={`${logoPath}-${index}`} className="visibility-boost__logo">
            <Image
              src={logoPath}
              alt=""
              aria-hidden="true"
              width={180}
              height={90}
              className="visibility-boost__logoImage"
            />
          </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
