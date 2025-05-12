import React from 'react'

const ShowcaseSection = () => {
    return (
        <div id = "work" className = "app-showcase">
            <div className = "w-full">
                <div className = "showcaselayout">
                    {/* LEFT: MAIN PROJECT */}
                    <div className = "first-project-wrapper">
                        <div className = "image-wrapper">
                            <img src = "/images/project1.png" alt = "Ryde" />
                        </div>
                        <div className = "text-content">
                            <h2>On-Demand Rides Made Simple with a Powerful, User Friendly App Called Ryde</h2>
                            <p className = "text-whitw-50 md:text-xl">An app built with React Native, Expo, & TailwindCSS for a fast, user friendly experience.</p>
                        </div>
                    </div>

                    {/* RIGHT: SUPPLEMENTARY PROJECTS */}


                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
