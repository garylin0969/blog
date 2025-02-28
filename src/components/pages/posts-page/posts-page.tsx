import { notFound } from 'next/navigation';

import ArticleMeta from '@/components/molecules/article-meta';
import SectionTitle from '@/components/molecules/section-title';
import Comments from '@/components/molecules/comments';

import cn from '@/utils/cn';
import { getPostBySlug } from '@/utils/posts';
import mdxRenderConfig from '@/configs/mdx-render.config';

import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeMathjax from 'rehype-mathjax';
import rehypeCodeTitles from 'rehype-code-titles';
import type { Options } from 'rehype-pretty-code';

import themeDark from 'shiki/dist/themes/one-dark-pro.mjs';
import { createHighlighter } from 'shiki/bundle/web';

interface PostProps {
    params: {
        slug: string[];
    };
}

const PostsPage = async ({ params }: PostProps) => {
    const { slug } = await params;
    const decodedSlug = slug?.map(decodeURIComponent).join('/');
    const post = getPostBySlug(`/${decodedSlug}`);

    if (!post) {
        return notFound();
    }

    const { date, category, title, tags } = post;

    return (
        <article className="space-y-6">
            <header className="space-y-3">
                <h2 className={cn('text-3xl font-bold', 'dark:text-white')}>{title}</h2>
                <ArticleMeta className="space-y-3" date={date} category={category} tags={tags} />
            </header>
            <SectionTitle />
            <div className="grid grid-cols-1">
                <div className={cn('col-span-1 max-w-none', 'prose md:prose-lg', 'dark:prose-invert')}>
                    <MDXRemote
                        source={post?.body?.raw}
                        components={mdxRenderConfig}
                        options={{
                            parseFrontmatter: true,
                            mdxOptions: {
                                remarkPlugins: [remarkGfm, remarkMath],
                                rehypePlugins: [
                                    [rehypeCodeTitles, {}],
                                    [rehypeMathjax, {}],
                                    [
                                        rehypePrettyCode,
                                        {
                                            theme: themeDark,
                                            getHighlighter: createHighlighter,
                                            transformers: [
                                                {
                                                    pre(node) {
                                                        node.properties.rawcontent = this.source;
                                                    },
                                                },
                                            ],
                                        } as Options,
                                    ],
                                ],
                            },
                        }}
                    />
                </div>
            </div>
            <div className="mt-10">
                <Comments />
            </div>
        </article>
    );
};

export default PostsPage;
