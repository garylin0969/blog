'use client';

import { useState } from 'react';
import Link from 'next/link';
import cn from '@/utils/cn';
import { BurgerButton, BurgerContainer } from '@/components/molecules/burger';
import { iconConfig, navConfig } from '@/constants/header';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <>
            <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu} className="md:hidden" />
            <BurgerContainer
                isOpen={isOpen}
                direction="down"
                className={cn(
                    'top-16',
                    'shadow',
                    'border-b border-slate-800/10 dark:border-slate-300/10',
                    'bg-white/95 dark:bg-slate-800',
                    'md:hidden',
                )}
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
                                    <Link href={data?.href}>{data?.label}</Link>
                                </li>
                            );
                        })}
                        <li className={cn('flex gap-4')}>
                            {iconConfig?.map((data) => {
                                return (
                                    <a
                                        key={data?.link}
                                        className="text-slate-500 dark:text-slate-300"
                                        href={data?.link}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        {data?.icon}
                                    </a>
                                );
                            })}
                        </li>
                    </ul>
                </nav>
            </BurgerContainer>
        </>
    );
};

export default BurgerMenu;
