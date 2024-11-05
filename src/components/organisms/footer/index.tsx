import cn from '@/utils/cn';
import { author } from '@/constants/personal';

const year = new Date().getFullYear();
const link = 'https://github.com/garylin0969';

const Footer = () => {
    return (
        <footer className={cn('py-4', 'text-center text-sm tracking-wide')}>
            <p>
                © {year} Created by
                <span className={cn('ml-1', 'hover:text-sky-500 dark:hover:text-sky-400')}>
                    <a href={link} target="_blank" rel="noreferrer noopener">
                        {author}
                    </a>
                </span>
            </p>
        </footer>
    );
};

export default Footer;
