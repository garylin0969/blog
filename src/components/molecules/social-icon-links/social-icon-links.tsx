import { ReactNode } from 'react';
import cn from '@/utils/cn';
import { BaseLink } from '@/components/atoms/link';
import SocialIconLinksConfig from '@/configs/components/social-icon-links.config';

const filteredSocialIconLinksConfig = SocialIconLinksConfig.filter((data) => data?.enabled);

interface SocialIconLinksProps {
    links?: { id?: string; icon?: ReactNode | (() => JSX.Element); link?: string }[];
    className?: string;
}

const SocialIconLinks = ({ links = filteredSocialIconLinksConfig, className }: SocialIconLinksProps) => {
    return (
        <div className={cn('flex flex-wrap gap-2', className)}>
            {links?.map((data) => (
                <BaseLink key={data?.id} href={data?.link} className="text-slate-400 dark:text-slate-300">
                    {typeof data?.icon === 'function' ? data?.icon() : data?.icon}
                </BaseLink>
            ))}
        </div>
    );
};

export default SocialIconLinks;
