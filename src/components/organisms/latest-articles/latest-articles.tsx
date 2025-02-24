import { getLatestPosts } from '@/utils/posts';
import ArticleList from '../article-list';
import { NextLink } from '@/components/atoms/link';
import { BaseButton } from '@/components/atoms/button';

const LatestArticles = () => {
    const latestPosts = getLatestPosts(2); // 獲取最新的 2 篇文章

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Latest Articles</h2>
            </div>
            <ArticleList posts={latestPosts} />
            <div className="flex justify-end">
                <NextLink href="/blog" className="text-blue-500 hover:underline">
                    <BaseButton>View All</BaseButton>
                </NextLink>
            </div>
        </div>
    );
};

export default LatestArticles;
