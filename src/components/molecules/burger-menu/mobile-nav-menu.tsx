import Link from 'next/link';
import cn from '@/utils/cn';
import { NavigationConfig } from '@/constants/header';
import SocialIconLinks from '@/components/molecules/social-icon-links';

interface MobileNavMenuProps {
    onItemClick: () => void;
}

const MobileNavMenu = ({ onItemClick }: MobileNavMenuProps) => {
    return (
        <nav
            className={cn(
                'flex items-center justify-center p-4 text-center font-semibold text-slate-700 dark:text-slate-400',
            )}
        >
            <ul className={cn('flex flex-col gap-4')}>
                {NavigationConfig?.map(({ href, label }) => (
                    <li key={href}>
                        <Link href={href} onClick={onItemClick}>
                            {label}
                        </Link>
                    </li>
                ))}
                <li>
                    <SocialIconLinks className="gap-3 text-2xl" />
                </li>
            </ul>
        </nav>
    );
};

export default MobileNavMenu;
