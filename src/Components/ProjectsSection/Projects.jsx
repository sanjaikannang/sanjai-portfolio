import Projectcard from "./Projectcard"

const Projects = () => {

    return (
        <>
            <div className="bg-colorblue min-h-screen py-16">
                <div className="max-w-7xl mx-auto flex flex-col justify-start px-4">
                    <h2 className="text-7xl font-Roboto text-colorwhite text-center mb-16">
                        Projects
                    </h2>

                    {/* Project Cards */}
                    <div className="space-y-24">
                        <Projectcard />

                        <Projectcard />

                        <Projectcard />

                        <Projectcard />

                        <Projectcard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects