import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants';
import cn from '@/utils/cn';
import ThemeProvider from '@/providers/theme-provider';
import Header from '@/components/organisms/header';
import Footer from '@/app/_components/footer';

import './globals.css';

export const metadata: Metadata = {
    title: CMS_NAME,
    description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
    openGraph: {
        images: [HOME_OG_IMAGE_URL],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html suppressHydrationWarning lang="zh-TW">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
                <meta name="theme-color" content="#000" />
                <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            </head>
            <body>
                <ThemeProvider>
                    <div
                        className={cn(
                            'transition-colors duration-300',
                            'bg-white text-slate-500',
                            'dark:bg-slate-900 dark:text-slate-400',
                            // 'animate-pulse bg-gradient-to-r from-slate-400 to-fuchsia-100 bg-[length:200%_200%] dark:from-slate-900 dark:to-slate-300',
                        )}
                    >
                        <Header />
                        <div className="flex min-h-[100svh] pt-16">{children}</div>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
