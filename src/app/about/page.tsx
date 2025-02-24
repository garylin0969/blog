import { Metadata } from 'next';
import AboutPage from '@/components/pages/about-page';

export const metadata: Metadata = {
    title: 'GaryLin | About',
    openGraph: {
        title: 'GaryLin | About',
        description: 'Hi, , my name is Gary Lin, a Frontend Developer.',
        url: 'https://www.garylin.dev/about',
        images: [
            {
                url: '/assets/default-open-graph.jpg',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'zh_TW',
        type: 'website',
    },
};

export default AboutPage;
