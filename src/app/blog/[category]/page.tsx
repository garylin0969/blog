import { getAllCategories } from '@/utils/posts';
import BlogPage from '@/components/pages/blog-page';

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

export default BlogPage;
