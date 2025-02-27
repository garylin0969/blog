import { notFound } from 'next/navigation';
import { ComponentType } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';

import CodeBlock from '@/components/molecules/code-block';
import ArticleMeta from '@/components/molecules/article-meta';
import SectionTitle from '@/components/molecules/section-title';
import Comments from '@/components/molecules/comments';
import cn from '@/utils/cn';
import { getPostBySlug } from '@/utils/posts';

import '@/styles/prism-vsc-dark-plus.css';

interface PostProps {
    params: {
        slug: string[];
    };
}

interface MDXComponents {
    [key: string]: ComponentType<any>;
}

// 追蹤當前代碼標題
let currentCodeTitle = '';

// 自定義 MDX 組件
const mdxComponents: MDXComponents = {
    div: (props) => {
        if (props?.className === 'rehype-code-title') {
            // 存儲代碼標題
            currentCodeTitle = typeof props.children === 'string' ? props.children : '';

            // 返回標題元素，但樣式與 CodeBlock 一致
            return null;
        }
        return <div {...props} />;
    },

    pre: (props) => {
        // 使用存儲的代碼標題
        const title = currentCodeTitle || '';

        // 渲染後重置標題
        const result = (
            <CodeBlock title={title} currentProps={props}>
                <pre
                    className={cn(
                        props.className,
                        '!m-0 flex !min-h-[50px] flex-col justify-center !rounded-t-none p-4',
                    )}
                >
                    {props.children}
                </pre>
            </CodeBlock>
        );

        // 重置標題
        currentCodeTitle = '';

        return result;
    },

    // 可以在此添加更多自定義組件
    code: (props) => {
        const isInline = typeof props.children === 'string';
        if (isInline) {
            return (
                <code
                    {...props}
                    className={cn(
                        'before:content-none after:content-none',
                        'rounded-md px-1.5 py-0.5',
                        'bg-sky-50 dark:bg-sky-400/10',
                        'text-sky-500 dark:text-sky-400',
                    )}
                />
            );
        }

        return <code {...props} />;
    },
};

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
                        'dark:prose-invert dark:prose-pre:bg-[#282C34]',
                    )}
                >
                    <MDXContent components={mdxComponents} />
                </div>
            </div>
            <div className="mt-10">
                <Comments />
            </div>
        </article>
    );
};

export default PostsPage;
