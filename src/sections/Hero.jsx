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
 * Hero.jsx – Responsive scroll-scrubbed moon → sun arc with intro text
 * ------------------------------------------------------------------
 * • Moon starts entirely off-screen left (one full image-width) and exits fully off-screen right.
 * • Name fades in 25% into the animation; tagline follows ~10% later for a gentle delay.
 */
const Main = () => {
    const containerRef = useRef(null);
    const imgWrapperRef = useRef(null);
    const moonRef = useRef(null);
    const sunRef = useRef(null);

    // Text element refs
    const nameRef = useRef(null);
    const taglineRef = useRef(null);

    const ARC_SCROLL_FACTOR = 1;

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 0px)", () => {
                const vw = window.innerWidth;
                const vh = window.innerHeight;

                // Responsive sizing
                const arcHeight = Math.min(vh * 0.5, 600);
                const imgSize = Math.max(Math.min(vw * 0.2, 320), 140);
                const offset = imgSize; // full image width so element is hidden horizontally

                const startTop = vh - imgSize;

                // Position the moon/sun wrapper at start
                gsap.set(imgWrapperRef.current, {
                    width: imgSize,
                    height: imgSize,
                    top: startTop,
                    left: -offset, // hidden at start
                });

                // Prep text elements
                gsap.set([nameRef.current, taglineRef.current], {
                    opacity: 0,
                    y: 20,
                });

                const tl = gsap.timeline({
                    defaults: { ease: "none" },
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => `+=${vh * ARC_SCROLL_FACTOR}`,  // ← now driven by the variable
                        scrub: true,
                        pin: true,
                        invalidateOnRefresh: true,
                    },
                });

                // Motion path: convex arc from off-screen left → apex → off-screen right
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

                // Cross‑fade Moon ➜ Sun at timeline start
                tl.to(moonRef.current, { opacity: 0, duration: 0.5 }, 0);
                tl.fromTo(
                    sunRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.5 },
                    0
                );

                // Intro text animations
                // Name appears first (25% scroll progress)
                tl.fromTo(
                    nameRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                    0.25
                );

                // Tagline follows shortly after (35% scroll progress)
                tl.fromTo(
                    taglineRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                    0.35
                );

                return () => tl.kill();
            });

            return () => mm.revert();
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-transparent z-50"
        >
            {/* Centered intro text */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none select-none text-white-50">
                <h1
                    ref={nameRef}
                    className="text-4xl md:text-6xl font-bold leading-tight"
                >
                    Aryaman Ramchandran
                </h1>
                <h2
                    ref={taglineRef}
                    className="text-2xl md:text-4xl mt-2 tracking-wide"
                >
                    My Portfolio
                </h2>
            </div>

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
