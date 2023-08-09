import React from 'react'
import Button from '../subcomponent/Button'

const CareerCard = ({ jobs }) => {
    return (
        <div className='mt-[80px] mb-[60px] flex flex-col justify-center items-center'>
            <h3 className='text-center text-1xl text-cyan-400 font-serif mb-6 font-extrabold'>WE'RE HIRING!</h3>
            <h1 className='text-center text-4xl font-bold mb-10'>Current Openings</h1>
            <div className='flex flex-wrap justify-center items-center gap-4 w-[80%]'>
                {
                    jobs.map(job => (
                        <div className="bg-white rounded-lg shadow-md text-center p-12 w-[350px] h-[400px]" key={job.id}>
                            {/* Job Title */}
                            <h2 className="text-xl font-semibold mb-2">{job.jobTitle}</h2>
                            {/* Job Name */}
                            <p className="text-gray-600 mb-2">{job.jobPost}I</p>
                            {/* Horizontal Line */}
                            <hr className="border-t-2 border-gray-300 my-2"></hr>
                            {/* List of Technologies */}
                            {

                                <ul className="list-disc pl-6 text-gray-500 leading-10 mb-7 text-left">
                                    {
                                        job.jobDepartment.map((dep, i) => <li key={i}>{dep}</li>)
                                    }
                                </ul>

                            }
                            <Button className="text-center">Apply Now</Button>
                        </div>
                    ))

                }

            </div>
        </div>
    )
}

export default CareerCard