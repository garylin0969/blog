import { ReactNode } from 'react';
import AuthorCard from '@/components/molecules/author-card';
import BlogCategoriesCard from '@/components/molecules/blog-categories-card';
import BlogStatsCard from '@/components/molecules/blog-stats-card';

// import GithubStatsCard from '@/components/molecules/github-stats-card';
// import { DEFAULT_TOP_LANGS_CONFIG, DEFAULT_GITHUB_STATS_PARAMS } from '@/constants/github-stats';

/**
 * 部落格佈局元件的屬性介面。
 */
interface BlogLayoutProps {
    /** 子元件 (頁面內容)。 */
    children: ReactNode;
}

/**
 * 部落格佈局元件。
 *
 * 定義部落格頁面的結構，包含側邊欄 (作者、統計、分類) 和主要內容區域。
 *
 * @param children - 子元件 {@link BlogLayoutProps.children}。
 */
const BlogLayout = ({ children }: BlogLayoutProps) => {
    return (
        <div className="container flex flex-col lg:flex-row">
            <aside className="hidden w-74 space-y-4 lg:block">
                {/* 作者 */}
                <AuthorCard />
                {/* 文章統計 */}
                <BlogStatsCard />
                {/* 文章分類 */}
                <BlogCategoriesCard />
                {/* GitHub 使用最多的程式語言 */}
                {/* <GithubStatsCard
                    type="top-langs"
                    params={DEFAULT_TOP_LANGS_CONFIG}
                    width={296}
                    height={282}
                    loading="eager"
                    alt="top languages"
                /> */}
                {/* GitHub 統計 */}
                {/* <GithubStatsCard
                    type="stats"
                    params={DEFAULT_GITHUB_STATS_PARAMS}
                    width={296}
                    height={190}
                    loading="eager"
                    alt="github stats"
                /> */}
            </aside>
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default BlogLayout;
