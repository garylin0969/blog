import { ReactNode } from 'react';
import { Metadata } from 'next';
import BlogTemplate from '@/components/templates/blog-template';

export const metadata: Metadata = {
    title: 'Blog',
    description:
        "Welcome to Gary Lin's blog. Here I share my thoughts and experiences about frontend development, React.js, Next.js, and more.",
    openGraph: {
        title: 'Blog',
        description:
            "Welcome to Gary Lin's blog. Here I share my thoughts and experiences about frontend development, React.js, Next.js, and more.",
        url: 'https://www.garylin.dev/blog',
        siteName: 'Gary Lin Portfolio',
        images: [
            {
                url: '/assets/default-open-graph.jpg',
                width: 1200,
                height: 630,
                alt: 'Gary Lin Blog - Frontend Development Insights',
            },
        ],
        locale: 'zh_TW',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog',
        description:
            "Welcome to Gary Lin's blog. Here I share my thoughts and experiences about frontend development, React.js, Next.js, and more.",
        images: [
            {
                url: '/assets/default-open-graph.jpg',
                width: 1200,
                height: 630,
                alt: 'Gary Lin Blog - Frontend Development Insights',
            },
        ],
    },
    keywords: [
        'Gary Lin',
        'Blog',
        'Frontend Development',
        'React.js',
        'Next.js',
        'TypeScript',
        'Web Development',
        'Technical Blog',
    ],
    alternates: {
        canonical: 'https://www.garylin.dev/blog',
    },
    robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
    },
};

const BlogLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return <BlogTemplate>{children}</BlogTemplate>;
};

export default BlogLayout;
