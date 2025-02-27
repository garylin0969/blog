'use client';

import Link from 'next/link';
import cn from '@/utils/cn';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
    className?: string;
}

const Pagination = ({ currentPage, totalPages, baseUrl, className }: PaginationProps) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className={cn('flex items-center justify-center gap-2', className)}>
            <Link
                href={currentPage > 1 ? `${baseUrl}?page=${currentPage - 1}` : baseUrl}
                className={cn(
                    'rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600 dark:hover:bg-sky-400',
                    currentPage === 1 && 'pointer-events-none opacity-50',
                )}
            >
                Previous
            </Link>

            {pages.map((page) => (
                <Link
                    key={page}
                    href={page === 1 ? baseUrl : `${baseUrl}?page=${page}`}
                    className={cn(
                        'min-w-[2.5rem] rounded-md px-4 py-2 text-center text-sm font-semibold text-white',
                        page === currentPage ? 'bg-sky-700' : 'bg-sky-500 hover:bg-sky-600 dark:hover:bg-sky-400',
                    )}
                >
                    {page}
                </Link>
            ))}

            <Link
                href={`${baseUrl}?page=${currentPage + 1}`}
                className={cn(
                    'rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600 dark:hover:bg-sky-400',
                    currentPage === totalPages && 'pointer-events-none opacity-50',
                )}
            >
                Next
            </Link>
        </div>
    );
};

export default Pagination;
