import Link from 'next/link';
import Image from 'next/image';
import cn from '@/utils/cn';
import { navConfig, siteTitle } from '@/constants/header';
import { GitHub, LinkedIn } from '@/components/atoms/icons';

const logoImg = '/assets/logo.svg';

const iconConfig = [
    {
        link: process.env.NEXT_PUBLIC_GITHUB_LINK,
        icon: <GitHub className="h-5 w-5 opacity-90" />,
    },
    {
        link: process.env.NEXT_PUBLIC_LINKEDIN_LINK,
        icon: <LinkedIn className="h-5 w-5 opacity-90" />,
    },
];

const Header = () => {
    return (
        <header className={cn('fixed top-0', 'flex items-center', 'h-16 w-full', 'px-4 sm:px-6 lg:px-8', 'border-b', 'shadow')}>
            <div className={cn('mx-auto w-full max-w-6xl', 'flex items-center justify-between')}>
                <Link href="/" className={cn('flex items-center gap-2')}>
                    <Image src={logoImg} width={36} height={36} alt="logo" />
                    <h1 className="text-xl font-semibold">{siteTitle}</h1>
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
                        {iconConfig?.map((data) => {
                            return (
                                <a key={data?.link} href={data?.link} target="_blank" rel="noreferrer noopener">
                                    {data?.icon}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
