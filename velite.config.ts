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
                    const headings: { level: number; text: string }[] = [];

                    if (meta.content && typeof meta.content === 'string') {
                        const lines = meta.content.split('\n');

                        lines.forEach((line: string) => {
                            // 匹配 markdown 標題格式：## 標題內容
                            const match = line.match(/^(#{1,6})\s+(.+)$/);
                            if (match) {
                                const level = match[1].length; // # 的數量就是層級
                                const text = match[2].trim(); // 標題文字

                                headings.push({
                                    level,
                                    text,
                                });
                            }
                        });
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
