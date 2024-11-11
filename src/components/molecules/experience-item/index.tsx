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
            className={cn('max-w-xl', 'flex gap-4', 'shadow-sm', 'rounded border dark:border-white/30', className)}
            {...props}
        >
            <div className="">
                <Image className={cn('bg-white', 'rounded')} src={logoSrc} width={64} height={64} alt="company-logo" />
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
                <div>
                    <span>{employmentStartDate}</span>
                    <span> - </span>
                    <span>{employmentEndDate}</span>
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;
