import { ReactNode } from 'react';
import { Metadata } from 'next';
import config from 'blog.config.json';
import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import ArticleCategories from '@/components/molecules/article-categories';
import BlogAside from '@/components/organisms/blog-aside';

export const metadata: Metadata = {
    title: `${config.metadata.author} | Blog`,
};

const BlogLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <Container className="flex h-full gap-8">
            <div className="flex-grow">
                <ArticleCategories className={cn('my-2 p-[10px]', 'border-y', 'flex flex-wrap gap-4 md:hidden')} />
                {children}
            </div>
            <BlogAside className="sticky top-16 max-h-[calc(100vh-132px)] min-w-80 max-w-80" />
        </Container>
    );
};

export default BlogLayout;
