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
    const title = `GaryLin | ${post?.title}`;

    return {
        title,
        openGraph: {
            title,
            description: post?.description,
            url: `https://www.garylin.dev/blog/posts${post?.url}`,
            images: [
                {
                    url: post?.coverImage || '/assets/default-open-graph.jpg',
                },
            ],
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
