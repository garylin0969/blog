import { getPostBySlug } from '@/utils/posts';

export default async ({ params }: { params: { slug: string[] } }) => {
    const decodedSlug = params?.slug?.map(decodeURIComponent).join('/');
    const post = getPostBySlug(`/${decodedSlug}`);

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.',
        };
    }

    const title = post.title;

    return {
        title,
        description: post.description,
        openGraph: {
            title: title,
            description: post.description,
            url: `https://www.garylin.dev/blog/posts${post.url}`,
            siteName: 'Gary Lin Portfolio',
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
            title: title,
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
            'Blog',
            'Frontend Developer',
            'React.js',
            'Next.js',
            'TypeScript',
            'Web Development',
            'JavaScript',
            ...(post?.tags || []),
        ],
        authors: [{ name: 'Gary Lin', url: 'https://www.garylin.dev' }],
        alternates: {
            canonical: `https://www.garylin.dev/blog/posts${post.url}`,
        },
        robots: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    };
};
