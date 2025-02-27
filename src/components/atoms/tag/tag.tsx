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
        'transition-colors',
        mode === 'light' && [
            variant === 'default' && 'bg-sky-50 text-sky-500 hover:bg-sky-100',
            variant === 'primary' && 'bg-purple-50 text-purple-500 hover:bg-purple-100',
            variant === 'secondary' && 'bg-gray-50 text-gray-600 hover:bg-gray-100',
        ],
        mode === 'dark' && [
            variant === 'default' && 'bg-sky-400/10 text-sky-400 hover:bg-sky-400/20',
            variant === 'primary' && 'bg-purple-400/10 text-purple-400 hover:bg-purple-400/20',
            variant === 'secondary' && 'bg-gray-700/30 text-gray-300 hover:bg-gray-700/40',
        ],
        !mode &&
            variant === 'default' && [
                'bg-sky-50 dark:bg-sky-400/10',
                'text-sky-500 dark:text-sky-400',
                'border border-sky-200 dark:border-sky-400/20',
                'hover:bg-sky-100 dark:hover:bg-sky-400/20',
            ],
        !mode &&
            variant === 'primary' && [
                'bg-purple-50 dark:bg-purple-400/10',
                'text-purple-500 dark:text-purple-400',
                'border border-purple-200 dark:border-purple-400/20',
                'hover:bg-purple-100 dark:hover:bg-purple-400/20',
            ],
        !mode &&
            variant === 'secondary' && [
                'bg-gray-50 dark:bg-gray-700/30',
                'text-gray-600 dark:text-gray-300',
                'border border-gray-200 dark:border-gray-600/30',
                'hover:bg-gray-100 dark:hover:bg-gray-700/50',
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
