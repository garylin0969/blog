import type { ReactNode } from 'react';
import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import SocialIconLinks from '@/components/molecules/social-icon-links';
import ArticleCategories from '@/components/molecules/article-categories';

interface BlogTemplateProps {
    children: ReactNode;
}

const BlogTemplate = ({ children }: BlogTemplateProps) => {
    return (
        <Container className="flex min-h-full max-w-3xl flex-col">
            <SocialIconLinks className="mt-6 text-2xl" />
            <ArticleCategories className={cn('my-6', 'flex flex-wrap gap-4', 'font-semibold')} />
            {children}
        </Container>
    );
};

export default BlogTemplate;
