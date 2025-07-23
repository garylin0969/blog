import rehypePrettyCode from 'rehype-pretty-code';
import { Options } from 'rehype-pretty-code';
import { createHighlighter } from 'shiki';
import themeDark from 'shiki/dist/themes/one-dark-pro.mjs';
import { defineConfig, s } from 'velite';

export default defineConfig({
    // 設定根目錄
    root: './content',

    // 設定輸出目錄
    output: {
        data: '.velite',
        assets: 'public/static',
        base: '/static/',
        name: '[name]-[hash:6].[ext]',
        clean: true,
    },

    // 設定 MDX 處理器
    mdx: {
        rehypePlugins: [
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

    // 定義collections
    collections: {
        posts: {
            name: 'Post',
            pattern: 'posts/**/*.{md,mdx}',
            schema: s
                .object({
                    title: s.string(),
                    date: s.isodate(),
                    description: s.string().optional(),
                    category: s.string().optional(),
                    tags: s.array(s.string()).optional(),
                    image: s.string().optional(),
                    slug: s.slug('title'),
                    draft: s.boolean().optional(),
                    code: s.mdx(),
                })
                .transform((data, { meta }) => {
                    // 從 meta.content 提取 headings
                    let match;
                    const headings: { level: number; text: string }[] = [];
                    // 正規表達式
                    const headingRegex = /^(#{2,6})\s+(.+)/gm;

                    if (typeof meta?.content === 'string') {
                        while ((match = headingRegex.exec(meta?.content)) !== null) {
                            headings.push({ level: match[1]?.length, text: match[2]?.trim() });
                        }
                    }

                    return {
                        ...data,
                        permalink: `/blog/posts/${data.slug}`,
                        headings,
                    };
                }),
        },
    },
});
