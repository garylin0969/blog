import { FaBuilding, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

export const authorImg = '/assets/avatar/avatar.jpg';

export const author = 'Gary Lin';

export const WebsiteIntroductionConfig = {
    title: 'Hi, my name is Gary Lin',
    subtitle: 'A Frontend Developer',
};

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
        link: 'https://www.instagram.com/gary_1226_/',
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
    'Hi there',
    '我是 Gary Lin，目前於 鉅亨網 擔任前端工程師，主要使用 Next、React、TypeScript 和 Tailwind CSS。閒暇時喜愛看動漫、小說，經常在社群平台上衝浪的哥布林。',
];

export const ExperienceConfig = [
    {
        logoSrc: '/assets/company-logo/anue.png',
        title: 'Frontend Developer',
        companyUrl: 'https://www.cnyes.com/',
        companyName: 'Anue 鉅亨網',
        employmentStartDate: '2024.03',
        employmentEndDate: 'Now',
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
        imageUrl: '/assets/projects/life-restart.jpg',
        projectUrl: 'https://garylin0969-life-restart.vercel.app/',
        projectName: '人生重來 - Life Restart',
        projectTags: ['2025', 'Next', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'next-intl', 'next-themes'],
    },
    {
        imageUrl: '/assets/projects/perplexity-ai-concat.jpg',
        projectUrl: 'https://garylin0969-perplexity-concat.vercel.app/',
        projectName: 'AI 串接測試工具 - Perplexity AI Concat',
        projectTags: [
            '2025',
            'Perplexity API',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'React Hook Form',
            'React Json View',
        ],
    },
    {
        imageUrl: '/assets/projects/gemini-api-tester.jpg',
        projectUrl: 'https://garylin0969-gemini-tester.vercel.app/',
        projectName: 'AI 串接測試工具 - Gemini API Tester',
        projectTags: ['2025', 'Gemini', 'Next', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'React Query'],
    },
    {
        imageUrl: '/assets/projects/blog.jpg',
        projectUrl: 'https://github.com/garylin0969/blog',
        projectName: 'Blog - GaryLin.dev',
        projectTags: [
            '2024',
            'Next',
            'TypeScript',
            'GoogleAnalytics',
            'Contentlayer',
            'Tailwind CSS',
            'next-themes',
            'Giscus',
        ],
    },
    {
        imageUrl: '/assets/projects/chinese-number-format.avif',
        projectUrl: 'https://www.npmjs.com/package/chinese-number-format',
        projectName: 'NPM 套件 - chinese-number-format',
        projectTags: ['2024', 'TypeScript', 'Jest', 'NPM'],
    },
    {
        imageUrl: '/assets/projects/next13-google-clone.avif',
        projectUrl: 'https://github.com/garylin0969/next13-google-clone',
        projectName: 'Clone - Google',
        projectTags: ['2023', 'Next', 'TypeScript', 'React Hook Form', 'SWR', 'Tailwind CSS'],
    },
    {
        imageUrl: '/assets/projects/next13-imdb-clone.avif',
        projectUrl: 'https://garylin0969-next-imdb-clone.vercel.app',
        projectName: 'Clone - IMDb',
        projectTags: ['2023', 'Next', 'TypeScript', 'React Hook Form', 'SWR', 'Tailwind CSS', 'next-themes'],
    },
    {
        imageUrl: '/assets/projects/akatsuki.avif',
        projectUrl: 'https://garylin0969-akatsuki.vercel.app/',
        projectName: '火影忍者 - 曉組織成員介紹',
        projectTags: ['2023', 'React', 'Redux', 'TypeScript', 'Styled Components'],
    },
    {
        imageUrl: '/assets/projects/ispan.avif',
        projectUrl: 'https://github.com/garylin0969/react-ispan-project',
        projectName: 'iSpan 資策會 - 專案',
        projectTags: ['2022', 'React', 'JypeScript', 'Socket.IO', 'Bootstrap', 'GSAP'],
    },
];
