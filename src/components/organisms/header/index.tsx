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
                'fixed top-0 z-50 flex h-16 w-full items-center bg-white/70 px-4 font-serif shadow backdrop-blur-md dark:bg-slate-900/70 md:px-6 lg:px-8',
            )}
        >
            <div className={cn('mx-auto flex w-full max-w-6xl items-center justify-between')}>
                <Link href="/" className={cn('flex items-center gap-2')}>
                    <Image className="rounded-md" src={logoImg} width={36} height={36} alt="logo" priority />
                    <h1 className="text-xl font-semibold text-slate-700 dark:text-slate-200">{siteTitle}</h1>
                </Link>
                <div className={cn('flex items-center gap-4')}>
                    <div className={cn('hidden items-center gap-2 md:flex')}>
                        <NavMenu />
                        <SocialIconLinks
                            className="border-x border-slate-200 px-2 dark:border-slate-800"
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
