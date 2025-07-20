import type { Metadata } from 'next';
import { DOMAIN } from '@/constants/site';

interface Post {
    title: string;
    description?: string;
    date: string;
    slug: string;
    image?: string;
    tags?: string[];
}

export const generatePostMetadata = (post: Post): Metadata => {
    // 決定要使用的圖片：post有image就用post的image，沒有就用網站icon
    const ogImage = post.image
        ? {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
          }
        : {
              url: '/favicons/android-chrome-512x512.png',
              width: 512,
              height: 512,
              alt: 'GaryLin Dev',
          };

    return {
        title: post.title,
        description: post.description || post.title,
        alternates: {
            canonical: `${DOMAIN}/blog/posts/${post.slug}`,
        },
        openGraph: {
            title: `${post.title} | GaryLin Dev`,
            description: post.description || post.title,
            url: `${DOMAIN}/blog/posts/${post.slug}`,
            locale: 'zh_TW',
            type: 'article',
            publishedTime: post.date,
            authors: ['Gary Lin'],
            tags: post.tags,
            images: [ogImage],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${post.title} | GaryLin Dev`,
            description: post.description || post.title,
            images: [ogImage],
        },
    };
};

export const generatePostNotFoundMetadata = (): Metadata => {
    return {
        title: '文章不存在',
    };
};
