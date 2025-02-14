import { MetadataRoute } from 'next';
import { getAllPosts } from '@/utils/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // 獲取所有文章
    const posts = getAllPosts();

    // 基本頁面
    const routes = [
        {
            url: 'https://www.garylin.dev',
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1.0, // 首頁最重要
        },
        {
            url: 'https://www.garylin.dev/blog',
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9, // 部落格首頁次重要
        },
        {
            url: 'https://www.garylin.dev/about',
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8, // 關於頁面
        },
    ];

    // 為每篇文章生成 sitemap 項目
    const postRoutes = posts?.map((post) => ({
        url: `https://www.garylin.dev/blog/posts${post?.url}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7, // 文章頁面
    }));

    return [...routes, ...postRoutes];
}
