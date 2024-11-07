'use client';

import { useState } from 'react';
import Link from 'next/link';
import cn from '@/utils/cn';
import { BurgerButton, BurgerContainer } from '@/components/molecules/burger';
import { navConfig } from '@/constants/header';
import SocialIconLinks from '@/components/molecules/social-icon-links';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <>
            <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu} className="md:hidden" />
            <BurgerContainer
                isOpen={isOpen}
                direction="down"
                className={cn('top-16', 'bg-white/90 dark:bg-black/80', 'md:hidden', isOpen && 'shadow')}
            >
                <nav
                    className={cn(
                        'p-4',
                        'text-center',
                        'flex items-center justify-center',
                        'font-semibold text-slate-700 dark:text-slate-400',
                    )}
                >
                    <ul className={cn('flex flex-col gap-4')}>
                        {navConfig?.map((data) => {
                            return (
                                <li key={data?.href}>
                                    <Link href={data?.href} onClick={toggleMenu}>
                                        {data?.label}
                                    </Link>
                                </li>
                            );
                        })}
                        <li>
                            <SocialIconLinks className="text-xl" />
                        </li>
                    </ul>
                </nav>
            </BurgerContainer>
        </>
    );
};

export default BurgerMenu;
