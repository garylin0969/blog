import type { Metadata } from 'next';
import { DOMAIN } from '@/constants/site';

export const generateAboutMetadata = (): Metadata => {
    return {
        title: 'About',
        description: '了解更多關於 Gary Lin 的背景、工作經驗、技能和專案',
        alternates: {
            canonical: `${DOMAIN}/about`,
        },
        openGraph: {
            title: 'About | GaryLin Dev',
            description: '了解更多關於 Gary Lin 的背景、工作經驗、技能和專案',
            url: `${DOMAIN}/about`,
            locale: 'zh_TW',
            type: 'website',
            images: [
                {
                    url: '/favicons/android-chrome-512x512.png',
                    width: 512,
                    height: 512,
                    alt: 'GaryLin Dev',
                },
            ],
        },
        twitter: {
            title: 'About | GaryLin Dev',
            description: '了解更多關於 Gary Lin 的背景、工作經驗、技能和專案',
            images: ['/favicons/android-chrome-512x512.png'],
        },
    };
};
