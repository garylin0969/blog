import ArticleList from '@/components/organisms/article-list';
import { getPosts } from '@/lib/api';

interface BlogPageProps {
    params: {
        category: string;
    };
}

const BlogPage = ({ params: { category = 'all' } }: BlogPageProps) => {
    const posts = getPosts(category);
    return <ArticleList posts={posts} />;
};

export default BlogPage;
