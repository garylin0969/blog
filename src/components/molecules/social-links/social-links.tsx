import SocialLink from '@/components/atoms/social-link';
import { SOCIAL_LINKS } from '@/constants/social-links';
import { cn } from '@/utils/shadcn';

interface SocialLinksProps {
    className?: string;
    iconClassName?: string;
}

const SocialLinks = ({ className, iconClassName }: SocialLinksProps) => {
    return (
        <div className={cn('flex items-center gap-x-2', className)}>
            {SOCIAL_LINKS.map((link) => (
                <SocialLink
                    key={link.label}
                    href={link.href}
                    target={link.target}
                    icon={link.icon}
                    label={link.label}
                    className={iconClassName}
                />
            ))}
        </div>
    );
};

export default SocialLinks;
