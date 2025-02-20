import ArticleList from '@/components/organisms/article-list';
import { getAllPosts, getPostsByCategory, getAllCategories } from '@/utils/posts';
import { notFound } from 'next/navigation';

interface BlogPageProps {
    params: {
        category: string;
    };
}

// 生成靜態路徑
export async function generateStaticParams() {
    // 獲取所有分類
    const categories = getAllCategories();

    // 返回所有可能的路徑，包括 'all'
    return [
        { category: 'all' },
        ...categories.map((category) => ({
            category: category.toLowerCase(),
        })),
    ];
}

// 靜態頁面組件
export default function BlogPage({ params: { category = 'all' } }: BlogPageProps) {
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
}
