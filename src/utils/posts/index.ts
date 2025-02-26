import { allPosts } from 'contentlayer/generated';
import { PostT } from '@/types/post';

// 排序文章根據日期
const sortPostsByDate = (post1: PostT, post2: PostT) => {
    const date1 = post1?.date ? new Date(post1.date)?.getTime() : 0;
    const date2 = post2?.date ? new Date(post2.date)?.getTime() : 0;
    return date2 - date1;
};

// 獲取所有已發佈的文章(除去草稿)
const publishedPosts = allPosts?.filter((post) => !post?.draft) || [];

// 獲取所有分類
export const getAllCategories = (): string[] => {
    const categories = publishedPosts
        .map((post) => post?.category)
        .filter((category): category is string => !!category);

    // 去除重複的分類
    return Array.from(new Set(categories));
};

// 獲取所有文章
export const getAllPosts = () => {
    return publishedPosts?.sort(sortPostsByDate);
};

// 根據分類獲取文章
export const getPostsByCategory = (category: string) => {
    return publishedPosts
        ?.filter((post) => post?.category?.toLowerCase() === category?.toLowerCase())
        ?.sort(sortPostsByDate);
};

// 檢查分類是否存在
export const isCategoryExists = (category: string): boolean => {
    return getAllCategories()?.some((cat) => cat?.toLowerCase() === category?.toLowerCase());
};

// 根據 slug 獲取文章
export const getPostBySlug = (slug: string) => {
    return publishedPosts.find((post) => post?.url === slug);
};

// 根據數量獲取最新文章
export const getLatestPosts = (number: number) => {
    return publishedPosts.slice(0, number).sort(sortPostsByDate);
};
