'use client';

import React, { useState } from 'react';

const BurgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button className="flex flex-col items-center justify-center w-8 h-8 space-y-1.5" onClick={toggleMenu}>
                <span
                    className={`block w-8 h-0.5 bg-black transform transition duration-300 ${
                        isOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                ></span>
                <span
                    className={`block w-8 h-0.5 bg-black transition duration-300 ${isOpen ? 'opacity-0' : ''}`}
                ></span>
                <span
                    className={`block w-8 h-0.5 bg-black transform transition duration-300 ${
                        isOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                ></span>
            </button>
            <div
                className={`absolute top-10 left-0 w-48 p-2 bg-white border border-gray-200 shadow-lg transition-transform duration-300 ease-in-out ${
                    isOpen ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95'
                }`}
            >
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Home
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    About
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Contact
                </a>
            </div>
        </div>
    );
};

export default BurgerMenu;
