import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaUserCircle } from "react-icons/fa";

import "../../styles/Reviews.css";

const testimonials = [
  {
    id: 1,
    title: "Rachel has been an amazing",
    message:
      "Support through a very difficult time of my life. I always look forward to my sessions with her, particularly how she understands the situation I am in and is able to give useful advice."
  },
  {
    id: 2,
    title: "Rachel is kind, compassionate and brilliant.",
    message:
      " She's helped me feel safe to open up and has made me feel heard. I've been to many therapists with little success or progress. So Rachel definitely stands out. She can really help, even with those with deep traumas we dont like to talk about. I would highly recommend her to my friends and family"
  },
  {
    id: 3,
    title: "Rachel is absolutely amazing.",
    message:
      "She listens to what you're telling her. She asks the important questions and offers practical solutions to help you be your best self. I couldn't recommend her more"
  },
  {
    id: 4,
    title: "I have had a few sessions with Rachel ",
    message:
      "She is very helpful and warm. I look forward to the sessions and find she is very good at encouraging my self motivation and Family issues."
  },
  {
    id: 5,
    title: "Great therapy so far regarding anxiety",
    message:
      ",lots of improvements have been made. Highly Recommend Rachel. Very easy to talk to and good advice."
  },
  {
    id: 6,
    title: "Really lovely, easy to talk to.",
    message:
      "Validates my feelings about things and helps with strategies not just to cope but to move forward too."
  },
];

// --- Sliding track constants ---
const N = testimonials.length; // 6
const CLONE_COUNT = 4; // clones on each side (handles up to 2-step clicks at any position)

// Extended: [t[2],t[3],t[4],t[5], t[0],t[1],t[2],t[3],t[4],t[5], t[0],t[1],t[2],t[3]]
// Indices:    0    1    2    3     4    5    6    7    8    9    10   11   12   13
const extended = [
  ...testimonials.slice(N - CLONE_COUNT),
  ...testimonials,
  ...testimonials.slice(0, CLONE_COUNT),
];

const REAL_START = CLONE_COUNT; // = 4 — index of testimonials[0] in extended

// If trackPos is in a clone region, return the equivalent real-item position.
// Returns null when already at a real position (no snap needed).
const getSnapTarget = (pos) => {
  if (pos < REAL_START) return pos + N;
  if (pos >= REAL_START + N) return pos - N;
  return null;
};

