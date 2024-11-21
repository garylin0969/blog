import ArticleList from '@/components/organisms/article-list';
import { getAllPosts, getPostsByCategory } from '@/utils/posts';

interface BlogPageProps {
    params: {
        category: string;
    };
}

const BlogPage = ({ params: { category = 'all' } }: BlogPageProps) => {
    const posts = category === 'all' ? getAllPosts() : getPostsByCategory(category);

    return <ArticleList posts={posts} />;
};

export default BlogPage;
