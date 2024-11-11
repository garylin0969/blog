'use client';

import { FaArrowUp } from 'react-icons/fa';
import cn from '@/utils/cn';

const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={handleScrollToTop}
            className={cn(
                'group',
                'fixed bottom-6 right-6',
                'h-12 w-12 rounded-full',
                'bg-white text-slate-800',
                'flex items-center justify-center',
                'shadow-sm dark:shadow-slate-400',
                'transition-colors duration-300',
            )}
        >
            <FaArrowUp className="transition-transform duration-300 group-hover:scale-125" />
        </button>
    );
};

export default ScrollToTopButton;
