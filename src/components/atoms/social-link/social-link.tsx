import { IconType } from 'react-icons';
import { cn } from '@/utils/shadcn';

interface SocialLinkProps {
    href: string;
    target: string;
    icon: IconType;
    label: string;
    className?: string;
}

const SocialLink = ({ href, target, icon: IconComponent, label, className }: SocialLinkProps) => {
    return (
        <a href={href} target={target} rel="noopener noreferrer" aria-label={label}>
            <IconComponent className={cn('size-4', className)} />
        </a>
    );
};

export default SocialLink;
