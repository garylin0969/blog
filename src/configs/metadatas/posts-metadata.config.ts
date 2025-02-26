import { Metadata } from 'next';
import { getPostBySlug } from '@/utils/posts';
import { baseMetadata } from './base-metadata.config';

export default async ({ params }: { params: { slug: string[] } }): Promise<Metadata> => {
    const decodedSlug = params?.slug?.map(decodeURIComponent).join('/');
    const post = getPostBySlug(`/${decodedSlug}`);

    if (!post) {
        return {
            ...baseMetadata,
            title: '找不到文章',
            description: '您請求的文章無法找到。',
        };
    }

    const postMetadata: Partial<Metadata> = {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            url: `https://www.garylin.dev/blog/posts${post.url}`,
            siteName: 'Gary Lin Blog',
            images: [
                {
                    url: post.coverImage || '/assets/default-open-graph.jpg',
                    width: 1200,
                    height: 630,
                    alt: `${post.title} - Gary Lin Blog`,
                },
            ],
            type: 'article',
            publishedTime: post.date,
            authors: ['Gary Lin'],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [
                {
                    url: post.coverImage || '/assets/default-open-graph.jpg',
                    width: 1200,
                    height: 630,
                    alt: `${post.title} - Gary Lin Blog`,
                },
            ],
        },
        keywords: [
            'Gary Lin',
            'Frontend Developer',
            'Web Development',
            'React.js',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Blog',
            '前端',
            '前端開發',
            '前端開發者',
            '前端工程師',
            '前端開發人員',
            '網頁開發',
            '部落格',
            '技術部落格',
            ...(post?.tags || []),
        ],
        authors: [{ name: 'Gary Lin', url: 'https://www.garylin.dev' }],
        alternates: { canonical: `https://www.garylin.dev/blog/posts${post.url}` },
    };

    return { ...baseMetadata, ...postMetadata };
};
