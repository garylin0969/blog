import { Metadata } from 'next';

export const baseMetadata: Partial<Metadata> = {
    metadataBase: new URL('https://www.garylin.dev'),
    generator: 'Next.js',
    applicationName: 'Gary Lin Portfolio',
    referrer: 'origin-when-cross-origin',
    creator: 'Gary Lin',
    publisher: 'Gary Lin',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: { url: '/assets/logo.jpg' },
        shortcut: { url: '/assets/logo.jpg' },
        apple: { url: '/assets/logo.jpg' },
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/assets/logo.jpg',
        },
    },
    verification: {
        google: 'CtxomoS71tuDi5qlZJbJpoLQ7dcgEOXcW_oCY8zyLUw',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};
