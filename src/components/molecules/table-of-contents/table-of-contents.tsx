import Link from 'next/link';
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
    if (!headings || headings?.length === 0) {
        return null;
    }

    return (
        <nav className={cn('border-l pl-4', className)}>
            <ul className="space-y-1">
                {headings?.map((heading, index) => (
                    <li key={index}>
                        <Link
                            href={`#${heading.text}`}
                            className={cn(
                                'hover:bg-muted block rounded px-2 py-1 text-sm transition-colors',
                                // 根據標題層級調整縮排
                                heading.level === 1 && 'pl-0',
                                heading.level === 2 && 'pl-4',
                                heading.level === 3 && 'pl-8',
                                heading.level === 4 && 'pl-12',
                                heading.level === 5 && 'pl-16',
                                heading.level === 6 && 'pl-20'
                            )}
                        >
                            {heading.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
