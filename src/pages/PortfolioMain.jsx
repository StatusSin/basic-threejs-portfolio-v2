import Hero from "../sections/Hero.jsx";
import ShowcaseSection from "../sections/ShowcaseSection.jsx";
import NavBar from "../components/NavBar.jsx";
import LogoSection from "../sections/LogoSection.jsx";
import FeatureCards from "../sections/FeatureCards.jsx";
import ExperienceSection from "../sections/ExperienceSection.jsx";
import TechStacks from "../sections/TechStacks.jsx";

const PortfolioMain = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStacks />
        </>
    )
}
export default PortfolioMain
