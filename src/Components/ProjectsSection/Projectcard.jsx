import React from 'react'
import { ArrowDownRight, Code2, Database } from 'lucide-react'

const ProjectCard = () => {
    return (
        <>
            <div className="w-full max-w-7xl mx-auto mb-8 relative">
                <div className="bg-white/10 backdrop-blur-xl rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg p-4 overflow-hidden">

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left side - Circle Image */}
                        <div className="w-full lg:w-1/3 h-48 lg:h-auto flex-shrink-0 border">
                            <div className="w-full h-full overflow-hidden">
                                <img
                                    src="/placeholder.svg?height=200&width=200"
                                    alt="image"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="flex-1 lg:w-2/3 text-left">
                            <h3 className="text-3xl lg:text-5xl font-bold text-colorred mb-4 mt-4 font-Roboto">
                                Project Title
                            </h3>

                            {/* Horizontal line with dot */}
                            <div className="flex items-center mb-4">
                                <div className="border border-colorred p-1 rounded-full">
                                    <div className="bg-colorred w-2 h-2 rounded-full"></div>
                                </div>
                                <div className="h-[0.5px] bg-colorwhite flex-grow"></div>
                            </div>

                            <p className="text-colorwhite font-Roboto text-lg lg:text-2xl mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, autem voluptatum? Reiciendis quia, ex sunt explicabo ab minima nostrum nisi odio molestias delectus mollitia consequuntur aspernatur maiores repudiandae dolorum dolorem.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, autem voluptatum? Reiciendis quia, ex sunt explicabo ab minima nostrum nisi odio molestias delectus mollitia consequuntur aspernatur maiores repudiandae dolorum dolorem.
                            </p>

                            {/* Horizontal line with dot */}
                            <div className="flex items-center mb-4">
                                <div className="border border-colorred p-1 rounded-full">
                                    <div className="bg-colorred w-2 h-2 rounded-full"></div>
                                </div>
                                <div className="h-[0.5px] bg-colorwhite flex-grow"></div>
                            </div>

                            {/* Code buttons and live site hint */}
                            <div className="flex flex-col sm:flex-row justify-center items-center mb-4 gap-4">
                                <div className="flex sm:flex-row flex-col gap-4">
                                    <button className="flex items-center text-lg gap-2 px-3 py-1 font-Roboto border border-colorwhite text-white rounded-sm shadow-2xl hover:bg-white/10 hover:backdrop-blur-lg hover:scale-105 hover:duration-300 transition-all">
                                        <Code2 className="w-5 h-5" />
                                        Frontend Code
                                    </button>
                                    <button className="flex items-center text-lg gap-2 px-3 py-1 font-Roboto border border-colorwhite text-white rounded-sm shadow-2xl hover:bg-white/10 hover:backdrop-blur-lg hover:scale-105 hover:duration-300 transition-all">
                                        <Database className="w-5 h-5" />
                                        Backend Code
                                    </button>
                                    <button className="lg:hidden flex items-center justify-center text-center text-lg gap-2 px-3 py-1 font-Roboto bg-colorred text-white rounded-sm shadow-2xl hover:scale-105 hover:duration-300 transition-all">
                                        Live Site →
                                    </button>
                                    <p className="hidden lg:flex items-center text-colorwhite text-xl font-Roboto">
                                        Click the Button for Live Site →
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Corner curve effect */}
                    <div className="hidden lg:block absolute bottom-0 right-0">
                        <div className="absolute bottom-2.5 right-2.5 w-32 h-32 bg-colorblue transform translate-x-16 translate-y-16 rounded-tl-[45px]" />
                    </div>

                    {/* Circular Arrow Button */}
                    <button
                        className="hidden lg:flex absolute bottom-3 right-3 w-20 h-20 bg-colorred rounded-tl-[35px] items-center justify-center transition-all hover:scale-110 group z-10 transform translate-x-7 translate-y-7"
                        aria-label="View Project"
                    >
                        <ArrowDownRight className="w-8 h-8 text-white transform transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProjectCard

