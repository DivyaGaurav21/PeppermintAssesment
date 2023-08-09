import React from 'react'
// const cards = [
//     {
//         id: 1,
//         img: 'https://getpeppermint.co/wp-content/uploads/2022/01/Accountable-and-Sustainable.png',
//         cardTitle: "Accountable and Sustainable",
//         cardDetai: "Due to real-time reports and analytics, the team can see real-time error codes for immediate service. There is 100% safe disposal of water. There is also a 50% lesser fresh water and electricity consumption."
//     },
//     {
//         id: 2,
//         img: 'https://getpeppermint.co/wp-content/uploads/2022/01/Accountable-and-Sustainable.png',
//         cardTitle: "Accountable and Sustainable",
//         cardDetai: "Due to real-time reports and analytics, the team can see real-time error codes for immediate service. There is 100% safe disposal of water. There is also a 50% lesser fresh water and electricity consumption."
//     },
//     {
//         id: 3,
//         img: 'https://getpeppermint.co/wp-content/uploads/2022/01/Accountable-and-Sustainable.png',
//         cardTitle: "Accountable and Sustainable",
//         cardDetai: "Due to real-time reports and analytics, the team can see real-time error codes for immediate service. There is 100% safe disposal of water. There is also a 50% lesser fresh water and electricity consumption."
//     },
//     {
//         id: 4,
//         img: 'https://getpeppermint.co/wp-content/uploads/2022/01/Accountable-and-Sustainable.png',
//         cardTitle: "Accountable and Sustainable",
//         cardDetai: "Due to real-time reports and analytics, the team can see real-time error codes for immediate service. There is 100% safe disposal of water. There is also a 50% lesser fresh water and electricity consumption."
//     }
// ]

const CareerCard = () => {
    return (
        <div className='mt-[80px] mb-[60px]'>
            <h3 className='text-center text-1xl text-cyan-400 font-serif mb-6 font-extrabold'>WE'RE HIRING!</h3>
            <h1 className='text-center text-4xl font-bold mb-10'>Current Openings</h1>
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
    )
}

export default CareerCard