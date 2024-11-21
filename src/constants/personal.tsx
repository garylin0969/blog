import { FaBuilding, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

export const authorImg = '/assets/avatar/avatar.jpg';

export const author = 'Gary Lin';

export const BasicInfoConfig = [
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

export const SocialIconLinksConfig = [
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

export const HeaderSocialIconLinksConfig = [
    {
        link: 'https://github.com/garylin0969',
        icon: <FaGithub className="cursor-pointer opacity-90" />,
    },
    {
        link: 'https://www.linkedin.com/in/gary-lin-95723a247/',
        icon: <FaLinkedin className="cursor-pointer opacity-90" />,
    },
];

export const AboutInfoConfig = [
    'Hi there 🙋',
    '我是 Gary Lin，目前於 鉅亨網 擔任前端工程師，主要使用 Next、React、TypeScript 和 Tailwind CSS。閒暇時喜愛看動漫、小說，經常在社群平台上衝浪的哥布林。',
];

export const ExperienceConfig = [
    {
        logoSrc: '/assets/company-logo/anue.png',
        title: 'Frontend Developer',
        companyUrl: 'https://www.cnyes.com/',
        companyName: 'Anue 鉅亨網',
        employmentStartDate: '2024.03',
        employmentEndDate: '現在',
    },
    {
        logoSrc: '/assets/company-logo/uec.jpg',
        title: 'Frontend Developer',
        companyUrl: 'https://www.universalec.com/',
        companyName: 'Universal EC Inc.',
        employmentStartDate: '2022.10',
        employmentEndDate: '2024.02',
    },
    {
        logoSrc: '/assets/company-logo/ispan.png',
        title: 'Frontend Class Trainee',
        companyUrl: 'https://www.ispan.com.tw/',
        companyName: 'iSpan International Inc.',
        employmentStartDate: '2022.03',
        employmentEndDate: '2022.08',
    },
];

export const ProjectsConfig = [
    {
        imageUrl: '/assets/projects/chinese-number-format.avif',
        projectUrl: 'https://www.npmjs.com/package/chinese-number-format',
        projectName: 'chinese-number-format',
        projectTags: ['2024', 'TypeScript', 'Jest', 'NPM'],
    },
    {
        imageUrl: '/assets/projects/Next13-Google-Clone.avif',
        projectUrl: 'https://github.com/garylin0969/next13-google-clone',
        projectName: 'Next13-Google-Clone',
        projectTags: ['2023', 'Next', 'TypeScript', 'React Hook Form', 'SWR', 'Tailwind CSS'],
    },
    {
        imageUrl: '/assets/projects/Next13-IMDb-Clone.avif',
        projectUrl: 'https://github.com/garylin0969/next13-imdb-clone',
        projectName: 'Next13-IMDb-Clone',
        projectTags: ['2023', 'Next', 'TypeScript', 'React Hook Form', 'SWR', 'Tailwind CSS', 'next-themes'],
    },
    {
        imageUrl: '/assets/projects/Akatsuki.avif',
        projectUrl: 'https://github.com/garylin0969/react-akatsuki',
        projectName: '火影忍者Akatsuki',
        projectTags: ['2023', 'React', 'Redux', 'TypeScript', 'Styled Components'],
    },
    {
        imageUrl: '/assets/projects/iSpan.avif',
        projectUrl: 'https://github.com/garylin0969/react-ispan-project',
        projectName: 'iSpan',
        projectTags: ['2022', 'React', 'JypeScript', 'Socket.IO', 'Bootstrap', 'GSAP'],
    },
];
