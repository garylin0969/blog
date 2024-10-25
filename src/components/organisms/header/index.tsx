import Link from 'next/link';
import Image from 'next/image';
import cn from '@/utils/cn';
import { siteTitle } from '@/constants/header';
import NavMenu from './nav-menu';
import IconLinks from './icon-links';
import ThemeSwitch from '@/components/atoms/theme-switch';
import BurgerMenu from './burger-menu';

const logoImg = '/assets/logo.svg';

const Header = () => {
    return (
        <header
            className={cn(
                'fixed top-0',
                'flex items-center',
                'h-16 w-full',
                'px-4 sm:px-6 lg:px-8',
                'border-b',
                'shadow',
            )}
        >
            <div className={cn('mx-auto w-full max-w-6xl', 'flex items-center justify-between')}>
                <Link href="/" className={cn('flex items-center gap-2')}>
                    <Image src={logoImg} width={36} height={36} alt="logo" />
                    <h1 className="text-xl font-semibold">{siteTitle}</h1>
                </Link>
                <div className={cn('flex items-center gap-4')}>
                    <div className={cn('hidden', 'items-center gap-4 md:flex')}>
                        <NavMenu />
                        <IconLinks />
                    </div>
                    <ThemeSwitch />
                    <BurgerMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;
