import React from 'react';
import CareerCard from './CareerCard';
import { jobs } from '../staticData';

const Career = () => {
    return (
        <div className='flex flex-col justify-between items-center'>

            <div className="h-40vh w-[90vw] md:w-[80vw] flex flex-col justify-center p-4">
                {/* Part 1 - Heading */}
                <h1 className="text-center text-4xl font-bold mb-4">Careers</h1>
                {/* Part 2 - Title */}
                <h2 className="text-left text-3xl font-bold mb-4">About Peppermint</h2>
                {/* Part 3 - Paragraph */}
                <p className="text-gray-600 leading-7 font-serif text-sm py-2">Peppermint is an award-winning robotics company, supported by SINE IIT-Bombay and Qualcomm. Peppermint develops and deploys Industrial and Enterprise robots and platforms for mobility-led services. The Engineering team has 50+ years of experience in building deep-tech and robotics products. Robots built on the Peppermint Platform are deployed across 13 cities in 4 countries!</p>
                <hr className="border-t border-gray-300 my-10"></hr>
            </div>

            <div className='bg-stone-100 w-[100%]'>
                <CareerCard jobs={jobs} />
                <p className='my-20 text-center'>“If you are excited about the prospect of building awesome tech and robots, we’d love to hear from you”. Please email us at: <a href='mailto:hr@getpeppermint.co' className='text-cyan-400 font-mono'>hr@getpeppermint.co</a>
                </p>
            </div>

        </div>
    );
};

export default Career;
