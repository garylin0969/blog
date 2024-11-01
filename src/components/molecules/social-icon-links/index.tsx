import cn from '@/utils/cn';
import IconLink from '@/components/atoms/icon-link';
import { SocialIconLinksConfig } from '@/constants/personal';
import { IconLinkI } from '@/interfaces/social';

interface SocialIconLinksProps {
    links?: IconLinkI[];
    className?: string;
}
const SocialIconLinks = ({ links = SocialIconLinksConfig, className }: SocialIconLinksProps) => {
    return (
        <div className={cn('flex flex-wrap gap-2', className)}>
            {links?.map((data) => <IconLink key={data?.link} link={data?.link} icon={data?.icon} />)}
        </div>
    );
};

export default SocialIconLinks;
