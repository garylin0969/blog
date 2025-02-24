import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleMeta from '@/components/molecules/article-meta';
import DividerTitle from '@/components/molecules/divider-title';
import Comments from '@/components/molecules/comments';
import cn from '@/utils/cn';
import { getAllPosts, getPostBySlug } from '@/utils/posts';
import { useMDXComponent } from 'next-contentlayer/hooks';

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

const Posts = ({ params }: PostProps) => {
    const decodedSlug = params?.slug?.map(decodeURIComponent).join('/');
    const post = getPostBySlug(`/${decodedSlug}`);

    if (!post) {
        return notFound();
    }

    const MDXContent = useMDXComponent(post?.body?.code);
    const { date, category, title } = post;

    return (
        <article className={cn('space-y-8')}>
            <header className={cn('space-y-3')}>
                <ArticleMeta date={date} category={category} />
                <h2 className={cn('text-3xl font-bold dark:text-white')}>{title}</h2>
            </header>
            <DividerTitle />
            <div className="grid grid-cols-1">
                <div
                    className={cn(
                        'col-span-1 max-w-none',
                        'prose md:prose-lg',
                        'dark:prose-invert dark:prose-pre:bg-[#282C34]',
                    )}
                >
                    <MDXContent />
                </div>
            </div>
            <div className="mt-10">
                <Comments />
            </div>
        </article>
    );
};

export default Posts;
