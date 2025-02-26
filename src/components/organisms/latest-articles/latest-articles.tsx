import { getLatestPosts } from '@/utils/posts';
import ArticleList from '../article-list';
import { NextLink } from '@/components/atoms/link';
import { BaseButton } from '@/components/atoms/button';
import SectionTitle from '@/components/molecules/section-title';
import { homeSectionTitleConfig } from '@/configs/components/section-title.config';

const { latestArticles: latestArticlesConfig } = homeSectionTitleConfig;
const latestPosts = getLatestPosts(2); // 獲取最新的 2 篇文章

const LatestArticles = () => {
    return (
        <div className="space-y-6">
            <SectionTitle
                title={latestArticlesConfig?.title}
                align={latestArticlesConfig?.align}
                showDivider={latestArticlesConfig?.showDivider}
            />
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
