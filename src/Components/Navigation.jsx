import React, { useState } from 'react';

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };


    const navLinks = [
        { text: 'HOME', link: '#' },
        { text: 'ABOUT US', link: '#' },
        { text: 'SOLUTIONS', link: '#' },
        { text: 'PRODUCTS', link: '#' },
        { text: 'CONTACT US', link: '#' },
        { text: 'CAREER', link: '#' },
    ];

    return (
        <nav className={`sticky z-20 top-0 left-0 w-full bg-slate-700 text-white transition-all duration-300 ${isNavOpen ? 'h-full' : 'h-20'} md:h-20`}>
            <div className="container mx-auto flex items-center justify-between h-full">
                {/* Company Logo */}
                <div>
                    <img src="https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png" alt="Company Logo" className="w-[100px] h-10 min-w-[80px]" />
                </div>

                {/* Navigation Links */}
                <div className={`md:flex ${isNavOpen ? 'block' : 'hidden md:block'}`}>
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.link}
                            className="mx-2 py-2 hover:text-teal-600 transition-colors duration-300"
                        >
                            {link.text}
                        </a>
                    ))}
                </div>

                {/* Social Links */}
                <div className={`flex md:flex ${isNavOpen ? 'block' : 'hidden md:block'}`}>
                    <a href="#" className="mx-1 text-white hover:text-teal-600">
                        <i className="fa-solid fa-search border-black border rounded-full p-2 hover:border-teal-600"></i>
                    </a>

                    <a href="#" className="mx-2 text-white hover:text-teal-600">
                        <i className="fa-brands fa-twitter border-white border rounded-full p-2 hover:border-teal-600"></i>
                    </a>
                    <a href="#" className="mx-2 text-white hover:text-teal-600">
                        <i className="fa-brands fa-linkedin border-white border rounded-full p-2 hover:border-teal-600"></i>
                    </a>
                    <a href="#" className="mx-2 text-white hover:text-teal-600">
                        <i className="fa-brands fa-youtube border-white border rounded-full p-2 hover:border-teal-600"></i>
                    </a>
                    <a href="#" className="mx-2 text-white hover:text-teal-600">
                        <i className="fa-solid fa-envelope border-white border rounded-full p-2 hover:border-teal-600"></i>
                    </a>
                </div>


                <button
                    className="md:hidden text-white hover:text-teal-600 relative z-100 w-100px"
                    onClick={toggleNav}
                >
                    {isNavOpen ? 'Close' : 'Open'}
                </button>


            </div>
        </nav>
    );
};

export default Navigation;

