import { notFound } from 'next/navigation';
import { getAllCategories, getAllPosts, getPostsByCategory } from '@/utils/posts';
import ArticleList from '@/components/organisms/article-list';

interface BlogPageProps {
    params: {
        category: string;
    };
}

const BlogPage = ({ params: { category = 'all' } }: BlogPageProps) => {
    // 檢查分類是否有效（除了 'all' 之外）
    if (
        category !== 'all' &&
        !getAllCategories()
            .map((cat) => cat.toLowerCase())
            .includes(category)
    ) {
        notFound();
    }

    // 獲取文章列表
    const posts = category === 'all' ? getAllPosts() : getPostsByCategory(category);

    return <ArticleList posts={posts} />;
};

export default BlogPage;
