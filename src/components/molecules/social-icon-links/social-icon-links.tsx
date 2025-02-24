import cn from '@/utils/cn';
import { BaseLink } from '@/components/atoms/link';
import { SocialIconLinksConfig } from '@/constants/personal';

interface SocialIconLinksProps {
    links?: { link?: string; icon: JSX.Element }[];
    className?: string;
}

const SocialIconLinks = ({ links = SocialIconLinksConfig, className }: SocialIconLinksProps) => {
    return (
        <div className={cn('flex flex-wrap gap-2', className)}>
            {links?.map((data) => (
                <BaseLink key={data?.link} href={data?.link} className="text-slate-400 dark:text-slate-300">
                    {data?.icon}
                </BaseLink>
            ))}
        </div>
    );
};

export default SocialIconLinks;
