import { LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/utils/shadcn';

interface DocsHeadingProps {
    className?: string;
    iconClassName?: string;
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    title: string;
}

const DocsHeading = ({ className, iconClassName, as, title }: DocsHeadingProps) => {
    const Component = as;
    return (
        <Component className={cn('scroll-mt-24', className)} id={title}>
            <Link href={`#${title}`} title={title} className="group inline-flex items-center gap-x-1 no-underline">
                {title}
                <LinkIcon
                    className={cn(
                        'text-primary opacity-0 transition-opacity group-hover:opacity-100',
                        as === 'h1' && 'size-6',
                        as === 'h2' && 'size-5',
                        as === 'h3' && 'size-4',
                        as === 'h4' && 'size-3.5',
                        as === 'h5' && 'size-3.5',
                        as === 'h6' && 'size-3.5',
                        iconClassName
                    )}
                />
            </Link>
        </Component>
    );
};

export default DocsHeading;
