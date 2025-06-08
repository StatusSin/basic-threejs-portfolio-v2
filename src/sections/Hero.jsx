import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

import MoonGrain from "/images/HeroImages/MoonGrainBlur.svg";
import SunGrain from "/images/HeroImages/SunGrainBlur.svg";

// Register GSAP plugins once on client
if (typeof window !== "undefined" && gsap) {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

/**
 * Main.jsx – Responsive scroll‑scrubbed moon → sun arc
 * ----------------------------------------------------
 * • Moon starts entirely off‑screen left (one full image‑width) and exits fully off‑screen right.
 * • Sizes & path recalc on viewport resize.
 */
const Main = () => {
    const containerRef = useRef(null);
    const imgWrapperRef = useRef(null);
    const moonRef = useRef(null);
    const sunRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 0px)", () => {
                const vw = window.innerWidth;
                const vh = window.innerHeight;

                // Responsive sizing
                const arcHeight = Math.min(vh * 0.5, 600);
                const imgSize = Math.max(Math.min(vw * 0.2, 320), 140);

                // Offset = full image width so element is completely hidden horizontally
                const offset = imgSize;

                // Start position near bottom left (fully off‑screen horizontally)
                const startTop = vh - imgSize;

                gsap.set(imgWrapperRef.current, {
                    width: imgSize,
                    height: imgSize,
                    top: startTop,
                    left: -offset, // hidden at start
                });

                const tl = gsap.timeline({
                    defaults: { ease: "none" },
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => `+=${vh}`,
                        scrub: true,
                        pin: true,
                        invalidateOnRefresh: true,
                    },
                });

                // Motion path: convex arc from off‑screen left → apex → off‑screen right
                tl.to(imgWrapperRef.current, {
                    motionPath: {
                        path: [
                            { x: 0, y: 0 },
                            { x: vw / 2 + offset, y: -arcHeight },
                            { x: vw + 2 * offset, y: 0 },
                        ],
                        curviness: 1.25,
                        autoRotate: false,
                    },
                });

                // Cross‑fade Moon ➜ Sun
                tl.to(moonRef.current, { opacity: 0, duration: 0.5 }, 0);
                tl.fromTo(
                    sunRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.5 },
                    0
                );

                return () => tl.kill();
            });

            return () => mm.revert();
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="main-animation"
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-transparent z-50"
        >
            {/* Image wrapper (motion path target) */}
            <div
                ref={imgWrapperRef}
                className="absolute select-none pointer-events-none"
            >
                <img
                    ref={moonRef}
                    src={MoonGrain}
                    alt="Moon grain blur"
                    className="w-full h-full object-contain absolute inset-0"
                    style={{ opacity: 1 }}
                />
                <img
                    ref={sunRef}
                    src={SunGrain}
                    alt="Sun grain blur"
                    className="w-full h-full object-contain absolute inset-0"
                    style={{ opacity: 0 }}
                />
            </div>
        </section>
    );
};

export default Main;
