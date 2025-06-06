import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { gsap } from "gsap";

const TechStackBulb = ({ data }) => {
    const {
        techStack,
        imgPathWhite,
        imgPathBlack,
        stack,
        stackLogo,
        satelliteDistance = 160,
        centreDiameter = 192,
        logoSize = Math.round(centreDiameter * 0.42),
        fontSize = Math.round(centreDiameter * 0.083),
    } = data;

    const [isOpen, setIsOpen] = useState(false);
    const [showSats, setShowSats] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const satRefs = useRef([]);
    satRefs.current = [];
    const addSatRef = (el) => {
        if (el && !satRefs.current.includes(el)) satRefs.current.push(el);
    };

    const animateIn = () => {
        gsap.killTweensOf(satRefs.current);
        gsap.fromTo(
            satRefs.current,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.45,
                stagger: 0.06,
                ease: "back.out(1.7)",
            }
        );
    };

    const animateOut = () => {
        gsap.killTweensOf(satRefs.current);
        gsap.to(satRefs.current, {
            scale: 0,
            opacity: 0,
            duration: 0.35,
            stagger: 0.05,
            ease: "back.in(1.7)",
            onComplete: () => setShowSats(false),
        });
    };

    const handleToggle = () => {
        if (isOpen) {
            setIsOpen(false);
            animateOut();
        } else {
            setShowSats(true);
            setIsOpen(true);
        }
    };

    useEffect(() => {
        if (isOpen) animateIn();
    }, [isOpen]);

    const centreBtnClasses = clsx(
        "relative flex flex-col items-center justify-center rounded-full select-none transition-all duration-300 z-0",
        isOpen ? "bg-white text-black" : "bg-[#18181B] text-white/80",
        !isOpen && isHover && "scale-105 ring-2 ring-white/40"
    );

    const centreLogo = isOpen ? imgPathBlack : imgPathWhite;

    const sats =
        showSats &&
        stack.map((label, idx) => {
            const angle = (360 / stack.length) * idx;
            const rad = (angle * Math.PI) / 180;
            const x = satelliteDistance * Math.cos(rad);
            const y = satelliteDistance * Math.sin(rad);

            return (
                <div
                    key={label}
                    ref={addSatRef}
                    className="absolute z-10 pointer-events-none select-none"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                    <div className="flex flex-col items-center justify-center w-18 h-18 rounded-full bg-white shadow-md">
                        <img src={stackLogo[idx]} alt={label} className="w-7 h-7 mb-0.5" />
                        <span className="text-[10px] font-bold leading-none text-black text-center">
              {label}
            </span>
                    </div>
                </div>
            );
        });

    return (
        <div className="relative flex items-center justify-center py-10">
            {sats}

            <div
                onClick={handleToggle}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className={centreBtnClasses}
                style={{ width: centreDiameter, height: centreDiameter }}
            >
                <img
                    src={centreLogo}
                    alt={`${techStack} logo`}
                    style={{ width: logoSize, height: logoSize }}
                />
                <span
                    className="font-medium text-center"
                    style={{ marginTop: Math.round(centreDiameter * 0.083), fontSize: fontSize }}
                >
          {techStack}
        </span>
            </div>
        </div>
    );
};

export default TechStackBulb;
