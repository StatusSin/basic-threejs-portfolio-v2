import React from "react";
import TechStackBulb from "../components/TechStackBulb.jsx";
import { techStackBulb as techStacksData } from "../constants";
import TitleHeader from "../components/TitleHeader.jsx";
import ProjectPointer from "../components/ProjectPointer.jsx";

const TechStacks = () => (
    <section id="skills" className="section-padding">
        <div className="w-full h-full md:px-20 px-5">
            <TitleHeader title="My Tech Stacks" />
        </div>

        <div className="grid-3-cols gap-6 w-full mx-auto mt-20">
            {techStacksData.map((bulb, idx) => (
                <div
                    key={idx}
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

export default TechStacks;
