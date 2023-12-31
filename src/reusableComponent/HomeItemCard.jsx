import React from 'react';



const HomeItemCard = ({ cards }) => {
    return (
        <div className='mt-[80px] mb-[60px]'>
            <h1 className='text-center text-4xl font-bold mb-10'>Why Peppermint Robotics</h1>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                {
                    cards.map(card =>
                        <div className="rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 w-[300px] py-10" key={card.id}>
                            {/* Circular Image */}
                            <div className="bg-blue-500 rounded-full w-20 h-20 mx-auto mt-4">
                                <img src={card.img} />
                            </div>

                            {/* Heading */}
                            <h3 className="text-xl font-semibold text-center mt-4">{card.cardTitle}</h3>

                            {/* Paragraph */}
                            <p className="text-gray-600 text-center px-2 text-sm mt-2">{card.cardDetai}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomeItemCard;
