import Image from 'next/image';
import cn from '@/utils/cn';
import { DivPropsT } from '@/interfaces/html';

interface ExperienceItemProps extends DivPropsT {
    logoSrc?: string;
    title?: string;
    companyUrl?: string;
    companyName?: string;
    employmentStartDate?: string;
    employmentEndDate?: string;
}

const ExperienceItem = ({
    logoSrc = '',
    title = '',
    companyUrl = '',
    companyName = '',
    employmentStartDate = '',
    employmentEndDate = '',
    className,
    ...props
}: ExperienceItemProps) => {
    return (
        <div
            className={cn(
                'max-w-xl',
                'flex gap-4',
                'p-4',
                'shadow-lg hover:shadow-xl',
                'rounded-xl border border-purple-100 dark:border-white/30',
                'bg-gradient-to-br from-white to-purple-50/30',
                'dark:from-slate-900 dark:to-slate-900',
                className,
            )}
            {...props}
        >
            <div>
                <Image
                    className={cn(
                        'aspect-square w-16',
                        'bg-white',
                        'rounded-lg',
                        'shadow-sm',
                        'transition-transform duration-300 hover:scale-105',
                    )}
                    src={logoSrc}
                    width={64}
                    height={64}
                    alt={companyName}
                />
            </div>
            <div>
                <div>
                    <h4 className="text-lg font-semibold">{title}</h4>
                </div>
                <div className="mb-1 text-base">
                    {companyUrl ? (
                        <a
                            href={companyUrl}
                            className="hover:text-sky-500 dark:hover:text-sky-400"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            {companyName}
                        </a>
                    ) : (
                        companyName
                    )}
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                    <span>{employmentStartDate}</span>
                    <span> - </span>
                    <span>{employmentEndDate}</span>
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;
