import { Metadata } from 'next';
import { baseMetadata } from './base-metadata.config';

const rootMetadata: Partial<Metadata> = {
    title: 'GaryLin | Dev',
    description: '嗨，我是 Gary Lin，專精於 React.js、Next.js 和現代網頁技術的前端工程師。',
    keywords: [
        'Gary Lin',
        'Frontend Developer',
        'Web Development',
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript',
        '前端',
        '前端開發',
        '前端開發者',
        '前端工程師',
        '前端開發人員',
        '網頁開發',
    ],
    authors: [{ name: 'Gary Lin', url: 'https://www.garylin.dev' }],
    openGraph: {
        title: 'GaryLin | Dev',
        description: '嗨，我是 Gary Lin，專精於 React.js、Next.js 和現代網頁技術的前端工程師。',
        url: 'https://www.garylin.dev',
        siteName: 'Gary Lin Portfolio',
        images: [
            {
                url: '/assets/default-open-graph.jpg',
                width: 1200,
                height: 630,
                alt: 'Gary Lin - Portfolio',
            },
        ],
        locale: 'zh_TW',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GaryLin | Dev',
        description: '嗨，我是 Gary Lin，專精於 React.js、Next.js 和現代網頁技術的前端工程師。',
        images: [
            {
                url: '/assets/default-open-graph.jpg',
                width: 1200,
                height: 630,
                alt: 'Gary Lin - Portfolio',
            },
        ],
    },
    alternates: { canonical: 'https://www.garylin.dev' },
};

export default { ...baseMetadata, ...rootMetadata };
