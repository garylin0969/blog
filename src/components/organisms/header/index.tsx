import Link from 'next/link';
import Image from 'next/image';
import cn from '@/utils/cn';
import { siteTitle, logoImg } from '@/constants/header';
import ThemeSwitch from '@/components/molecules/theme-switch';
import NavMenu from './nav-menu';
import SocialIconLinks from '@/components/molecules/social-icon-links';
import BurgerMenu from './burger-menu';
import { HeaderSocialIconLinksConfig } from '@/constants/personal';

const Header = () => {
    return (
        <header
            className={cn(
                'fixed top-0',
                'flex items-center',
                'h-16 w-full',
                'px-4 sm:px-6 lg:px-8',
                'bg-white/95 dark:bg-slate-800/75',
                'border-b border-slate-800/10 dark:border-slate-300/10',
                'md:shadow',
            )}
        >
            <div className={cn('mx-auto w-full max-w-6xl', 'flex items-center justify-between')}>
                <Link href="/" className={cn('flex items-center gap-2')}>
                    <Image src={logoImg} width={36} height={36} alt="logo" />
                    <h1 className="text-xl font-semibold text-slate-700 dark:text-slate-200">{siteTitle}</h1>
                </Link>
                <div className={cn('flex items-center gap-4')}>
                    <div className={cn('hidden', 'items-center gap-2 md:flex')}>
                        <NavMenu />
                        <SocialIconLinks
                            className="border-x-2 border-slate-200 px-2 dark:border-slate-800"
                            links={HeaderSocialIconLinksConfig}
                        />
                    </div>
                    <ThemeSwitch />
                    <BurgerMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;
