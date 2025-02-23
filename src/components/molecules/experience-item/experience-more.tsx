'use client';

import { useState, memo } from 'react';
import cn from '@/utils/cn';
import { BurgerContainer } from '../burger';
import { DivPropsT } from '@/interfaces/html';

interface ExperienceMoreProps extends DivPropsT {
    responsibilities?: string[];
}

const ExperienceMore = memo(({ responsibilities = [] }: ExperienceMoreProps) => {
    const [isOpend, setIsOpend] = useState(false);

    const toggleExpand = () => {
        setIsOpend((prev) => !prev);
    };
    return (
        <>
            <div className="mt-2">
                <button
                    onClick={toggleExpand}
                    className={cn(
                        'flex w-full items-center justify-center gap-2',
                        'px-4 py-2',
                        'rounded-lg',
                        'text-sm font-medium',
                        'bg-sky-500 hover:bg-sky-600',
                        'dark:bg-sky-400 dark:hover:bg-sky-500',
                        'text-white',
                        'shadow-sm hover:shadow',
                        'transform transition-all duration-200',
                        'active:scale-[0.98]',
                        'focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:focus:ring-sky-400/50',
                    )}
                >
                    <span className={cn('transition-transform duration-200', isOpend ? 'rotate-180' : '')}>
                        {/* 箭頭圖標 */}
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                    <span>More details</span>
                </button>
            </div>
            <BurgerContainer className="relative" isOpen={isOpend} direction="down">
                <ul className={cn('list-inside list-disc space-y-1 rounded-lg', 'p-4')}>
                    {responsibilities.map((responsibility, index) => (
                        <li
                            key={index}
                            className="ml-4 rounded-md border border-transparent p-1 text-base transition-colors duration-200 hover:border-gray-300 hover:bg-gray-200 dark:hover:border-slate-500 dark:hover:bg-slate-600"
                        >
                            {responsibility}
                        </li>
                    ))}
                </ul>
            </BurgerContainer>
        </>
    );
});

export default ExperienceMore;
