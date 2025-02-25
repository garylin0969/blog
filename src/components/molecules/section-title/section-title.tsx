import { SpanPropsT } from '@/interfaces/html';
import cn from '@/utils/cn';

const DividerLine = () => {
    return <span className="h-px flex-1 bg-black dark:bg-white" />;
};

interface SectionTitleProps extends SpanPropsT {
    align?: 'left' | 'center' | 'right';
    title?: string;
    showDivider?: boolean;
}

const SectionTitle = ({ align = 'center', title = '', showDivider = true, className, ...props }: SectionTitleProps) => {
    return (
        <span
            className={cn(
                'flex items-center',
                'font-serif text-xl font-bold tracking-wider dark:text-slate-200',
                'md:text-3xl',
                className,
            )}
            {...props}
        >
            {showDivider && align !== 'left' && <DividerLine />}
            {title && (
                <h2
                    className={cn(
                        align === 'center' && 'shrink-0 px-6',
                        align === 'left' && (showDivider ? 'pr-6' : ''),
                        align === 'right' && (showDivider ? 'pl-6' : ''),
                    )}
                >
                    {title}
                </h2>
            )}
            {showDivider && align !== 'right' && <DividerLine />}
        </span>
    );
};

export default SectionTitle;
