import React, { useState, useMemo } from "react";
import { techStackBulb as sampleData } from "../constants"; // adjust path if needed

// Global counter to auto‑assign different data sets when none is passed
let autoBulbIdx = 0;

/**
 * TechStackBulb
 * -------------
 * Interactive radial "bulb" component.
 *
 * • Central circle shows the tech‑stack name + logo.
 * • On click the centre toggles open ⇒ colour flips (#18181B → #d9ecff) and
 *   satellites appear.
 * • Satellites are evenly distributed EXCEPT we leave a 90° gap between
 *   225° and 315° (bottom‑right quadrant) so extra info can sit there.
 *
 * Props
 * -----
 * @param {Object} data – { techStack, imgPath, stack, stackLogo[] }
 */
const TechStackBulb = ({ data }) => {
    // If no data prop, cycle through sampleData automatically so each instance
    // gets a different tech‑stack even when the parent forgets to pass one.
    const bulbData = useMemo(() => {
        if (data) return data;
        const item = sampleData[autoBulbIdx % sampleData.length];
        autoBulbIdx += 1;
        return item;
    }, [data]);

    const { techStack, imgPath, stack, stackLogo } = bulbData;
    const [open, setOpen] = useState(false);

    /**
     * Compute satellite placement.
     * We have a forbidden arc (gap) from 225° → 315°.
     * The usable arc is 270° (360 – 90). We step through that arc evenly,
     * then shift any angle ≥ 225° forward by the gap size to skip it.
     */
    const satellites = useMemo(() => {
        const count = stack.length;
        const gapStart = 225;
        const gapEnd = 315;
        const gapSize = gapEnd - gapStart; // 90°
        const usableArc = 360 - gapSize; // 270°

        return stack.map((item, i) => {
            // Start at -90° (straight up) so text sits top when first.
            let angle = -90 + (usableArc / count) * i;

            // Normalise to 0‑359 for easier comparison.
            let norm = (angle + 360) % 360;
            if (norm >= gapStart) {
                norm += gapSize; // hop over the forbidden zone
            }
            angle = norm;

            return {
                label: item,
                logo: stackLogo[i],
                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(110px) rotate(${-angle}deg)`
            };
        });
    }, [stack, stackLogo]);

    return (
        <div className="relative flex-center w-80 h-80 select-none">
            {/* Central circle */}
            <button
                type="button"
                aria-label={techStack}
                onClick={() => setOpen(!open)}
                className={`flex-col-center transition-colors duration-300 rounded-full w-52 h-52 md:w-60 md:h-60 border border-black-50 overflow-visible ${
                    open ? "bg-white-50 text-black" : "bg-[#18181B] text-white-50"
                }`}
                style={{ boxShadow: open ? "0 0 20px rgba(217,236,255,.4)" : "none" }}
            >
                {/* Logo */}
                {imgPath && (
                    <img
                        src={imgPath}
                        alt={`${techStack} logo`}
                        className="w-12 h-12 md:w-14 md:h-14 object-contain"
                    />
                )}
                {/* Name */}
                <span className="font-semibold mt-2 md:mt-3 text-sm md:text-base uppercase tracking-wide">
          {techStack}
        </span>
                {/* Reserved space at bottom */}
                <span className="block mt-auto mb-4 text-xs opacity-0">placeholder</span>
            </button>

            {/* Satellite circles */}
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
