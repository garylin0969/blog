'use client';

import { useState } from 'react';
import Link from 'next/link';
import cn from '@/utils/cn';
import { BurgerButton, BurgerContainer } from '@/components/molecules/burger';
import { NavigationConfig } from '@/constants/header';
import SocialIconLinks from '@/components/molecules/social-icon-links';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <>
            {/* 背景遮罩 */}
            <div
                className={cn(
                    'fixed inset-0 top-16 h-[calc(100vh-64px)] w-screen bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden',
                    isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
                )}
                onClick={toggleMenu} // 點擊遮罩關閉選單
            />
            <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu} className="md:hidden" />
            <BurgerContainer
                isOpen={isOpen}
                direction="down"
                className={cn('top-16 z-50 bg-white dark:bg-slate-900 md:hidden', isOpen && 'shadow')}
            >
                <nav
                    className={cn(
                        'flex items-center justify-center p-4 text-center font-semibold text-slate-700 dark:text-slate-400',
                    )}
                >
                    <ul className={cn('flex flex-col gap-4')}>
                        {NavigationConfig?.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href} onClick={toggleMenu}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <SocialIconLinks className="gap-3 text-2xl" />
                        </li>
                    </ul>
                </nav>
            </BurgerContainer>
        </>
    );
};

export default BurgerMenu;
