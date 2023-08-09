import React from 'react';

const About = () => {
    return (
        <div className="lg:flex">
            {/* Image Container */}
            <div className="lg:w-1/2">
                <img
                    src="https://getpeppermint.co/wp-content/uploads/2023/07/SD45-Gen2-Render-Front-Perspective-LH-scaled.webp"
                    alt="About Us"
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>

            {/* Information Section */}
            <div className="lg:w-1/2 lg:ml-12 mt-6 lg:mt-0 flex flex-col items-center justify-center gap-5">
                <h2 className="text-4xl font-semibold mb-4">About Peppermint Robotics</h2>
                <p className="text-gray-600 mb-6 w-[80%] leading-9">
                    Peppermint Service Robots are uniquely positioned to be the first full-stack Service Robotics Company in the world.
                    Supported by SINE IIT-Bombay & Qualcomm, we manufacture Housekeeping Robots and Material Handling Robots tuned into your specific industry needs. Our full-stack platform, along with Mint OS, and modular assembly delivers the most efficient autonomous solutions for our clients.
                </p>
                <button className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-white hover:text-teal-600 border border-teal-600 transition-colors duration-300">
                    Yes! I Want Peppermint
                </button>
            </div>
        </div>
    );
};

export default About;
