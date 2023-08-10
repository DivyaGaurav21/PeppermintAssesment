import React from 'react'

const IndustrySolution = ({ iSolutions }) => {
    return (
        <div className='my-16'>
            <h2 className='text-center text-1xl text-cyan-400 font-serif mt-10 font-extrabold'>OUR SOLUTIONS</h2>
            <h1 className='text-center text-4xl font-bold mb-5'>Our Solutions tuned to your industry</h1>
            <div className='my-10 flex justify-start gap-4 flex-wrap'>

                {
                    iSolutions.map(iSolution => (
                        <div className="flex items-center w-[99%] md:w-[45%]" key={iSolution.id}>
                            {/* Circular Icon */}
                            <div className="w-[ rounded-full bg-zinc-200 relative left-[70px]">
                                <i className={`fa-solid fa-industry ${iSolution.iLogo} h-24 w-24 flex justify-center items-center text-5xl text-teal-400`}></i>
                            </div>
                            {/* Paragraph Container */}
                            <div className="bg-zinc-200 pl-16 py-5 ml-4 w-400 h-250 rounded-lg" >
                                <h1 className='font-bold mb-2'>{iSolution.iTitle}</h1>
                                <p className='pr-2 font-normal text-sm'>{iSolution.iAbout}</p>
                            </div>
                        </div>
                    ))
                }

            </div >
        </div >
    )
}

export default IndustrySolution