import Link from 'next/link';
import cn from '@/utils/cn';
import { navConfig } from '@/constants/header';

const NavMenu = () => {
    return (
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
    );
};

export default NavMenu;
