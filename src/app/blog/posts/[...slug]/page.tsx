import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/utils/posts';
import cn from '@/utils/cn';
import ArticleMeta from '@/components/molecules/article-meta';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { type Metadata } from 'next';

interface PostProps {
    params: {
        slug: string[];
    };
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
    // 將 slug 中的每個部分解碼
    const decodedSlug = params?.slug?.map((part) => decodeURIComponent(part))?.join('/');
    const post = getPostBySlug(`/${decodedSlug}`);
    const title = `GaryLin | ${post?.title}`;

    return {
        title,
        openGraph: {
            title: title,
            description: post?.description,
            images: [
                {
                    url: post?.coverImage || '/assets/default-open-graph.jpg',
                },
            ],
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts(); // 從資料庫或 CMS 獲取文章

    return posts.map((post) => ({
        slug: post?.url?.split('/').filter(Boolean),
    }));
}

const Posts = ({ params }: PostProps) => {
    // 將 slug 中的每個部分解碼
    const decodedSlug = params?.slug?.map((part) => decodeURIComponent(part))?.join('/');

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
                <h1 className={cn('text-3xl font-bold dark:text-white')}>{title}</h1>
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
