import { SpanPropsT } from '@/types/html';
import cn from '@/utils/cn';

interface TagProps extends SpanPropsT {
    variant?: 'default' | 'primary' | 'secondary';
    mode?: 'light' | 'dark';
}

const Tag = ({ className, variant = 'default', mode, children, ...props }: TagProps) => {
    const tagClasses = cn(
        'px-2 py-1',
        'text-sm',
        'rounded-md',
        mode === 'light' && [
            variant === 'default' && 'bg-sky-100 text-sky-700 hover:bg-sky-200',
            variant === 'primary' && 'bg-purple-100 text-purple-700 hover:bg-purple-200',
            variant === 'secondary' && 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        ],
        mode === 'dark' && [
            variant === 'default' && 'bg-sky-900/50 text-sky-200 hover:bg-sky-900/70',
            variant === 'primary' && 'bg-purple-900/50 text-purple-200 hover:bg-purple-900/70',
            variant === 'secondary' && 'bg-gray-800 text-gray-200 hover:bg-gray-700',
        ],
        !mode &&
            variant === 'default' && [
                'bg-sky-100 dark:bg-sky-900/50',
                'text-sky-700 dark:text-sky-200',
                'border border-sky-200 dark:border-sky-700',
                'hover:bg-sky-200 dark:hover:bg-sky-900/70',
            ],
        !mode &&
            variant === 'primary' && [
                'bg-purple-100 dark:bg-purple-900/50',
                'text-purple-700 dark:text-purple-200',
                'border border-purple-200 dark:border-purple-700',
                'hover:bg-purple-200 dark:hover:bg-purple-900/70',
            ],
        !mode &&
            variant === 'secondary' && [
                'bg-gray-100 dark:bg-gray-800',
                'text-gray-700 dark:text-gray-200',
                'border border-gray-200 dark:border-gray-700',
                'hover:bg-gray-200 dark:hover:bg-gray-700',
            ],
        className,
    );

    return (
        <span className={tagClasses} {...props}>
            {children}
        </span>
    );
};

export default Tag;
