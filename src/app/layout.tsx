import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
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
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.garylin.dev'),
    title: 'GaryLin | Dev',
    description: 'Hi, , my name is Gary Lin, a Frontend Developer.',
    icons: { icon: { url: '/assets/logo.jpg' } },
    authors: [{ name: 'GaryLin' }],
    openGraph: {
        title: 'GaryLin | Dev',
        description: 'Hi, , my name is Gary Lin, a Frontend Developer.',
        url: 'https://www.garylin.dev',
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

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html suppressHydrationWarning lang="zh-TW">
            <head>
                <meta name="google-site-verification" content="CtxomoS71tuDi5qlZJbJpoLQ7dcgEOXcW_oCY8zyLUw" />
            </head>
            <GoogleAnalytics gaId="G-F0MRGZ2J39" />
            <body className={cn(inter.className, 'antialiased')}>
                <ThemeProvider>
                    <RootTemplateProps>{children}</RootTemplateProps>
                </ThemeProvider>
            </body>
        </html>
    );
}
