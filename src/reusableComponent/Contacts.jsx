import React from 'react'
import Button from '../subcomponent/Button'


const Contacts = () => {
    return (
        <>
            <h1 className='text-center text-4xl mb-12 font-bold'>Contact Us</h1>
            <div className="flex flex-col md:flex-row justify-center md:space-y-0">
                {/* Box 1 */}
                <div className="flex flex-col items-center justify-center gap-6 h-[70vh] md:w-[40%] p-3">
                    {/* Your Name and Email */}
                    <div className="flex space-x-4 mb-4 w-full">
                        <input type="text" placeholder="Your Name" className="border-4 p-2 rounded w-1/2 outline-none" />
                        <input type="email" placeholder="Your Email" className="border-4 p-2 rounded w-1/2 outline-none" />
                    </div>

                    {/* Phone Number */}
                    <input type="tel" placeholder="Phone Number" className="border-4 p-2 rounded w-full mb-4 outline-none" />

                    {/* Textarea */}
                    <textarea placeholder="Your Message" className="border-4 p-2 rounded w-full h-[100px] mb-4 outline-none" />

                    {/* Button */}
                    <Button>Submit</Button>
                </div>

                {/* Box 2 */}
                <div className="p-4 w-[90%] pl-16 md:w-[40%] bg-white shadow-lg rounded-lg">
                    <div className="mb-4">
                        <i className="fa-regular fa-address-book text-teal-600 text-2xl rounded-full bg-gray-100 p-3"></i>
                        <h1 className="text-xl font-semibold mb-2">Address</h1>
                        <p className="text-gray-600">Headquarters & Engineering Centre:-
                            Survey No 116/3/1, Pashan Village Opp. ShubhTej Mangal Karyalay, Near Balaji Chowk, Pashan, Pune 411021 (INDIA)</p>
                    </div>
                    <div className="mb-4">
                        <i className="fa-regular fa-envelope text-teal-600 text-2xl rounded-full bg-gray-100 p-3"></i>
                        <h1 className="text-xl font-semibold mb-2">Email ID</h1>
                        <p className="text-gray-600">info@getpeppermint.co</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-phone text-teal-600 text-2xl rounded-full bg-gray-100 p-3"></i>
                        <h1 className="text-xl font-semibold mb-2">Phone</h1>
                        <p className="text-gray-600">+91 89567 10044</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contacts