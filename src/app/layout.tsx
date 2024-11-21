import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import metadataConfig from '@/constants/metadata.config.json';
import themeConfig from '@/constants/theme.config.json';
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
    ...metadataConfig,
    // openGraph: {
    //     images: [HOME_OG_IMAGE_URL],
    // },
};

const light = `text-[${themeConfig.light.text}] bg-[${themeConfig.light.background}]`;
const dark = `dark:text-[${themeConfig.dark.text}] dark:bg-[${themeConfig.dark.background}]`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html suppressHydrationWarning lang="zh-TW">
            <head>
                <link rel="icon" href="/assets/logo.svg'" sizes="any" />
            </head>
            <body className={cn(inter.className, 'antialiased')}>
                <ThemeProvider>
                    <div className={cn('transition-colors duration-300', light, dark)}>
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
