import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Separate Card Component
const EducationCard = ({ college, department, cgpa, year }) => {
    return (
        <div className="w-[500px] h-[300px] bg-white/10 backdrop-blur-xl rounded-lg p-8 flex flex-col">
            <h3 className="text-colorred text-4xl font-Roboto mb-4">
                {college}
            </h3>
            <p className="text-colorwhite text-3xl font-Roboto mb-2">
                {department}
            </p>
            <p className="text-colorwhite text-3xl font-Roboto mb-2">
                CGPA : <span className="text-colorred">{cgpa}</span>
            </p>
            <p className="text-colorwhite text-3xl font-Roboto mb-2">
                YEAR : {year}
            </p>
        </div>
    );
};

const Experience = () => {
    const containerRef = useRef(null);
    const year2020Ref = useRef(null);
    const firstTwentyRef = useRef(null);
    const lastTwentyRef = useRef(null);
    const cardsContainerRef = useRef(null);
    const number26Ref = useRef(null);
    const topNumberContainerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=300%",
                    pin: true,
                    scrub: 1,
                    markers: true
                }
            });

            // Initial setup
            gsap.set(lastTwentyRef.current, {
                y: "0"
            });

            gsap.set(cardsContainerRef.current, {
                x: "100vw", // Start cards off-screen to the right
                opacity: 0
            });

            // Animation sequence
            tl
                // Move second "20" down
                .to(lastTwentyRef.current, {
                    y: "100%", // Move to the second line
                    duration: 1
                })
                // Bring in cards 
                .to(cardsContainerRef.current, {
                    x: "0", // Move cards into view
                    opacity: 1,
                    duration: 1
                })
                // Move only the 26 number up near the 20
                .to(number26Ref.current, {
                    y: -250, // Move up towards the top "20"
                    x: -250, // Move slightly to the left to be near the 20
                    duration: 2,
                    ease: "power1.inOut"
                })
                // Move both "20" and cards together to the left
                .to([lastTwentyRef.current, cardsContainerRef.current], {
                    x: "-100vw", // Move everything off-screen left
                    duration: 2,
                    ease: "none"
                });
        }, containerRef);

        return () => ctx.revert(); // Clean up animations
    }, []);

    return (
        <div ref={containerRef} className="h-screen bg-colorblue overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4">
                <div ref={year2020Ref} className="pt-20 ml-20 relative z-20">
                    {/* Fixed top "20" */}
                    <div className="text-[200px] leading-none relative inline-block">
                        <span ref={firstTwentyRef} className="text-colorwhite font-Roboto inline-block">
                            20
                        </span>
                        {/* Animated "20" container */}
                        <div className="text-[200px] leading-none inline-block ml-4">
                            <span
                                ref={lastTwentyRef}
                                className="text-colorred font-Roboto inline-block"
                            >
                                20
                            </span>
                        </div>
                    </div>

                    {/* Cards container - positioned below "20" */}
                    <div
                        ref={cardsContainerRef}
                        className="absolute flex items-center left-0 transform-gpu ml-[350px] mt-6"
                        style={{ top: 'calc(100% + 0px)' }} // Position below the "20"
                    >
                        <div className="flex items-center">
                            <EducationCard
                                college="PSG College of Arts and Science"
                                department="Bachelor of Science, Information Technology"
                                cgpa="7.4"
                                year="Dec 2020 - May 2023"
                            />
                            <span className="text-[200px] text-colorwhite font-Roboto mx-14">
                                24
                            </span>
                        </div>
                        <div className="flex items-center">
                            <EducationCard
                                college="SRM Institute of Science and Technology (SRMIST)"
                                department="Master of Computer Applications - MCA"
                                cgpa="N/A"
                                year="May 2024 - Jun 2026"
                            />
                            <span
                                ref={number26Ref}
                                className="text-[200px] text-colorred font-Roboto mx-14"
                            >
                                26
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;