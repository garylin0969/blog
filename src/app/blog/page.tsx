import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import InfoCard from '@/components/molecules/info-card';
import DividerTitle from '@/components/molecules/divider-title';
import ArticleCategories from '@/components/molecules/article-categories';
import BlogAside from '@/components/organisms/blog-aside';

const Blog = () => {
    return (
        <Container className="flex h-full">
            <div className="flex-grow">
                <ArticleCategories className={cn('my-2 p-[10px]', 'border-y', 'flex flex-wrap gap-4 md:hidden')} />
            </div>
            <BlogAside className="sticky top-16 max-h-[calc(100svh-132px)] w-80" />
        </Container>
    );
};

export default Blog;
