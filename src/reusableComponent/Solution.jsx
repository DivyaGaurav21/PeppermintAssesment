import React from 'react'
import Button from '../subcomponent/Button'


const Solution = ({ solutions }) => {
    return (
        <>
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
            <div className="flex items-center w-[50%] ml-8">
                {/* Circular Icon */}
                <div className="w-[ rounded-full bg-slate-400 relative left-[70px]">
                    <i className="fa-solid fa-user h-24 w-24 flex justify-center items-center text-5xl"></i>
                </div>
                {/* Paragraph Container */}
                <div className="bg-slate-400 pl-16 py-5 ml-4 w-400 h-250 rounded-lg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio hic dicta fugit autem exercitationem reiciendis consequuntur, nam sed cumque voluptatum, sequi porro voluptatibus. Temporibus maxime non quibusdam, quae explicabo totam cupiditate fuga iure, voluptatibus </p>
                </div>
            </div>
        </>
    )
}

export default Solution