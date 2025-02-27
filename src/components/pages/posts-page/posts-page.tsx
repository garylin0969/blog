import { notFound } from 'next/navigation';
import ArticleMeta from '@/components/molecules/article-meta';
import SectionTitle from '@/components/molecules/section-title';
import Comments from '@/components/molecules/comments';
import cn from '@/utils/cn';
import { getPostBySlug } from '@/utils/posts';
import { useMDXComponent } from 'next-contentlayer/hooks';

import '@/styles/prism-vsc-dark-plus.css';

interface PostProps {
    params: {
        slug: string[];
    };
}

const PostsPage = ({ params }: PostProps) => {
    const decodedSlug = params?.slug?.map(decodeURIComponent).join('/');
    const post = getPostBySlug(`/${decodedSlug}`);

    if (!post) {
        return notFound();
    }

    const MDXContent = useMDXComponent(post?.body?.code);
    const { date, category, title, tags } = post;

    return (
        <article className={cn('space-y-6')}>
            <header className={cn('space-y-3')}>
                <h2 className={cn('text-3xl font-bold dark:text-white')}>{title}</h2>
                <ArticleMeta className="space-y-3" date={date} category={category} tags={tags} />
            </header>
            <SectionTitle />
            <div className="grid grid-cols-1">
                <div
                    className={cn(
                        'col-span-1 max-w-none',
                        'prose md:prose-lg',
                        'prose-code:before:content-none prose-code:after:content-none',
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

export default PostsPage;
