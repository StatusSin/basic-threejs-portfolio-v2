import Hero from "../sections/Hero.jsx";
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
            <LogoSection />
            <TechStacks />
        </>
    )
}
export default PortfolioHome
