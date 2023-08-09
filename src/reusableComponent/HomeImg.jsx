import React from 'react';
import IMG from '../assets/pip.png';


const HomeImg = () => {
    return (
        <div className="relative bg-gray-200">
            <div className="md:flex justify-center">
                <img
                    src={IMG}
                    alt="Home Image"
                    className="w-full md:max-w-[60%] h-[100vh] object-center"
                />
            </div>
            <div className="absolute top-[80%] left-[30%] md:left-[45%]">
                <button className="bg-slate-700 text-white hover:text-slate-700 hover:border-slate-700 hover:bg-white py-3 px-7 rounded-md border border-slate-700 text-2xl font-extrabold transition-colors duration-300">
                    EXPLORE
                </button>
            </div>

        </div>
    );
};

export default HomeImg;

