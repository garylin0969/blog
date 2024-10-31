import { IconLink, Nav } from '@/interfaces/header';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const logoImg = '/assets/logo.svg';

export const siteTitle = 'GaryLin.dev';

export const iconConfig: IconLink[] = [
    {
        link: 'https://github.com/garylin0969',
        icon: <FaGithub className="h-5 w-5 cursor-pointer opacity-90" />,
    },
    {
        link: 'https://www.linkedin.com/in/gary-lin-95723a247/',
        icon: <FaLinkedin className="h-5 w-5 cursor-pointer opacity-90" />,
    },
];

export const navConfig: Nav[] = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Blog',
        href: '/blog',
    },
    {
        label: 'About',
        href: '/about',
    },
];
