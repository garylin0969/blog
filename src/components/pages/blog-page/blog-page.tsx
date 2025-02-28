import { notFound } from 'next/navigation';
import { getAllPosts, getPostsByCategory, isCategoryExists, POSTS_PER_PAGE } from '@/utils/posts';
import cn from '@/utils/cn';
import ArticleCategories from '@/components/molecules/article-categories';
import ArticleList from '@/components/organisms/article-list';
import Pagination from '@/components/molecules/pagination';

interface BlogPageProps {
    params: {
        category: string;
        page: string;
    };
}

// 驗證頁碼範圍
function validatePageRange(currentPage: number, totalPages: number, category: string) {
    if (currentPage > totalPages) {
        notFound();
    }
    if (currentPage < 1) {
        notFound();
    }
}

// 獲取分頁後的文章列表
function getPaginatedPosts(category: string, currentPage: number) {
    if (category === 'all') {
        const allPosts = getAllPosts();
        const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        const end = start + POSTS_PER_PAGE;

        return {
            posts: allPosts.slice(start, end),
            totalPages,
        };
    }

    const result = getPostsByCategory(category, currentPage);
    return {
        posts: result.posts,
        totalPages: result.totalPages,
    };
}

const BlogPage = ({ params: { category = 'all', page = '1' } }: BlogPageProps) => {
    // 驗證並處理頁碼
    const currentPage = Number(page);

    if (isNaN(currentPage)) {
        notFound();
    }

    // 驗證分類
    if (category !== 'all' && !isCategoryExists(category)) {
        notFound();
    }

    // 獲取文章和分頁數據
    const { posts, totalPages } = getPaginatedPosts(category, currentPage);

    // 驗證頁碼範圍
    validatePageRange(currentPage, totalPages, category);

    return (
        <div className="flex flex-1 flex-col">
            <ArticleCategories className={cn('mb-4', 'flex flex-wrap gap-4', 'font-semibold')} />
            <div className="flex-1">
                <ArticleList posts={posts} />
            </div>
            {totalPages > 1 && (
                <div className="pt-6">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        createPageUrl={(page) => `/blog/${category}/${page}`}
                    />
                </div>
            )}
        </div>
    );
};

export default BlogPage;
