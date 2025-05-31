import React, { useState, useMemo } from "react";

/**
 * TechStackBulb
 * Satellites orbit around a central button, skipping the angular slice
 * [blockedStart → blockedEnd] that you pass in with each data object.
 * (Angles are CSS‑style: 0° is to the right, rotation is clockwise.)
 */
const FULL_CIRCLE = 360;

const TechStackBulb = ({ data }) => {
    if (!data) return null;

    const {
        techStack,
        imgPath,
        stack = [], // satellite labels
        stackLogo = [], // satellite logos
        // NEW ↓↓↓ – pull slice limits from index.js (fallback to previous default)
        blockedStart = 80,
        blockedEnd = 120,
    } = data;

    // width of the forbidden slice, normalised to 0‑360
    const blockedWidth = (blockedEnd - blockedStart + FULL_CIRCLE) % FULL_CIRCLE;

    const [open, setOpen] = useState(false);

    /**
     * Memoised satellite layout so re‑computes only when dependencies change.
     * Algorithm: map each satellite along the allowed arc (360 – blockedWidth)
     * then shift anything at/after blockedStart by blockedWidth.
     */
    const satellites = useMemo(() => {
        const count = stack.length;
        if (!count) return [];

        const radius = 110; // px distance from centre – tweak per design
        const allowedSpan = FULL_CIRCLE - blockedWidth;
        const step = allowedSpan / count;

        return stack.map((label, idx) => {
            let angle = idx * step;
            if (angle >= blockedStart) angle += blockedWidth; // hop the gap
            angle %= FULL_CIRCLE;

            const transform = `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`;

            return {
                label,
                logo: stackLogo[idx],
                transform,
            };
        });
    }, [stack, stackLogo, blockedStart, blockedWidth]);

    return (
        <div className="relative flex-center w-80 h-80 select-none">
            {/* central button */}
            <button
                type="button"
                aria-label={techStack}
                onClick={() => setOpen(!open)}
                className={`flex-col-center transition-colors duration-300 rounded-full w-52 h-52 md:w-60 md:h-60 border border-black-50 overflow-visible ${
                    open ? "bg-white-50 text-black" : "bg-[#18181B] text-white-50"
                }`}
                style={{ boxShadow: open ? "0 0 20px rgba(217,236,255,.4)" : "none" }}
            >
                {imgPath && (
                    <img
                        src={imgPath}
                        alt={`${techStack} logo`}
                        className="w-12 h-12 md:w-14 md:h-14 object-contain"
                    />
                )}
                <span className="font-semibold mt-2 md:mt-3 text-sm md:text-base uppercase tracking-wide">
          {techStack}
        </span>
                {/* invisible spacer keeps vertical rhythm */}
                <span className="block mt-auto mb-4 text-xs opacity-0">.</span>
            </button>

            {/* orbiting tech icons */}
            {satellites.map(({ label, logo, transform }, idx) => (
                <div
                    key={idx}
                    className={`absolute top-1/2 left-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full flex-col-center bg-white-50 text-black transition-opacity duration-500 ${
                        open ? "opacity-100 delay-100" : "opacity-0 pointer-events-none"
                    }`}
                    style={{ transform }}
                >
                    {logo && (
                        <img
                            src={logo}
                            alt={`${label} logo`}
                            className="w-8 h-8 md:w-10 md:h-10 object-contain"
                        />
                    )}
                    <span className="text-[10px] md:text-xs font-medium mt-1 text-center px-1 leading-tight">
            {label}
          </span>
                </div>
            ))}
        </div>
    );
};

export default TechStackBulb;
