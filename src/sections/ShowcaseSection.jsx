import React, {useRef} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom -= 100'
                    }
                }
            )
        })
    }, []);

    return (
        <section id = "work" ref = {sectionRef} className = "app-showcase">
            <div className = "w-full">
                <div className = "showcaselayout">
                    {/* LEFT: MAIN PROJECT */}
                    <div className = "first-project-wrapper" ref = {project1Ref}>
                        <div className = "image-wrapper">
                            <img src = "/images/ShowcaseImages/project1.png" alt = "Ryde" />
                        </div>
                        <div className = "text-content">
                            <h2>On-Demand Rides Made Simple with a Powerful, User Friendly PortfolioMain Called Ryde</h2>
                            <p className = "text-whitw-50 md:text-xl">An app built with React Native, Expo, & TailwindCSS for a fast, user friendly experience.</p>
                        </div>
                    </div>

                    {/* RIGHT: SUPPLEMENTARY PROJECTS */}
                    <div className = "project-list-wrapper overflow-hidden">
                        <div className = "project" ref = {project2Ref}>
                            <div className = "image-wrapper bg-[#ffefdb]">
                                <img src = "/images/ShowcaseImages/project2.png" alt = "Library Management Platform" />
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>

                        <div className = "project" ref = {project3Ref}>
                            <div className = "image-wrapper bg-[#ffe7eb]">
                                <img src = "/images/ShowcaseImages/project3.png" alt = "YC Directory - A Startup Showcase PortfolioMain" />
                            </div>
                            <h2>YC Directory - A Startup Showcase PortfolioMain</h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