// --- Component ---
const Reviews = () => {
  // trackPos: which index in `extended` is currently centred in the viewport
  const [trackPos, setTrackPos] = useState(REAL_START);
  // displayedTIndex: which testimonials[] entry the card is showing (0 – N-1)
  const [displayedTIndex, setDisplayedTIndex] = useState(0);
  // cardFading: true during the 160ms content swap window
  const [cardFading, setCardFading] = useState(false);
  // isSnapping: true for two rAF frames during the invisible position reset
  const [isSnapping, setIsSnapping] = useState(false);
  // isAnimating: blocks overlapping navigations
  const [isAnimating, setIsAnimating] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Refs — avoid stale closures in timer callbacks
  const isPausedRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const trackPosRef = useRef(REAL_START);
  const timerRef = useRef(null);
  const trackRef = useRef(null);
  const navigateRef = useRef(null);

  // Keep refs in sync with state
  useEffect(() => { isAnimatingRef.current = isAnimating; }, [isAnimating]);
  useEffect(() => { trackPosRef.current = trackPos; }, [trackPos]);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, []);

  // Core navigate function.
  // steps: positive = next (track slides left), negative = prev (slides right)
  const navigate = useCallback((steps) => {
    if (isAnimatingRef.current) return;

    const currentPos = trackPosRef.current;
    // Map to real testimonial index (0 – N-1)
    const newTIndex = ((currentPos - REAL_START + steps) % N + N) % N;

    if (reducedMotion) {
      // Instant switch — no animation, no fade
      setTrackPos(REAL_START + newTIndex);
      setDisplayedTIndex(newTIndex);
      return;
    }

    isAnimatingRef.current = true;
    setIsAnimating(true);

    // Start avatar track animation immediately
    setTrackPos(currentPos + steps);

    // Card: fade-out → swap content → fade-in
    setCardFading(true);
    setTimeout(() => {
      setDisplayedTIndex(newTIndex);
      setCardFading(false);
    }, 160);
  }, [reducedMotion]); // reducedMotion only — trackPos accessed via ref

  // Keep navigateRef pointing to the latest navigate for the timer closure
  useEffect(() => { navigateRef.current = navigate; }, [navigate]);

  // Autoplay timer — stable, only recreated when reducedMotion changes
  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    if (!reducedMotion) {
      timerRef.current = setInterval(() => {
        if (!isPausedRef.current) {
          navigateRef.current(1);
        }
      }, 5000);
    }
  }, [reducedMotion]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  // After the track CSS transition ends, snap back to real position if needed
  const handleTransitionEnd = useCallback((e) => {
    // Only react to our track element's transform transition
    if (e.target !== trackRef.current) return;
    if (e.propertyName !== "transform") return;

    const snapTarget = getSnapTarget(trackPosRef.current);

    if (snapTarget !== null) {
      // Disable all transitions, jump track to real position (invisible — clone = real visually)
      setIsSnapping(true);
      setTrackPos(snapTarget);
      // Two rAF cycles: first paints the snapped position, second re-enables transitions
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsSnapping(false);
          setIsAnimating(false);
          isAnimatingRef.current = false;
        });
      });
    } else {
      setIsAnimating(false);
      isAnimatingRef.current = false;
    }
  }, []);

  const handleNext = useCallback(() => {
    navigate(1);
    resetTimer();
  }, [navigate, resetTimer]);

  const handlePrev = useCallback(() => {
    navigate(-1);
    resetTimer();
  }, [navigate, resetTimer]);

  // Clicking a non-active visible slot: navigate by the shortest direction
  const handleSlotClick = useCallback((extIdx) => {
    const steps = extIdx - trackPosRef.current;
    if (steps === 0) return;
    navigate(steps);
    resetTimer();
  }, [navigate, resetTimer]);

  // translateX = -(trackPos - 2) slot-widths.
  // When trackPos = REAL_START (4): offset = -2  → shows extended[2..6] with t[0] centred.
  // When trackPos = REAL_START+5 (9): offset = -7 → shows extended[7..11] with t[5] centred.
  const trackOffset = -(trackPos - 2);

  return (
    <div
      id="testimonials"
      className="testimonial-carousel"
      onMouseEnter={() => { isPausedRef.current = true; }}
      onMouseLeave={() => { isPausedRef.current = false; }}
      onFocus={() => { isPausedRef.current = true; }}
      onBlur={() => { isPausedRef.current = false; }}
    >
      <FaQuoteLeft className="ornament one" aria-hidden="true" />
      <FaQuoteRight className="ornament three" aria-hidden="true" />
      <FaStar className="ornament two" aria-hidden="true" />
      <FaQuoteLeft className="ornament four" aria-hidden="true" />

      <h2>Here is what our Clients are saying About us</h2>

      {/* Testimonial card */}
      <div className="testimonial-card-wrapper">
        <div className="testimonial-card">
          <button
            className="arrow left-arrow"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            &#8249;
          </button>
          <div className={`testimonial-content${cardFading ? " card-fading" : ""}`}>
            <FaQuoteLeft className="quote-icon" aria-hidden="true" />
            <h3>{testimonials[displayedTIndex].title}</h3>
            <p>{testimonials[displayedTIndex].message}</p>
          </div>
          <button
            className="arrow right-arrow"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            &#8250;
          </button>
        </div>
        <div className="testimonial-card-arrow"></div>
      </div>

      <FaStar className="ornament four-bottom" aria-hidden="true" />
      <FaQuoteRight className="ornament five" aria-hidden="true" />

      {/* Avatar sliding track */}
      <div className="profile">
        <div className="avatar-viewport" aria-label="Select a testimonial">
          <div
            ref={trackRef}
            className={`avatar-track${isSnapping ? " snapping" : ""}`}
            style={{
              transform: `translateX(calc(${trackOffset} * var(--slot-w)))`,
              transition: isSnapping
                ? "none"
                : "transform 450ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((item, idx) => {
              const isActive = idx === trackPos;
              const inView = idx >= trackPos - 2 && idx <= trackPos + 2;
              return (
                <div
                  key={idx}
                  className={`avatar-slot${isActive ? " active-slot" : ""}`}
                  role={inView && !isActive ? "button" : undefined}
                  tabIndex={inView && !isActive ? 0 : -1}
                  aria-label={
                    inView
                      ? `View review ${((idx - REAL_START + N * 10) % N) + 1}`
                      : undefined
                  }
                  onClick={() => !isActive && handleSlotClick(idx)}
                  onKeyDown={(e) => {
                    if (!isActive && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      handleSlotClick(idx);
                    }
                  }}
                >
                  <FaUserCircle
                    className={`avatar${isActive ? " active-avatar" : ""}`}
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
