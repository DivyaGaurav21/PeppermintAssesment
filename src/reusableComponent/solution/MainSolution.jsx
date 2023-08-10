import React from 'react'
import Button from '../../subcomponent/Button'

const MainSolution = ({ solutions }) => {
    return (
        <div className='pt-[50px] pb-[60px] flex flex-col justify-center items-center bg-neutral-200'>
            <h3 className='text-center text-1xl text-cyan-400 font-serif mb-3 font-extrabold'>SOLUTIONS</h3>
            <h1 className='text-center text-4xl font-bold mb-10'>OUR SOLUTIONS</h1>
            <div className='flex flex-wrap justify-center items-center gap-8 w-[80%]'>

                {
                    solutions.map(solution => (
                        <div className="bg-white w-[300px] h-[400px] md:w-[400px] rounded-lg shadow-md flex flex-col justify-between" key={solution.id}>
                            {/* Image */}
                            <img src={solution.imageSrc} alt="Card" className="object-contain mx-auto mb-2" />
                            {/* Title */}
                            <h3 className="text-center text-xl font-semibold mb-2">{solution.title}</h3>
                            {/* Button */}
                            <div className='mb-10 text-center'>
                                <Button>{solution.buttonText}</Button>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default MainSolution