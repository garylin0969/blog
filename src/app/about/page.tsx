import { Metadata } from 'next';
import AboutPage from '@/components/pages/about-page';

export const metadata: Metadata = {
    title: 'About',
    description:
        'Hi, my name is Gary Lin, a Frontend Developer. I specialize in creating beautiful and efficient user interfaces.',
    openGraph: {
        title: 'About',
        description:
            'Hi, my name is Gary Lin, a Frontend Developer. I specialize in creating beautiful and efficient user interfaces.',
        url: 'https://www.garylin.dev/about',
        siteName: 'Gary Lin Portfolio',
        images: [
            {
                url: '/assets/default-open-graph.jpg',
                width: 1200,
                height: 630,
                alt: 'Gary Lin - Frontend Developer',
            },
        ],
        locale: 'zh_TW',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About',
        description:
            'Hi, my name is Gary Lin, a Frontend Developer. I specialize in creating beautiful and efficient user interfaces.',
        images: [
            {
                url: '/assets/default-open-graph.jpg',
                width: 1200,
                height: 630,
                alt: 'Gary Lin - Frontend Developer',
            },
        ],
    },
    keywords: [
        'Gary Lin',
        'About',
        'Frontend Developer',
        'Web Development',
        'JavaScript',
        'React.js',
        'Next.js',
        'TypeScript',
    ],
    authors: [{ name: 'Gary Lin', url: 'https://www.garylin.dev' }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://www.garylin.dev/about',
    },
};

export default AboutPage;
