import React from "react";
import TechStackBulb from "../components/TechStackBulb.jsx";

const TechStacks = () => {
    // Placeholder array – replace with real tech‑stack data when ready.
    const bulbs = Array.from({ length: 6 });

    return (
        <section id="tech-stacks" className="section-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-6 max-w-6xl mx-auto">
                {bulbs.map((_, idx) => (
                    <div
                        key={idx}
                        className="bg-[#0E0E10] rounded-3xl flex items-center justify-center p-6"
                    >
                        <TechStackBulb />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStacks;
