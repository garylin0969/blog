import { allPosts } from 'contentlayer/generated';

// 獲取所有分類
export const getAllCategories = () => {
    const categories = allPosts.map((post) => post?.category).filter((category): category is string => !!category);

    // 去除重複的分類
    return Array.from(new Set(categories));
};

// 獲取所有文章
export const getAllPosts = () => {
    return allPosts?.sort((post1, post2) => {
        const date1 = post1?.date ? new Date(post1.date).getTime() : 0;
        const date2 = post2?.date ? new Date(post2.date).getTime() : 0;
        return date2 - date1;
    });
};

// 根據分類獲取文章
export const getPostsByCategory = (category: string) => {
    return allPosts
        .filter((post) => post?.category?.toLowerCase() === category?.toLowerCase())
        ?.sort((post1, post2) => {
            const date1 = post1?.date ? new Date(post1.date).getTime() : 0;
            const date2 = post2?.date ? new Date(post2.date).getTime() : 0;
            return date2 - date1;
        });
};

// 檢查分類是否存在
export const isCategoryExists = (category: string) => {
    return getAllCategories()?.some((cat) => cat?.toLowerCase() === category?.toLowerCase());
};

export const getPostBySlug = (slug: string) => {
    return allPosts.find((post) => post?.url === slug);
};
