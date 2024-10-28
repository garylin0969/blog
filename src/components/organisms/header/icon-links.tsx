import { FaGithub, FaLinkedin } from 'react-icons/fa';
import cn from '@/utils/cn';
import { IconLink } from '@/interfaces/header';

interface IconLinksProps {
    iconConfig: IconLink[];
}

const IconLinks = ({ iconConfig }: IconLinksProps) => {
    return (
        <div className={cn('px-2', 'flex gap-1', 'border-x-2 border-slate-200 dark:border-slate-800')}>
            {iconConfig?.map((data) => {
                return (
                    <a
                        key={data?.link}
                        className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                        href={data?.link}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {data?.icon}
                    </a>
                );
            })}
        </div>
    );
};

export default IconLinks;
