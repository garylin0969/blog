'use client';

import Link from 'next/link';
import { useActiveHeadings } from '@/hooks';
import { cn } from '@/utils/shadcn';

interface TableOfContentsProps {
    className?: string;
    headings?: {
        level: number;
        text: string;
    }[];
}

// 目錄
const TableOfContents = ({ headings, className }: TableOfContentsProps) => {
    const activeHeadings = useActiveHeadings(headings ?? []);

    if (!headings || headings?.length === 0) {
        return null;
    }

    return (
        <nav className={cn(className)}>
            <ul>
                {headings?.map((heading, index) => {
                    const isActive = activeHeadings?.includes(heading?.text);

                    return (
                        <li
                            key={index}
                            className={cn('border-l pl-[1px]', isActive && 'border-primary border-l-2 pl-0')}
                        >
                            <Link
                                title={heading?.text}
                                href={`#${heading?.text}`}
                                className={cn(
                                    'hover:bg-muted hover:text-foreground text-muted-foreground block rounded px-2 py-1 text-sm transition-all duration-200',
                                    // 根據標題層級調整縮排
                                    heading?.level === 1 && 'pl-4',
                                    heading?.level === 2 && 'pl-8',
                                    heading?.level === 3 && 'pl-12',
                                    heading?.level === 4 && 'pl-16',
                                    heading?.level === 5 && 'pl-20',
                                    heading?.level === 6 && 'pl-24',
                                    isActive && 'bg-muted text-foreground'
                                )}
                            >
                                {heading?.text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default TableOfContents;
