import React from 'react'
import Button from '../subcomponent/Button'
const jobs = [
    {
        id: 1,
        jobTitle: "SDE II",
        jobPost: "Software Development Engineer II",
        jobDepartment: ["Python , API, MongoDB", "Dockers, Flutter", "Mobile App Development", "WebApp Developement"]
    },
    {
        id: 2,
        jobTitle: "RE - I (PERCEPTION)",
        jobPost: "Robotics Engineer I",
        jobDepartment: ["C++ ROS1/ROS2", "SLAM, OpenCV.", "CUDA, Pytorch.", "TensorFlow, Navigation"]
    },
    {
        id: 3,
        jobTitle: "SCE I",
        jobPost: "Supply Chain Engineer",
        jobDepartment: ["Lean Six Sigma", "Supply chain management", "Inventory", "JIT"]
    },
    {
        id: 4,
        jobTitle: "SDE 2",
        jobPost: "FullStack Engineer",
        jobDepartment: ["Frontend", "Backend", "JavaScript", "java Developer"]
    },
    {
        id: 5,
        jobTitle: "RE - I (PERCEPTION)",
        jobPost: "Robotics Engineer I",
        jobDepartment: ["C++ ROS1/ROS2", "SLAM, OpenCV.", "CUDA, Pytorch.", "TensorFlow, Navigation"]
    },
    {
        id: 6,
        jobTitle: "SCE I",
        jobPost: "Supply Chain Engineer",
        jobDepartment: ["Lean Six Sigma", "Supply chain management", "Inventory", "JIT"]
    },
]

const CareerCard = () => {
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
                                job.jobDepartment.map((dep, i) => (
                                    <ul className="list-disc pl-6 text-gray-500 leading-10 mb-2 text-left">
                                        <li key={i}>{dep}</li>
                                    </ul>
                                ))
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