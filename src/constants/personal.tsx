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
        link: 'https://www.linkedin.com/in/garylin0969/',
        icon: <FaLinkedin className="cursor-pointer opacity-90" />,
    },
    {
        link: 'https://www.facebook.com/profile.php?id=100009915255579&mibextid=ZbWKwL',
        icon: <FaFacebook className="cursor-pointer opacity-90" />,
    },
    // {
    //     link: 'https://www.instagram.com/gary_1226_/',
    //     icon: <FaInstagram className="cursor-pointer opacity-90" />,
    // },
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
        responsibilities: [
            '參與 Scrum 開發流程，運用 Jira、Slack 與 Confluence 促進跨部門協作及專案管理。',
            '負責外匯及新聞領域專案的開發，涵蓋約 10 項專案的功能維護與新增需求。',
            '採用 Docker 將網站封裝為映像檔，結合 GitLab CI/CD 部署至 GitLab Container Registry。',
            '利用 Highcharts 與 TradingView 開發動態視覺化圖表，提供精確數據呈現。',
            '透過 Google Analytics (GA4) 收集並分析用戶行為數據，生成深度洞察報告。',
            '結合 Next.js、伺服端渲染 (SSR) 及 Metadata 優化，有效提升網站 SEO 表現。',
            '實現 Lazy Load 機制，顯著優化網頁效能與載入速度。',
            '採用 React Query 與快取技術，降低 API 呼叫次數並提升前端運行效率。',
            '運用 React.js、TypeScript、Tailwind CSS 及 Vite 開發 B2B 專案平台。',
            '公司技術涵蓋（但不限於） Next.js、TypeScript、Tailwind CSS、React Query、Jest、Storybook、Google Analytics 及 TradingView。',
        ],
    },
    {
        logoSrc: '/assets/company-logo/uec.jpg',
        title: 'Frontend Developer',
        companyUrl: 'https://www.universalec.com/',
        companyName: 'Universal EC Inc.',
        employmentStartDate: '2022.10',
        employmentEndDate: '2024.02',
        responsibilities: [
            '參與 Scrum 敏捷開發流程，運用 Mantis 與 Asana 進行跨部門協作及專案管理。',
            '重構系統架構，導入 Prettier、JWT 與 Jest 等技術，以顯著提升程式碼品質與系統效能。',
            '深入研究 Next.js 技術，應用於前台系統的升級及新功能開發，推動技術革新。',
            '優化既有專案架構，實現元件化設計，有效降低重工成本並增強程式維護性。',
            '建構 GitLab CI/CD 自動化部署流程。',
            '支援電子發票加值中心專案的全周期開發與維護工作。',
            '主導模板專案系統架構的重構與優化，提升整體系統穩定性。',
            '參與財團法人純青社會福利基金會學堂管理系統的開發與運營維護。',
            '領導簽審通關共同作業平台前後台系統的整合開發，確保系統協同運作。',
            '參與第一社會福利基金會捐款管理系統的設計與開發，優化捐款流程。',
            '利用 React Bootstrap 完成前端 UI 樣式的設計與實現，確保視覺一致性。',
            '通過 Sourcetree、GitLab 與 Apache 有效管理版本控制及部署流程。',
            '採用 Spring Boot 開發後端系統，並使用 MS SQL 與 Oracle 進行資料庫管理。',
            '使用 React.js 、Next.js、TypeScript、React Hook Form、Redux、Axios 與 Jest 實現前端開發。',
        ],
    },
    {
        logoSrc: '/assets/company-logo/ispan.png',
        title: 'Frontend Class Trainee',
        companyUrl: 'https://www.ispan.com.tw/',
        companyName: 'iSpan International Inc.',
        employmentStartDate: '2022.03',
        employmentEndDate: '2022.08',
        responsibilities: [
            '實施 JSON Web Token (JWT) 與 Google OAuth 認證機制。',
            '開發會員中心及收藏功能，提供完善的用戶資料管理與個性化服務，優化用戶體驗。',
            '整合 Socket.IO 架構聊天室，實現用戶間即時的通訊互動。',
            '採用 Chart.js 構建數據可視化報表，提升資料呈現效果並增強數據分析能力。',
            '基於 React.js 搭配 Axios 進行 API 整合，運用 Bootstrap 與 MUI 完成前端設計，並結合 GSAP 強化頁面動畫效果，打造流暢互動介面。',
            '採用 Express 框架搭建後端伺服器，並以 MySQL 作為資料庫管理系統。',
        ],
    },
];

export const SkillsConfig = [
    {
        title: 'HTML/CSS',
        skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'Shadcn UI', 'Bootstrap', 'styled-components'],
    },
    {
        title: 'JavaScript',
        skills: ['TypeScript', 'React.js', 'Next.js', 'React Hook Form', 'Redux', 'Zustand', 'React Query', 'i18n'],
    },
    {
        title: 'Others',
        skills: ['Scrum', 'Git', 'GitLab', 'Git Flow', 'Jira', 'Confluence', 'Google Analytics'],
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
            'Google Analytics',
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
        imageUrl: '/assets/projects/next13-imdb-clone.avif',
        projectUrl: 'https://garylin0969-next-imdb-clone.vercel.app',
        projectName: 'Clone - IMDb',
        projectTags: ['2023', 'Next', 'TypeScript', 'React Hook Form', 'SWR', 'Tailwind CSS', 'next-themes'],
    },
    {
        imageUrl: '/assets/projects/next13-google-clone.avif',
        projectUrl: 'https://garylin0969-next-google-clone.vercel.app',
        projectName: 'Clone - Google',
        projectTags: ['2023', 'Next', 'TypeScript', 'React Hook Form', 'SWR', 'Tailwind CSS'],
    },
    {
        imageUrl: '/assets/projects/akatsuki.avif',
        projectUrl: 'https://garylin0969-akatsuki.vercel.app',
        projectName: '火影忍者 - 曉組織成員介紹',
        projectTags: ['2023', 'React', 'Redux', 'TypeScript', 'Styled Components'],
    },
    {
        imageUrl: '/assets/projects/ispan-project.jpg',
        projectUrl: 'https://github.com/garylin0969/react-ispan-project',
        projectName: 'iSpan 資策會 - 專題',
        projectTags: ['2022', 'React', 'JavaScript', 'Socket.IO', 'Bootstrap', 'GSAP'],
    },
];
