import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStackBulb from "../components/TechStackBulb.jsx";
import { techStackBulb as techStacksData } from "../constants";
import TitleHeader from "../components/TitleHeader.jsx";
import ProjectPointer from "../components/ProjectPointer.jsx";

// Register the ScrollTrigger plugin once at the component level
gsap.registerPlugin(ScrollTrigger);

const TechStacks = () => {
    // Refs for the section, title, and an array for each bulb card
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const bulbsRef = useRef([]);

    // Helper to collect refs for each bulb card
    const addToRefs = (el) => {
        if (el && !bulbsRef.current.includes(el)) {
            bulbsRef.current.push(el);
        }
    };

    /**
     * Animate the title and bulbs when the section scrolls into view.
     * We use gsap.context so we can easily clean up animations on unmount.
     */
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 60,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });

            // Bulb cards animation with stagger
            gsap.from(bulbsRef.current, {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 40%",
                },
            });
        }, sectionRef);

        // Clean up animations when the component unmounts or dependencies change
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="section-padding"
        >
            {/* Title */}
            <div className="w-full h-full md:px-20 px-5" ref={titleRef}>
                <TitleHeader title="My Tech Stacks" />
            </div>

            {/* Tech stack bulbs grid */}
            <div className="grid-3-cols gap-6 w-full mx-auto mt-20">
                {techStacksData.map((bulb, idx) => (
                    <div
                        key={idx}
                        ref={addToRefs}
                        className="bg-[#0E0E10] rounded-3xl flex flex-col items-center justify-center p-6"
                    >
                        <TechStackBulb data={bulb} />

                        {/* NEW: point to the route defined in index.js */}
                        <ProjectPointer
                            label={`${bulb.techStack} Projects`}
                            target={bulb.projectRoute}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStacks;
