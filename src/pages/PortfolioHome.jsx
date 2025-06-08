import Hero from "../sections/Hero.jsx";
import ShowcaseSection from "../sections/ShowcaseSection.jsx";
import NavBar from "../components/NavBar.jsx";
import LogoSection from "../sections/LogoSection.jsx";
import ExperienceSection from "../sections/ExperienceSection.jsx";
import TechStacks from "../sections/TechStacks.jsx";

const PortfolioHome = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ExperienceSection />
            <TechStacks />
            <ShowcaseSection />
            <LogoSection />
        </>
    )
}
export default PortfolioHome
