import React, { useState, useMemo } from "react";

/**
 * Renders a single “bulb”  ➜ central button + orbiting tech-icons.
 * Expects a `data` prop shaped like one element in `techStackBulb` from index.js.
 */
const TechStackBulb = ({ data }) => {
    if (!data) return null;                // safety guard

    const { techStack, imgPath, stack = [], stackLogo = [] } = data;
    const [open, setOpen] = useState(false);

    /** Pre-compute satellite positions (simple polar coordinates). */
    const satellites = useMemo(() => {
        const count = stack.length;
        const radius = 110;          // px from centre — tweak as you like
        const startAngle = -90;      // start straight up

        return stack.map((label, i) => {
            const angle = startAngle + (360 / count) * i;
            return {
                label,
                logo: stackLogo[i],
                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
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
                {/* keeps height consistent */}
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
