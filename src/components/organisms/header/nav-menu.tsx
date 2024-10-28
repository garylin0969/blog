import Link from 'next/link';
import cn from '@/utils/cn';
import { Nav } from '@/interfaces/header';

interface NavMenuProps {
    navConfig?: Nav[];
}

const NavMenu = ({ navConfig }: NavMenuProps) => {
    return (
        <nav className={cn('text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200')}>
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
