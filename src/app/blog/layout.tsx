import { ReactNode } from 'react';
import { Metadata } from 'next';
import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import ArticleCategories from '@/components/molecules/article-categories';
import SocialIconLinks from '@/components/molecules/social-icon-links';

export const metadata: Metadata = {
    title: 'GaryLin | Blog',
    openGraph: { title: 'GaryLin | Blog' },
};

const BlogLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <Container className="h-full max-w-3xl">
            <SocialIconLinks className="mt-6 text-2xl" />
            <ArticleCategories className={cn('my-3', 'flex flex-wrap gap-4', 'font-semibold')} />
            {children}
        </Container>
    );
};

export default BlogLayout;
