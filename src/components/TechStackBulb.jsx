import React, { useState, useMemo } from "react";

/**
 * Blocked angular sector for satellites (degrees, CSS rotate direction – clockwise).
 * Change these two numbers if your SVG uses a different orientation.
 * Example here blocks 225° → 315° (a 90° slice – roughly the lower‑left quadrant if 0° is at the right‑hand side).
 */
const BLOCKED_START = 80;
const BLOCKED_END   = 130;
const BLOCKED_WIDTH = BLOCKED_END - BLOCKED_START; // = 90°
const FULL_CIRCLE   = 360;

/**
 * Renders a single “bulb” ➜ central button + orbiting tech‑icons.
 * Expects a `data` prop shaped like one element in `techStackBulb` from index.js.
 */
const TechStackBulb = ({ data }) => {
    if (!data) return null; // safety guard

    const { techStack, imgPath, stack = [], stackLogo = [] } = data;
    const [open, setOpen] = useState(false);

    /**
     * Compute satellite positions, skipping the blocked angular slice.
     * Distribution rule:
     *   – Treat the 270° of allowed arc as one continuous ‘linear’ domain
     *   – Map each satellite’s index evenly along that domain
     *   – If a generated angle would fall inside the blocked slice, shift it forward by the slice width
     */
    const satellites = useMemo(() => {
        const count = stack.length;
        if (!count) return [];

        const radius = 110; // distance (px) from the centre – tweak as you wish
        const allowedSpan = FULL_CIRCLE - BLOCKED_WIDTH; // 270°
        const step = allowedSpan / count;               // equal slice per satellite

        return stack.map((label, idx) => {
            // 0° (CSS) is the point to the right ➜ we start there and move clockwise
            let angle = idx * step;

            // If this angle would land inside the forbidden sector, hop over it
            if (angle >= BLOCKED_START) {
                angle += BLOCKED_WIDTH; // skip the 90° slice
            }
            angle %= FULL_CIRCLE; // keep it within 0‑359

            const transform = `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`;

            return {
                label,
                logo: stackLogo[idx],
                transform,
            };
        });
    }, [stack, stackLogo]);

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
                {/* invisible dot keeps height consistent */}
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
