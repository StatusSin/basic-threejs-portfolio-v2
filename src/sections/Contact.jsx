import React, { useLayoutEffect, useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = ({
                     linkedInUrl = "https://www.linkedin.com/in/aryaman-ramchandran",
                     githubUrl = "https://github.com/aryamanram",
                     email = "aryamanramchandran@gmail.com",
                 }) => {
    const containerRef = useRef(null);
    const [copied, setCopied] = useState(false);

    /* ───────────────────────────
       Animate on scroll
       ─────────────────────────── */
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%", // fire when top of section hits 80% of viewport
                    once: true, // play only the first time it enters view
                },
            });

            /* Title first … */
            tl.from(".contact-title", {
                y: 60,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
            })
                /* … then each link, staggered */
                .from(
                    ".contact-link",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.4,
                        stagger: 0.15,
                        ease: "power2.out",
                    },
                    "-=0.3" // overlap a bit with the title animation
                );
        }, containerRef);

        return () => ctx.revert(); // clean-up on unmount
    }, []);

    /* ───────────────────────────
       Copy email to clipboard
       ─────────────────────────── */
    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            // Hide the copied message after 2 seconds
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div
            ref={containerRef}
            id="contact"
            className="flex flex-col items-center mt-20 py-10"
        >
            {/* Title */}
            <div className="contact-title">
                <TitleHeader title="Contact" />
            </div>

            {/* Links */}
            <div className="flex items-center gap-8 mt-10">
                {/* LinkedIn */}
                <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link flex items-center gap-2 hover:underline"
                >
                    <img
                        src="/images/ContactImages/LinkedInLogo.svg"
                        alt="LinkedIn logo"
                        className="w-6 h-6"
                    />
                    <span>LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link flex items-center gap-2 hover:underline"
                >
                    <img
                        src="/images/ContactImages/GitHubLogo.svg"
                        alt="GitHub logo"
                        className="w-6 h-6"
                    />
                    <span>GitHub</span>
                </a>

                {/* Email – copies to clipboard */}
                <button
                    type="button"
                    onClick={handleCopy}
                    className="contact-link flex items-center gap-2 hover:underline focus:outline-none"
                >
                    <img
                        src="/images/ContactImages/GmailLogo.svg"
                        alt="Mail logo"
                        className="w-6 h-6"
                    />
                    <span>{copied ? "Copied!" : "Email"}</span>
                </button>
            </div>

            {/* Feedback message */}
            {copied && (
                <p className="mt-4 text-sm text-green-400">Email copied to clipboard</p>
            )}
        </div>
    );
};

export default Contact;
