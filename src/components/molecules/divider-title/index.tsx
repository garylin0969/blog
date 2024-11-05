import cn from '@/utils/cn';

const DividerLine = () => {
    return <span className="h-px flex-1 bg-black dark:bg-white" />;
};

interface DividerTitleProps {
    align?: 'left' | 'center' | 'right';
    title?: string;
}

const DividerTitle = ({ align = 'center', title = '' }: DividerTitleProps) => {
    return (
        <span className="my-9 flex items-center">
            {align !== 'left' && <DividerLine />}
            <span
                className={cn(
                    'text-3xl font-medium tracking-wider dark:text-slate-200',
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
