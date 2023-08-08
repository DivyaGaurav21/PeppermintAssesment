import React from 'react';
import IMG from '../assets/pip.png';
import Button from '../subcomponent/Button';

const HomeImg = () => {
    return (
        <div className="relative bg-gray-200">
            <div className="md:flex justify-center">
                <img
                    src={IMG}
                    alt="Home Image"
                    className="w-full md:max-w-[60%] h-[100vh] object-cover"
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end items-center">
                <Button>
                    EXPLORE
                </Button>
            </div>
        </div>
    );
};

export default HomeImg;

