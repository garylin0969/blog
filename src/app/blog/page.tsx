import ArticleList from '@/components/organisms/article-list';
import { getAllPosts } from '@/lib/api';

const Blog = () => {
    const allPosts = getAllPosts();
    return (
        <>
            <ArticleList posts={allPosts} />
        </>
    );
};

export default Blog;
