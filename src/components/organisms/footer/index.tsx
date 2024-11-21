import dynamic from 'next/dynamic';
import config from 'blog.config.json';
import cn from '@/utils/cn';

const year = new Date().getFullYear();
const author = config.author;
const footerConfig = config.components.footer;
const { enabled, link } = footerConfig;

const BaseLink = dynamic(() => import('@/components/atoms/link').then((mod) => mod.BaseLink));

const Footer = () => {
    if (!enabled) {
        return null;
    }

    return (
        <footer className={cn('py-6', 'text-center text-sm tracking-wide')}>
            <p>
                &copy; {year} Created by
                <span className={cn('ml-1')}>
                    <BaseLink href={link}>{author}</BaseLink>
                </span>
            </p>
        </footer>
    );
};

export default Footer;
