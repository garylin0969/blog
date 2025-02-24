import { type Metadata } from 'next';
import { getAllPosts, getPostBySlug } from '@/utils/posts';
import PostsPage from '@/components/pages/posts-page';

interface PostProps {
    params: {
        slug: string[];
    };
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
    const decodedSlug = params?.slug?.map(decodeURIComponent).join('/');
    const post = getPostBySlug(`/${decodedSlug}`);

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.',
        };
    }

    const title = post.title; // 會自動變成 'GaryLin | 文章標題'

    return {
        title,
        description: post.description,
        openGraph: {
            title,
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
            title,
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
        keywords: ['Gary Lin', 'Blog', 'Frontend Development', ...(post.tags || [])],
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
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post?.url?.split('/').filter(Boolean),
    }));
}

export default PostsPage;
