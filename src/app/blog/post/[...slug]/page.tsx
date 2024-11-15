import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/utils/markdownToHtml';
import cn from '@/utils/cn';
import ArticleMeta from '@/components/molecules/article-meta';

interface PostProps {
    params: {
        slug: string[];
    };
}

const Post = async ({ params }: PostProps) => {
    const slug = params.slug.join('/');

    const post = getPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post?.content || '');

    console.log(content);

    return (
        <article className={cn('mx-auto my-8', 'space-y-8')}>
            <header className={cn('space-y-3')}>
                <ArticleMeta date={post?.date} category={post?.category} />
                <h1 className={cn('text-3xl font-bold')}>{post?.title}</h1>
            </header>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
    );
};

export default Post;
