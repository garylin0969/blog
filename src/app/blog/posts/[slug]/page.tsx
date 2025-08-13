import { notFound } from 'next/navigation';
import { PostMeta } from '@/components/atoms/post-meta/post-meta';
import { TagList } from '@/components/atoms/tag-list';
import Comments from '@/components/molecules/comments';
import MDXContent from '@/components/molecules/mdx-content';
import TableOfContents from '@/components/molecules/table-of-contents';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { generatePostMetadata, generatePostNotFoundMetadata } from '@/constants/metadatas';
import { NOTICE_BAR_MESSAGE } from '@/constants/site';
import { getPostBySlug, getPublishedPosts } from '@/utils/post';
import { cn } from '@/utils/shadcn';

interface PostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// 生成靜態參數
export async function generateStaticParams() {
    return getPublishedPosts()?.map((post) => ({
        slug: post?.slug,
    }));
}

// 生成metadata
export async function generateMetadata({ params }: PostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return generatePostNotFoundMetadata();
    }

    return generatePostMetadata(post);
}

const PostPage = async ({ params }: PostPageProps) => {
    const { slug } = await params;

    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="xl:flex xl:justify-between">
            {/* 文章 */}
            <article className="lg:px-8 xl:flex-1">
                <header className="mb-4 space-y-3 border-b pb-4">
                    <h1 className="text-[42px] font-bold">{post?.title}</h1>
                    <PostMeta date={post?.date} category={post?.category} />
                    <TagList tags={post?.tags ?? []} />
                </header>
                <Accordion type="single" collapsible className="mb-4 xl:hidden">
                    <AccordionItem value="table-of-contents">
                        <AccordionTrigger className="bg-primary/10 text-primary items-center rounded-xs p-1 text-lg font-semibold">
                            目錄
                        </AccordionTrigger>
                        <AccordionContent className="p-4">
                            <TableOfContents headings={post?.headings ?? []} />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="prose prose-figcaption:mt-0 prose-figure:m-0 dark:prose-invert md:prose-lg max-w-none">
                    <MDXContent code={post?.code} />
                </div>
                <div className="mt-10">
                    <Comments />
                </div>
            </article>
            {/* 目錄 */}
            <aside
                className={cn(
                    'sticky hidden shrink-0 self-start xl:block',
                    NOTICE_BAR_MESSAGE ? 'top-30.5' : 'top-22.5'
                )}
            >
                <TableOfContents headings={post?.headings ?? []} />
            </aside>
        </div>
    );
};

export default PostPage;
