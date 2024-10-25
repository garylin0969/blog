import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import cn from '@/utils/cn';

const iconConfig = [
    {
        link: process.env.NEXT_PUBLIC_GITHUB_LINK,
        icon: <FaGithub className="h-5 w-5 cursor-pointer opacity-90" />,
    },
    {
        link: process.env.NEXT_PUBLIC_LINKEDIN_LINK,
        icon: <FaLinkedin className="h-5 w-5 cursor-pointer opacity-90" />,
    },
];

const IconLinks = () => {
    return (
        <div className={cn('flex gap-1')}>
            {iconConfig?.map((data) => {
                return (
                    <a key={data?.link} href={data?.link} target="_blank" rel="noreferrer noopener">
                        {data?.icon}
                    </a>
                );
            })}
        </div>
    );
};

export default IconLinks;
