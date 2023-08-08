import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-zinc-800 text-white py-8 px-3">
            <div className="container mx-auto">
                <div className="lg:flex lg:justify-between">
                    {/* First Section */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <div className="flex flex-col items-center mb-4">
                            <img src="https://getpeppermint.co/wp-content/uploads/2023/07/Final-logo-Peppermint-13.png" alt="Company Logo" className="w-80 h-80 mr-2" />
                            <div>
                                <h3 className="text-lg font-semibold">Your Company Name</h3>
                                <p className="text-gray-300">Email: info@company.com</p>
                                <p className="text-gray-300">Contact: (123) 456-7890</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="list-disc leading-8">
                            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Case Studies</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Products</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                        </ul>
                    </div>

                    {/* Third Section */}
                    <div className="lg:w-1/3">
                        <h3 className="text-lg font-semibold mb-6">Recent Posts</h3>
                        <ul className="list-disc mb-3">
                            <li>Elevating Efficiency: Evolution of Material Handling with AMRs</li>
                            <li>Autonomous Mobile Robots: The Future of Efficient Material Handling</li>
                            <li>Robotic Floor Scrubbers – The Future of Autonomous Cleaning at Airports</li>
                        </ul>
                    </div>
                </div>
                <hr/>

                <p className="text-sm mt-6 text-center">&copy; 2023 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
