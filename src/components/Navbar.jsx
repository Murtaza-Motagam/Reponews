import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location  = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-default font-fam-roboto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className='font-fam-fjalla lg:text-3xl sm:text-lg text-white font-bold'>Reponews</Link>
                        <span className='text-white font-700 font-fam-poppins md:text-sm  sm:text-sm lg:text-lg ml-3'>- The News Mania</span>
                    </div>
                    {/* Mobile menu button */}
                    <div className="flex items-center -mr-2 sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none "
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden sm:flex sm:items-center">
                        {/* Menu items */}
                        <Link
                            to="/trending"
                            className={`text-white hover:bg-red-700 px-3 mr-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/trending' ? 'active' : ''}`}
                        >
                           Trending
                        </Link>
                        <Link
                            to="/news"
                             className={`text-white hover:bg-red-700 px-3 mr-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/news' ? 'active' : ''}`}
                        >
                            News
                        </Link>
                        <Link
                            to="/"
                            className="text-white hover:bg-red-700 px-3 mr-3 py-2 rounded-md text-sm font-medium"
                        >
                            About NR
                        </Link>
                        <Link
                            to="/contact"
                            className={`text-white hover:bg-red-700 px-3 mr-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/contact' ? 'active' : ''}`}
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="hidden sm:flex sm:items-center ">
                        {/* Menu items */}
                        <Link to="/" className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                            Register
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {
                isOpen && (
                    <div className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-default">
                            {/* Mobile menu items */}
                            <Link
                                to="/trending"
                                className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Trending
                            </Link>
                            <Link
                                to="/news"
                                className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                News
                            </Link>
                            <Link
                                to="/"
                                className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                About NR
                            </Link>
                            <Link
                                to="/contact"
                                className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )
            }
        </nav >
    );
};

export default Navbar;
