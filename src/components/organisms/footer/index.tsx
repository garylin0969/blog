import cn from '@/utils/cn';
import { BaseLink } from '@/components/atoms/link';
import { author } from '@/constants/personal';

const year = new Date().getFullYear();
const link = 'https://github.com/garylin0969';

const Footer = () => {
    return (
        <footer className={cn('py-6', 'text-center text-sm tracking-wide')}>
            <p>
                &copy; {year} Developed by
                <span className={cn('ml-1')}>
                    <BaseLink href={link}>{author}</BaseLink>
                </span>
            </p>
        </footer>
    );
};

export default Footer;
