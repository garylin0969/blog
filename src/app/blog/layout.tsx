import { ReactNode } from 'react';
import { Metadata } from 'next';
import BlogTemplate from '@/components/templates/blog-template';

export const metadata: Metadata = {
    title: 'GaryLin | Blog',
    openGraph: {
        title: 'GaryLin | Blog',
        description: 'Hi, , my name is Gary Lin, a Frontend Developer.',
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

const BlogLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return <BlogTemplate>{children}</BlogTemplate>;
};

export default BlogLayout;
