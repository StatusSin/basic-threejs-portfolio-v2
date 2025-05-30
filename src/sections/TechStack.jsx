import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {techStackIcons} from "../constants/index.js";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";

const TechStack = () => {
    return (
        <div id = "skills" className = "flex-center section-padding">
            <div className = "w-full h-full md:px-10 px-5">
                <TitleHeader
                    title = "Tech Stacks"
                    sub = "What I use"
                />

                <div className = "tech-grid">
                    {techStackIcons.map((icon) => (
                        <div key = {icon.name} className = "card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                            <div className = "tech-card-animated-bg"/>
                            <div className = "tech-card-content ">
                                <div className = "tech-icon-wrapper">
                                    <TechIcon model = {icon}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default TechStack
