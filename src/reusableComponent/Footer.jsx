import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white py-8 px-4">
            <div className="container mx-auto">
                <div className="lg:flex lg:justify-between">
                    {/* First Section */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <div className="flex flex-col items-center mb-4">
                            <img src="https://getpeppermint.co/wp-content/uploads/2023/07/Final-logo-Peppermint-13.png" alt="Company Logo" className="w-48 h-72 mr-2" />
                            <div>
                                <h3 className="text-lg font-semibold">Peppermint</h3>
                                <p className='font-serif'><i className="fa-solid fa-location-crosshairs"></i> : Survey No 116, 3/1, opp. ShubhTej Mangal Karyalay, near Balaji Chowk, Jai Bhavani Nagar, Pashan, Pune, Maharashtra 411021</p>
                                <p className="text-gray-300"><i className="fa-regular fa-envelope"></i> Email:info@getpeppermint.co</p>
                                <p className="text-gray-300"><i className="fa-solid fa-address-book"></i> Contact:+91 89567 10044</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0 font-serif">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="list-disc leading-8 pl-10">
                            <li><a href="/" className="text-gray-300 hover:text-teal-500">Home</a></li>
                            <li><a href="/contact" className="text-gray-300 hover:text-teal-500">FAQs</a></li>
                            <li><a href="/solution" className="text-gray-300 hover:text-teal-500">Case Studies</a></li>
                            <li><a href="/product" className="text-gray-300 hover:text-teal-500">Products</a></li>
                            <li><a href="/solution" className="text-gray-300 hover:text-teal-500">Blog</a></li>
                            <li><a href="/contact" className="text-gray-300 hover:text-teal-500">Privacy Policy</a></li>
                            <li><a href="/carrier" className="text-gray-300 hover:text-teal-500">Careers</a></li>
                        </ul>
                    </div>

                    {/* Third Section */}
                    <div className="lg:w-1/3 font-serif">
                        <h3 className="text-lg font-semibold mb-6">Recent Posts</h3>
                        <ul className="list-disc mb-3">
                            <li className='hover:text-teal-500'>Elevating Efficiency: Evolution of Material Handling with AMRs</li>
                            <li className='hover:text-teal-500'>Autonomous Mobile Robots: The Future of Efficient Material Handling</li>
                            <li className='hover:text-teal-500'>Robotic Floor Scrubbers – The Future of Autonomous Cleaning at Airports</li>
                        </ul>
                    </div>
                </div>
                <hr />

                <p className="text-sm mt-6 text-center">&copy; 2023 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
