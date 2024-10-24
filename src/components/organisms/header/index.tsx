import Link from 'next/link';
import Image from 'next/image';
import cn from '@/utils/cn';
import { navConfig, siteTitle } from '@/constants/header';

const logoImg = '/assets/logo/logo.svg';

const Header = () => {
    return (
        <header
            className={cn(
                'fixed top-0',
                'flex items-center',
                'h-16 w-full',
                'px-4 sm:px-6 lg:px-8',
                'border-b',
                'shadow'
            )}
        >
            <div className={cn('mx-auto w-full max-w-6xl', 'flex items-center justify-between')}>
                <Link href="/" className={cn('flex items-center gap-2')}>
                    <Image src={logoImg} width={36} height={36} alt="logo" />
                    <h1 className="font-semibold text-xl">{siteTitle}</h1>
                </Link>
                <div className={cn('flex items-center gap-4')}>
                    <nav>
                        <ul className={cn('flex gap-4')}>
                            {navConfig?.map((data) => {
                                return (
                                    <li key={data?.label}>
                                        <Link href={data?.href}>{data?.label}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className={cn('flex gap-1')}>
                        <Image src={logoImg} width={25} height={25} alt="logo" />
                        <Image src={logoImg} width={25} height={25} alt="logo" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
