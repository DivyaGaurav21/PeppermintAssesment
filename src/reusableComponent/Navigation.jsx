import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };


    const navLinks = [
        { text: 'HOME', link: '/' },
        { text: 'ABOUT US', link: '/about' },
        { text: 'SOLUTIONS', link: '#' },
        { text: 'PRODUCTS', link: '/product' },
        { text: 'CONTACT US', link: '#' },
        { text: 'CAREERS', link: '/career' },
    ];

    return (
        <nav className={`sticky z-20 top-0 left-0 w-full bg-slate-800 text-white transition-all duration-300 ${isNavOpen ? 'h-[100vh]' : 'h-16'}`}>
            <div className="container mx-auto flex items-center justify-between h-full flex-row">
                {/* Company Logo */}
                <div>
                    <NavLink to='/'>
                        <img src="https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png" alt="Company Logo" className="w-[100px] h-10 min-w-[80px]" />
                    </NavLink>
                </div>

                {/* Navigation Links */}
                <div className={`md:flex ${isNavOpen ? 'flex flex-col' : 'hidden md:block'}`}>
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.link}
                            className="mx-2 py-2 hover:text-teal-600 transition-colors duration-300"
                        >
                            {link.text}
                        </NavLink>
                    ))}
                </div>

                {/* Social Links */}
                <div className={`flex md:flex ${isNavOpen ? 'flex flex-col gap-4' : 'hidden md:block'}`}>
                    <a href="" className="mx-1 text-white hover:text-teal-600" target='_blank'>
                        <i className="fa-solid fa-search border-black border rounded-full p-2 hover:border-teal-600"></i>
                    </a>

                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fgetpeppermint" className="mx-2 text-white hover:text-teal-600" target='_blank'>
                        <i className="fa-brands fa-twitter border-white border rounded-full p-2 hover:border-teal-600"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/getpeppermint/" className="mx-2 text-white hover:text-teal-600" target='_blank'>
                        <i className="fa-brands fa-linkedin border-white border rounded-full p-2 hover:border-teal-600"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCsBgxvgDYRPHEKPp_tU-Qyw" className="mx-2 text-white hover:text-teal-600" target='_blank'>
                        <i className="fa-brands fa-youtube border-white border rounded-full p-2 hover:border-teal-600"></i>
                    </a>
                    <a href="https://getpeppermint.co/about-us/" className="mx-2 text-white hover:text-teal-600" target='_blank'>
                        <i className="fa-solid fa-envelope border-white border rounded-full p-2 hover:border-teal-600"></i>
                    </a>
                </div>


                <button
                    className="md:hidden text-white hover:text-teal-600 relative z-100 w-100px m-7"
                    onClick={toggleNav}
                >
                    {isNavOpen ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
                </button>


            </div>
        </nav>
    );
};

export default Navigation;
