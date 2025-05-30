import React from "react";
import TechStackBulb from "../components/TechStackBulb.jsx";
import { techStackBulb as techStacksData } from "../constants";   // ← pulls data from index.js

const TechStacks = () => (
    <section id="tech-stacks" className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-6 max-w-6xl mx-auto">
            {techStacksData.map((bulb, idx) => (
                <div
                    key={idx}
                    className="bg-[#0E0E10] rounded-3xl flex items-center justify-center p-6"
                >
                    {/* pass one bulb’s data object straight through */}
                    <TechStackBulb data={bulb} />
                </div>
            ))}
        </div>
    </section>
);

export default TechStacks;
