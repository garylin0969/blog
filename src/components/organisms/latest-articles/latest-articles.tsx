import { getLatestPosts } from '@/utils/posts';
import ArticleList from '../article-list';
import { NextLink } from '@/components/atoms/link';
import { BaseButton } from '@/components/atoms/button';
import SectionTitle from '@/components/molecules/section-title';
import { homeSectionTitleConfig } from '@/configs/components/section-title.config';
import articleListConfig from '@/configs/components/article-list.config';

const { latestArticles: latestArticlesSectionConfig } = homeSectionTitleConfig;
const latestPosts = getLatestPosts(articleListConfig?.count); // 獲取最新的 count 篇文章

const LatestArticles = () => {
    return (
        <div className="space-y-6">
            <SectionTitle
                title={latestArticlesSectionConfig?.title}
                align={latestArticlesSectionConfig?.align}
                showDivider={latestArticlesSectionConfig?.showDivider}
            />
            <ArticleList posts={latestPosts} />
            {articleListConfig?.button?.enable && (
                <div className="flex justify-end">
                    <NextLink href={articleListConfig?.button?.href} className="text-blue-500 hover:underline">
                        <BaseButton>{articleListConfig?.button?.text}</BaseButton>
                    </NextLink>
                </div>
            )}
        </div>
    );
};

export default LatestArticles;
