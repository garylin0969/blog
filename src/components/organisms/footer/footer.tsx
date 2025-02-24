import cn from '@/utils/cn';
import { BaseLink } from '@/components/atoms/link';
import { siteTitle } from '@/constants/header';

const startYear = 2024;
const currentYear = new Date().getFullYear();
const link = 'https://github.com/garylin0969';

const Footer = () => {
    return (
        <footer className={cn('py-6', 'text-center text-sm tracking-wide')}>
            <p>
                &copy; {startYear}-{currentYear}
                <span className={cn('mx-1')}>
                    <BaseLink href={link}>{siteTitle}</BaseLink>
                </span>
                | All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
