import SocialLink from '@/components/atoms/social-link';
import { SOCIAL_LINKS } from '@/constants/social-links';
import { cn } from '@/utils/shadcn';

/**
 * 社交連結列表元件的屬性介面。
 */
interface SocialLinksProps {
    /** 額外的 CSS 類名。 */
    className?: string;
    /** 圖示的 CSS 類名。 */
    iconClassName?: string;
}

/**
 * 社交連結列表元件。
 *
 * 顯示一組社交媒體連結圖示。
 *
 * @param className - 額外的 CSS 類名 {@link SocialLinksProps.className}。
 * @param iconClassName - 圖示樣式 {@link SocialLinksProps.iconClassName}。
 */
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
