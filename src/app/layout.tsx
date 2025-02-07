import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import cn from '@/utils/cn';
import ThemeProvider from '@/providers/theme-provider';
import Header from '@/components/organisms/header';
import Footer from '@/components/organisms/footer';
import ScrollToTopButton from '@/components/molecules/scroll-to-top-button';

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
    icons: { icon: { url: '/assets/logo.svg' } },
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
                    <div
                        className={cn(
                            'transition-colors duration-300',
                            'text-slate-700 dark:text-slate-300',
                            'dark:bg-slate-900',
                        )}
                    >
                        <Header />
                        <div className="flex min-h-[calc(100vh-68px)] pt-16">
                            <main className="flex-grow">{children}</main>
                        </div>
                        <Footer />
                        <ScrollToTopButton />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
