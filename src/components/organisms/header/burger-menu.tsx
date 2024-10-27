'use client';

import { useState } from 'react';
import { BurgerButton, BurgerContainer } from '@/components/atoms/burger';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu} className="md:hidden" />
            <BurgerContainer
                isOpen={isOpen}
                direction="down"
                className="top-[64px] border-b bg-white shadow dark:bg-slate-800"
            >
                <div className="flex flex-col items-center justify-center space-y-3 text-black">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
            </BurgerContainer>
        </>
    );
};

export default BurgerMenu;
