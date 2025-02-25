import Link from 'next/link';
import Image from 'next/image';
import cn from '@/utils/cn';
import { siteTitle, logoImg } from '@/constants/header';

const Logo = () => {
    return (
        <Link href="/">
            <div className={cn('flex items-center gap-2')}>
                <Image
                    className="rounded-md"
                    src={logoImg}
                    width={36}
                    height={36}
                    style={{ width: 'auto', height: 'auto' }}
                    alt="logo"
                    priority
                />
                <h1 className="text-2xl font-bold text-slate-700 dark:text-slate-200">{siteTitle}</h1>
            </div>
        </Link>
    );
};

export default Logo;
