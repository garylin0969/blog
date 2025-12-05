import { getAllCategories, getAllTags, getPublishedPosts } from '@/utils/post';

const posts = getPublishedPosts();
const categories = getAllCategories();
const tags = getAllTags();

/**
 * 部落格統計資訊映射表。
 *
 * 定義要在統計卡片中顯示的項目（文章、分類、標籤）及其數量。
 */
export const BLOG_STATS_MAP = [
    {
        label: 'Posts',
        count: posts?.length,
    },
    {
        label: 'Categories',
        count: categories?.length,
    },
    {
        label: 'Tags',
        count: tags?.length,
    },
];
