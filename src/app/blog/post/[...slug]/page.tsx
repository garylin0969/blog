import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/utils/markdownToHtml';
import cn from '@/utils/cn';
import { DateFormatter } from '@/components/atoms/date';
import { NextLink } from '@/components/atoms/link';

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

    const categoryLink = `/blog/${post?.category?.toLowerCase()}`;

    return (
        <article className={cn('my-8')}>
            <header>
                <h1 className={cn('text-3xl font-bold')}>{post?.title}</h1>
                <div className={cn('font-serif', 'space-x-3')}>
                    <span>
                        <DateFormatter dateString={post?.date} />
                    </span>
                    <span>__</span>
                    <span>
                        <NextLink href={categoryLink}>{post?.category}</NextLink>
                    </span>
                </div>
            </header>
        </article>
    );
};

export default Post;
