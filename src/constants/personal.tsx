import { FaBuilding, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { IconLinkI } from '@/interfaces/social';

export const authorImg = '/assets/avatar/avatar.jpg';

export const author = 'Gary Lin';

export const basicInfoConfig = [
    {
        icon: <FaBuilding />,
        link: 'https://www.cnyes.com/',
        text: 'Anue 鉅亨網',
    },
    {
        icon: <FaLocationDot />,
        link: '',
        text: 'Taipei, Taiwan',
    },
    {
        icon: <IoMdMail />,
        link: 'mailto:garylin0969@gmail.com',
        text: 'garylin0969@gmail.com',
    },
];

export const SocialIconLinksConfig: IconLinkI[] = [
    {
        link: 'https://github.com/garylin0969',
        icon: <FaGithub className="cursor-pointer opacity-90" />,
    },
    {
        link: 'https://www.linkedin.com/in/gary-lin-95723a247/',
        icon: <FaLinkedin className="cursor-pointer opacity-90" />,
    },
    {
        link: 'https://www.facebook.com/profile.php?id=100009915255579&mibextid=ZbWKwL',
        icon: <FaFacebook className="cursor-pointer opacity-90" />,
    },
    {
        link: 'https://www.instagram.com/gary_1226_/?igsh=MXNjdHlycjhiN3dxcg%3D%3D',
        icon: <FaInstagram className="cursor-pointer opacity-90" />,
    },
];

export const HeaderSocialIconLinksConfig: IconLinkI[] = [
    {
        link: 'https://github.com/garylin0969',
        icon: <FaGithub className="cursor-pointer opacity-90" />,
    },
    {
        link: 'https://www.linkedin.com/in/gary-lin-95723a247/',
        icon: <FaLinkedin className="cursor-pointer opacity-90" />,
    },
];

export const aboutInfoConfig: string[] = [
    'Hi there 🙋',
    '我是 Gary Lin，目前於 鉅亨網 擔任前端工程師',
    '主要使用 Next、React、TypeScript 和 Tailwind CSS',
    '閒暇時喜愛看動漫、小說',
    '經常在國內外社群平台上網路衝浪的哥布林',
];
