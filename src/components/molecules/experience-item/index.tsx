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
        <div className={cn('flex gap-4', 'max-w-xl', className)} {...props}>
            <div className="">
                <Image
                    className={cn('bg-white', 'rounded border border-[#e2e6e4]')}
                    src={logoSrc}
                    width={64}
                    height={64}
                    loading="lazy"
                    alt="company-logo"
                />
            </div>
            <div>
                <div>
                    <h4 className="text-lg font-semibold">{title}</h4>
                </div>
                <div className="mb-1 text-base">
                    {companyUrl ? (
                        <a href={companyUrl} target="_blank" rel="noreferrer noopener">
                            {companyName}
                        </a>
                    ) : (
                        companyName
                    )}
                </div>
                <div className={cn('text-center', 'bg-slate-500 text-white', 'dark:bg-white dark:text-black')}>
                    <span>{employmentStartDate}</span>
                    <span> - </span>
                    <span>{employmentEndDate}</span>
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;
