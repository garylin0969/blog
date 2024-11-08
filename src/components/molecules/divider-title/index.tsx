import { SpanPropsT } from '@/interfaces/html';
import cn from '@/utils/cn';

const DividerLine = () => {
    return <span className="h-px flex-1 bg-black dark:bg-white" />;
};

interface DividerTitleProps extends SpanPropsT {
    align?: 'left' | 'center' | 'right';
    title?: string;
}

const DividerTitle = ({ align = 'center', title = '', className, ...props }: DividerTitleProps) => {
    return (
        <span
            className={cn(
                'flex items-center',
                'text-xl font-bold tracking-wider dark:text-slate-200',
                'md:text-3xl',
                className,
            )}
            {...props}
        >
            {align !== 'left' && <DividerLine />}
            <span
                className={cn(
                    align === 'center' && 'shrink-0 px-6',
                    align === 'left' && 'pr-6',
                    align === 'right' && 'pl-6',
                )}
            >
                {title}
            </span>
            {align !== 'right' && <DividerLine />}
        </span>
    );
};

export default DividerTitle;
