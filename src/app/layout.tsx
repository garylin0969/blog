import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import cn from '@/utils/cn';
import ThemeProvider from '@/providers/theme-provider';
import RootTemplateProps from '@/components/templates/root-template';

import '@/styles/prism-plus.css';
import '@/styles/prism-vsc-dark-plus.css';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    adjustFontFallback: true,
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.garylin.dev'),
    title: {
        default: 'GaryLin | Dev',
        template: 'GaryLin | %s',
    },
    description:
        'Hi, my name is Gary Lin, a Frontend Developer specializing in React.js, Next.js, and modern web technologies.',
    generator: 'Next.js',
    applicationName: 'Gary Lin Portfolio',
    referrer: 'origin-when-cross-origin',
    keywords: ['Gary Lin', 'Frontend Developer', 'React.js', 'Next.js', 'TypeScript', 'Web Development', 'JavaScript'],
    authors: [
        {
            name: 'Gary Lin',
            url: 'https://www.garylin.dev',
        },
    ],
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
    openGraph: {
        title: 'GaryLin | Dev',
        description:
            'Hi, my name is Gary Lin, a Frontend Developer specializing in React.js, Next.js, and modern web technologies.',
        url: 'https://www.garylin.dev',
        siteName: 'Gary Lin Portfolio',
        images: [
            {
                url: '/assets/default-open-graph.jpg',
                width: 1200,
                height: 630,
                alt: 'Gary Lin - Frontend Developer Portfolio',
            },
        ],
        locale: 'zh_TW',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GaryLin | Dev',
        description:
            'Hi, my name is Gary Lin, a Frontend Developer specializing in React.js, Next.js, and modern web technologies.',
        images: [
            {
                url: '/assets/default-open-graph.jpg',
                width: 1200,
                height: 630,
                alt: 'Gary Lin - Frontend Developer Portfolio',
            },
        ],
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
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
    alternates: {
        canonical: 'https://www.garylin.dev',
    },
    verification: {
        google: 'CtxomoS71tuDi5qlZJbJpoLQ7dcgEOXcW_oCY8zyLUw',
    },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html suppressHydrationWarning lang="zh-TW" className={cn('scroll-smooth')}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            </head>
            <body className={cn(inter.className, 'min-h-screen antialiased')}>
                <ThemeProvider>
                    <RootTemplateProps>{children}</RootTemplateProps>
                </ThemeProvider>
                <GoogleAnalytics gaId="G-F0MRGZ2J39" />
            </body>
        </html>
    );
}
