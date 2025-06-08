import React, { useRef } from "react";

const GlowCard = ({ card, children, index }) => {
    const cardRefs = useRef([]);

    const handleMouseMove = (i) => (e) => {
        const cardEl = cardRefs.current[i];
        if (!cardEl) return;

        const rect = cardEl.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = (Math.atan2(mouseY, mouseX) * 180) / Math.PI;
        angle = (angle + 360) % 360; // keep between 0‑360

        cardEl.style.setProperty("--start", angle + 60);
    };

    const backgroundStyle = card?.background
        ? {
            backgroundImage: `url(${card.background})`,
            backgroundSize: card?.backgroundSize || "115%", // dynamic zoom level
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }
        : {};

    return (
        <div
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className="card card-border timeline-card rounded-xl p-10"
            style={backgroundStyle}
        >
            <div className="glow" />

            {children}

            <div className="mb-5 mt-5">
                <p className="text-white-50 text-lg font-semibold">
                    {card.location}
                    {card.gpa}
                </p>
            </div>
        </div>
    );
};

export default GlowCard;
