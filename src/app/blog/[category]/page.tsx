import { notFound, redirect } from 'next/navigation';
import { getAllCategories, isCategoryExists } from '@/utils/posts';

// 添加 generateStaticParams 使其變為靜態路由
export async function generateStaticParams() {
    const categories = getAllCategories();
    return [
        { category: 'all' },
        ...categories.map((category) => ({
            category: category.toLowerCase(),
        })),
    ];
}

const page = ({ params: { category = 'all' } }: { params: { category: string } }) => {
    // 檢查分類是否有效（除了 'all' 之外）
    if (category !== 'all' && !isCategoryExists(category)) {
        notFound();
    }

    redirect(`/blog/${category}/1`);
};

export default page;
