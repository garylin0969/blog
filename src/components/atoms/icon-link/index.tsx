import { IconLinkI } from '@/interfaces/social';

const IconLink = ({ link, icon }: IconLinkI) => {
    return (
        <a
            className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            href={link}
            target="_blank"
            rel="noreferrer noopener"
        >
            {icon}
        </a>
    );
};

export default IconLink;
