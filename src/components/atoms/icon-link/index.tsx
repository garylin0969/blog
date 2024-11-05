import cn from '@/utils/cn';
import { IconLinkI } from '@/interfaces/social';

const IconLink = ({ link, icon }: IconLinkI) => {
    return (
        <a
            className={cn('text-slate-400 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100')}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
        >
            {icon}
        </a>
    );
};

export default IconLink;
