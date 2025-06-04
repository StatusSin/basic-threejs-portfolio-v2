import React, { useState, useMemo } from 'react';

const FULL_CIRCLE = 360;

const TechStackBulb = ({ data }) => {
    if (!data) return null;

    const {
        techStack,
        imgPathWhite,
        imgPathBlack,
        stack = [],
        stackLogo = [],
        satelliteDistance = 110,
    } = data;

    // Handle both string and string[] for techStack
    const techStackLines = Array.isArray(techStack) ? techStack : [techStack];
    const ariaLabel = techStackLines.join(', ');

    const [open, setOpen] = useState(false);

    // Pick the correct logo based on the open/closed state
    const currentImgPath = open ? (imgPathBlack ?? imgPathWhite) : (imgPathWhite ?? imgPathBlack);

    // Compute satellite positions evenly around the centre
    const satellites = useMemo(() => {
        const count = stack.length;
        if (!count) return [];

        const step = FULL_CIRCLE / count;

        return stack.map((label, idx) => {
            const angle = idx * step;
            const transform = `translate(-50%, -50%) rotate(${angle}deg) translate(${satelliteDistance}px) rotate(${-angle}deg)`;
            return { label, logo: stackLogo[idx], transform };
        });
    }, [stack, stackLogo, satelliteDistance]);

    return (
        <div className='relative flex-center w-full h-100 select-none'>
            <button
                type='button'
                aria-label={ariaLabel}
                onClick={() => setOpen(prev => !prev)}
                className={`flex-col-center gap-2 transition-colors duration-300 rounded-full w-52 h-52 md:w-60 md:h-60 border border-black-50 overflow-visible ${open ? 'bg-white-50 text-black' : 'bg-[#18181B] text-white-50'}`}
                style={{ boxShadow: open ? '0 0 20px rgba(217,236,255,.4)' : 'none' }}
            >
                {currentImgPath && (
                    <img
                        src={currentImgPath}
                        alt={`${ariaLabel} logo`}
                        className='w-12 h-12 md:w-14 md:h-14 object-contain'
                    />
                )}
                <div className='flex flex-col items-center leading-tight text-center'>
                    {techStackLines.map((line, idx) => (
                        <span
                            key={idx}
                            className='font-semibold text-sm md:text-base uppercase tracking-wide'
                        >
                            {line}
                        </span>
                    ))}
                </div>
            </button>

            {satellites.map(({ label, logo, transform }, idx) => (
                <div
                    key={idx}
                    className={`absolute top-1/2 left-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full flex-col-center bg-white-50 text-black transition-opacity duration-500 ${open ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'}`}
                    style={{ transform }}
                >
                    {logo && (
                        <img
                            src={logo}
                            alt={`${label} logo`}
                            className='w-8 h-8 md:w-10 md:h-10 object-contain'
                        />
                    )}
                    <span className='text-[10px] md:text-xs font-medium mt-1 text-center px-1 leading-tight'>
                        {label}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default TechStackBulb;
