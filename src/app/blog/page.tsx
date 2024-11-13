import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import ArticleCategories from '@/components/molecules/article-categories';
import BlogAside from '@/components/organisms/blog-aside';
import ArticleCard from '@/components/molecules/article-card';

const Blog = () => {
    return (
        <Container className="flex h-full">
            <div className="flex-grow">
                <ArticleCategories className={cn('my-2 p-[10px]', 'border-y', 'flex flex-wrap gap-4 md:hidden')} />
                <div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((value) => {
                        return (
                            <div key={value} className="flex justify-center border-b">
                                <ArticleCard />
                            </div>
                        );
                    })}
                </div>
            </div>
            <BlogAside className="sticky top-16 max-h-[calc(100svh-132px)] w-80" />
        </Container>
    );
};

export default Blog;
