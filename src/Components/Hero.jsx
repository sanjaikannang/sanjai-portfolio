import React, { useRef, useEffect, useState } from 'react';

const Hero = () => {
    const dotRef = useRef(null);
    const developerRef = useRef(null);
    const [verticalLineHeight, setVerticalLineHeight] = useState(0);
    const [horizontalLineWidth, setHorizontalLineWidth] = useState(0);

    useEffect(() => {
        const calculateDimensions = () => {
            if (dotRef.current && developerRef.current) {
                const dotBottom = dotRef.current.getBoundingClientRect().bottom;
                const developerBottom = developerRef.current.getBoundingClientRect().bottom;
                const developerRight = developerRef.current.getBoundingClientRect().right;
                const dotLeft = dotRef.current.getBoundingClientRect().left;

                const newVerticalLineHeight = developerBottom - dotBottom;
                const newHorizontalLineWidth = developerRight - dotLeft;

                setVerticalLineHeight(newVerticalLineHeight);
                setHorizontalLineWidth(newHorizontalLineWidth);
            }
        };

        calculateDimensions();
        window.addEventListener('resize', calculateDimensions);

        return () => window.removeEventListener('resize', calculateDimensions);
    }, []);

    return (
        <div className="bg-colorblue">
            <div className="max-w-7xl mx-auto flex flex-col justify-center px-4">
                <div className="">
                    <div className="text-start">
                        <h1 className="text-[170px] font-Roboto text-colorwhite leading-none">
                            SANJAI KANNAN G
                        </h1>
                    </div>

                    <div className="mx-auto w-full">
                        <div className="text-right">
                            <span className="text-[170px] border-l border-t border-r font-Roboto text-colorred leading-none">
                                MERN
                            </span>
                        </div>

                        <div className="flex items-center justify-center w-full relative">
                            {/* rounded red dot */}
                            <div ref={dotRef} className="border border-colorred p-2 rounded-full">
                                <div className="bg-colorred p-1 rounded-full">
                                </div>
                            </div>

                            <div className="flex-grow h-[1px] bg-gray-300"></div>

                            {/* Dynamic vertical line */}
                            <div
                                className="absolute mt-[26px] ml-3 left-0 w-[1.5px] bg-gray-300"
                                style={{
                                    top: '0',
                                    height: `${verticalLineHeight}px`
                                }}
                            ></div>
                        </div>

                        <div className="text-right">
                            <span className="text-[174px] border-l border-b border-r font-Roboto text-colorred leading-none">
                                MEAN
                            </span>
                        </div>

                        <div className="text-left mb-40 relative">
                            <div>
                                <span className="text-[170px] ml-6 font-Roboto text-colorwhite leading-none">
                                    STACK
                                </span>
                            </div>

                            <div
                                ref={developerRef}
                                className="text-[170px] ml-6 font-Roboto text-colorred leading-none"
                            >
                                DEVELOPER
                            </div>

                            {/* Rounded dot at the bottom */}
                            <div
                                className="absolute border border-colorred p-2 rounded-full">
                                <div className="bg-colorred p-1 rounded-full">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;