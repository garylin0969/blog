import { type Metadata } from 'next';
import { getAllPosts } from '@/utils/posts';
import PostsPage from '@/components/pages/posts-page';
import postsMetadataConfig from '@/configs/metadatas/posts-metadata.config';

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
    return postsMetadataConfig({ params });
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post?.url?.split('/').filter(Boolean),
    }));
}

export default PostsPage;
