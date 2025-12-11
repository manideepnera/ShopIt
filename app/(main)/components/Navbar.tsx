"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import MobileNav from "./Nav/MobileNav";
import DesktopNav from "./Nav/DesktopNav";

/**
 * Unified Navbar (mobile + desktop) with directional slide+fade:
 *  - show  -> slide down + fade in (gentle easing, a bit slower)
 *  - hide  -> slide up   + fade out (snappier easing, a bit faster)
 *
 * Uses a prevShow ref to choose different transition strings for each direction.
 */

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [showNav, setShowNav] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // tuning
  const DELTA = 10;
  // full hidden offset (moves nav completely out of viewport above)
  const OFFSET = "calc(-100% - 8px)";
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // keep previous show state to choose different transitions depending on direction
  const prevShowRef = useRef(showNav);
  useEffect(() => {
    prevShowRef.current = showNav;
  }, [showNav]);

  useEffect(() => {
    const hasWindow = typeof window !== "undefined";
    const getPref = () =>
      hasWindow &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasWindow) {
      setPrefersReducedMotion(Boolean(getPref()));
    }

    const onScroll = () => {
      if (!hasWindow) return;
      const currentY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const diff = currentY - lastScrollY.current;
          if (currentY <= 0) {
            setShowNav(true);
          } else if (diff > DELTA) {
            setShowNav(false);
          } else if (diff < -DELTA) {
            setShowNav(true);
          }
          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    if (hasWindow && !getPref()) {
      lastScrollY.current = window.scrollY;
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      setShowNav(true);
    }

    let mq: MediaQueryList | null = null;
    const handleMQChange = (ev: MediaQueryListEvent | MediaQueryList) => {
      const nowPref = Boolean((ev as MediaQueryList).matches ?? false);
      setPrefersReducedMotion(nowPref);

      if (nowPref) {
        try {
          window.removeEventListener("scroll", onScroll);
        } catch (e) {}
        setShowNav(true);
      } else {
        lastScrollY.current = window.scrollY;
        window.addEventListener("scroll", onScroll, { passive: true });
      }
    };

    if (hasWindow && typeof window.matchMedia === "function") {
      mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (typeof mq.addEventListener === "function") {
        mq.addEventListener("change", handleMQChange as EventListener);
      } else if (typeof mq.addListener === "function") {
        // legacy
        // @ts-ignore
        mq.addListener(handleMQChange);
      }
    }

    return () => {
      if (hasWindow) {
        try {
          window.removeEventListener("scroll", onScroll);
        } catch (e) {}
      }
      if (mq) {
        if (typeof mq.removeEventListener === "function") {
          mq.removeEventListener("change", handleMQChange as EventListener);
        } else if (typeof mq.removeListener === "function") {
          // @ts-ignore
          mq.removeListener(handleMQChange);
        }
      }
    };
  }, []);

  // Compose a transition string depending on whether we're showing or hiding.
  // Showing -> smoother, slightly longer easing out.
  // Hiding  -> snappier, slightly shorter easing in.
  const transitionFor = (visible: boolean) => {
    if (prefersReducedMotion) return "none";

    // detect direction: compare current request with previous frame's value
    const wasVisible = prevShowRef.current;
    const isShowing = visible && !wasVisible;
    const isHiding = !visible && wasVisible;

    // default (covers initial render or unchanged): gentle combo
    if (!isShowing && !isHiding) {
      return `transform 420ms cubic-bezier(.22,.9,.27,1), opacity 260ms linear`;
    }

    if (isShowing) {
      // Slide down + fade in — slightly slower and softer easing for pleasing entrance
      // add a small opacity delay so transform leads and it feels like a slide-then-reveal
      return `transform 480ms cubic-bezier(.16,.98,.35,1), opacity 260ms linear 60ms`;
    } else {
      // isHiding: Slide up + fade out — snappier, no delay
      return `transform 320ms cubic-bezier(.4,0,.2,1), opacity 180ms linear`;
    }
  };

  // inline style factory used for both Mobile and Desktop nav roots
  const navStyle = (visible: boolean): React.CSSProperties =>
    ({
      transform: visible ? "translateY(0)" : `translateY(${OFFSET})`,
      transition: transitionFor(visible),
      opacity: visible ? 1 : 0,
      willChange: "transform, opacity",
      pointerEvents: visible ? "auto" : "none",
      // small optimization to force GPU compositing and reduce flicker
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
    } as React.CSSProperties);

  

  return (
    <>
      {/* render the imported MobileNav component and pass typed props */}
      <MobileNav navStyle={navStyle} showNav={showNav} />

      <DesktopNav navStyle={navStyle} showNav={showNav} query={query} setQuery={setQuery} />
    </>
  );
}
