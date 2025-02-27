import { notFound } from 'next/navigation';
import { getAllCategories, getAllPosts, getPostsByCategory, POSTS_PER_PAGE } from '@/utils/posts';
import ArticleList from '@/components/organisms/article-list';
import Pagination from '@/components/molecules/pagination';

interface BlogPageProps {
    params: {
        category: string;
    };
    searchParams: {
        page?: string;
    };
}

const BlogPage = ({ params: { category = 'all' }, searchParams }: BlogPageProps) => {
    const currentPage = Number(searchParams?.page) || 1;

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
    let posts;
    let totalPages;

    if (category === 'all') {
        const allPosts = getAllPosts();
        totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        const end = start + POSTS_PER_PAGE;
        posts = allPosts.slice(start, end);
    } else {
        const result = getPostsByCategory(category, currentPage);
        posts = result.posts;
        totalPages = result.totalPages;
    }

    return (
        <div className="flex flex-1 flex-col">
            <div className="flex-1">
                <ArticleList posts={posts} />
            </div>
            {totalPages > 1 && (
                <div className="py-6">
                    <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl={`/blog/${category}`} />
                </div>
            )}
        </div>
    );
};

export default BlogPage;
