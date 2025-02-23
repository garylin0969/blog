import cn from '@/utils/cn';
import { DivPropsT } from '@/interfaces/html';
import { AboutInfoConfig } from '@/constants/personal';

interface AboutInfoProps extends DivPropsT {
    info?: string[];
}

const AboutInfo = ({ info = AboutInfoConfig, className, ...props }: AboutInfoProps) => {
    const containerClasses = cn(
        'relative',
        'p-6 md:p-8',
        'text-base md:text-center md:text-lg',
        'rounded-2xl',
        'bg-white/50 dark:bg-slate-800/50',
        'backdrop-blur-sm',
        'border border-slate-200 dark:border-slate-700',
        'shadow-sm',
        className,
    );

    const gradientClasses = cn(
        'absolute -inset-0.5',
        'rounded-2xl',
        'bg-gradient-to-r from-sky-500 to-purple-500',
        'opacity-20',
        'transition duration-300',
        'blur',
    );

    return (
        <div className={containerClasses} {...props}>
            {/* 裝飾性元素 */}
            <div className={gradientClasses} />
            {/* 使用 React.Fragment 來包裹 info 的映射 */}
            <>
                {info?.map((data) => (
                    <p key={data} className={cn('font-semibold')}>
                        {data}
                    </p>
                ))}
            </>
        </div>
    );
};

export default AboutInfo;
