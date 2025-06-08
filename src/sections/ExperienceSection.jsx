import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards, educationCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const getTimelineGradient = (cards) => {
    if (!cards?.length) return "transparent";
    if (cards.length === 1) return cards[0].timelineColor;

    const step = 100 / (cards.length - 1);
    const stops = cards.map((c, i) => `${c.timelineColor} ${i * step}%`);
    return `linear-gradient(to bottom, ${stops.join(", ")})`;
};

const eduGradient = getTimelineGradient(educationCards);
const expGradient = getTimelineGradient(expCards);

const Experience = () => {
    useGSAP(() => {
        /* ---------------- TitleHeader fade / slide‑in ---------------- */
        gsap.from(".title-header", {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".title-header",
                start: "top 60%",
            },
        });

        /* ---------------- Sub-titles (Education / Experience) ---------------- */
        gsap.utils.toArray(".section-heading").forEach((el, i) => {
            gsap.from(el, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: i * 0.1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                },
            });
        });

        /* Card reveal animation */
        gsap.utils.toArray(".timeline-card").forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: "left left",
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                },
            });
        });

        /* Independent timeline shrink animations for education & experience */
        [".timeline-edu", ".timeline-exp"].forEach((selector) => {
            gsap.to(selector, {
                transformOrigin: "bottom bottom",
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: selector,
                    start: "top center",
                    end: "70% center",
                    onUpdate: (self) => {
                        gsap.to(selector, {
                            scaleY: 1 - self.progress,
                        });
                    },
                },
            });
        });

        /* Text fade‑in */
        gsap.utils.toArray(".expText").forEach((text) => {
            gsap.from(text, {
                opacity: 0,
                xPercent: 0,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: text,
                    start: "top 60%",
                },
            });
        });
    }, []);

    const renderCards = (cards, timelineClass, gradient) => (
        <div className="relative z-50 xl:space-y-32 space-y-10">
            {cards.map((card) => (
                <div key={card.title} className="exp-card-wrapper">
                    {/* Card on the left */}
                    <div className="xl:w-2/6">
                        <GlowCard card={card}>
                            <div>
                                <img src={card.imgPath} alt={`${card.title} image`} />
                            </div>
                        </GlowCard>
                    </div>

                    {/* Details on the right */}
                    <div className="xl:w-4/6">
                        <div className="flex items-start">
                            {/* Timeline */}
                            <div className="timeline-wrapper">
                                <div className={`timeline ${timelineClass}`} />
                                <div className="gradient-line w-1 h-full" style={{ background: gradient }} />
                            </div>

                            {/* Text */}
                            <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                <div className="timeline-logo flex-shrink-0">
                                    <img
                                        src={card.logoPath}
                                        alt="logo"
                                        style={{
                                            width: card.logoSize ?? 48,
                                            height: card.logoSize ?? 48,
                                        }}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h1 className="font-semibold text-3xl text-white-50">{card.title}</h1>
                                    <p className="font-semibold text-xl text-[#839CB5]">{card.subtitle}</p>
                                    <p className="my-5 text-white-50">{card.date}</p>
                                    <p className="text-[#839CB5] italic">Highlights</p>
                                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                        {card.responsibilities.map((resp, i) => (
                                            <li key={i} className="text-lg">
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section id="experience" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                {/* TitleHeader wrapped for animation */}
                <div className="title-header w-full flex justify-center">
                    <TitleHeader title="Education and Experience" />
                </div>

                {/* ---------- Education ---------- */}
                <div className="education-section mt-32 relative">
                    <h2 className="section-heading font-semibold text-4xl mb-10 text-white-50">Education</h2>
                    {renderCards(educationCards, "timeline-edu", eduGradient)}
                </div>


                {/* ---------- Professional Experience ---------- */}
                <div className="experience-section mt-32 relative">
                    <h2 className="section-heading font-semibold text-4xl mb-10">Professional Experience</h2>
                    {renderCards(expCards, "timeline-exp", expGradient)}
                </div>
            </div>
        </section>
    );
};

export default Experience;
