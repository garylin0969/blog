import { Metadata } from 'next';
import { baseMetadata } from './base-metadata.config';

const blogMetadata: Partial<Metadata> = {
    title: 'GaryLin | Blog',
    description: '歡迎來到 Gary Lin 的Blog。在這裡我分享關於前端開發、React.js、Next.js 等方面的想法和經驗。',
    openGraph: {
        title: 'GaryLin | Blog',
        description: '歡迎來到 Gary Lin 的Blog。在這裡我分享關於前端開發、React.js、Next.js 等方面的想法和經驗。',
        url: 'https://www.garylin.dev/blog',
        siteName: 'Gary Lin Blog',
        images: [
            {
                url: '/assets/logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Gary Lin Blog - Frontend Development Insights',
            },
        ],
        locale: 'zh_TW',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GaryLin | Blog',
        description: '歡迎來到 Gary Lin 的Blog。在這裡我分享關於前端開發、React.js、Next.js 等方面的想法和經驗。',
        images: [
            {
                url: '/assets/logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Gary Lin Blog - Frontend Development Insights',
            },
        ],
    },
    keywords: [
        'Gary Lin',
        'Frontend Developer',
        'Web Development',
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Blog',
        '前端',
        '前端開發',
        '前端開發者',
        '前端工程師',
        '前端開發人員',
        '網頁開發',
        '部落格',
        '技術部落格',
    ],
    alternates: { canonical: 'https://www.garylin.dev/blog' },
};

export default { ...baseMetadata, ...blogMetadata };
