import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/utils/posts/posts';
import cn from '@/utils/cn';
import ArticleMeta from '@/components/molecules/article-meta';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface PostProps {
    params: {
        slug: string[];
    };
}

const Posts = ({ params }: PostProps) => {
    const slug = params?.slug?.join('/');

    const post = getPostBySlug(`/${slug}`);

    if (!post) {
        return notFound();
    }

    const MDXContent = useMDXComponent(post?.body?.code);

    return (
        <article className={cn('my-8', 'space-y-8')}>
            <header className={cn('space-y-3')}>
                <ArticleMeta date={post?.date} category={post?.category} />
                <h1 className={cn('text-3xl font-bold dark:text-white')}>{post?.title}</h1>
            </header>
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
        </article>
    );
};

export default Posts;
