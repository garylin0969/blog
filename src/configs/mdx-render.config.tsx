import { ComponentType } from 'react';
import CodeBlock from '@/components/molecules/code-block';
import cn from '@/utils/cn';

interface MDXComponents {
    [key: string]: ComponentType<any>;
}

// 追蹤當前代碼標題
let currentCodeTitle = '';

// 自定義 MDX 組件
const mdxRenderConfig: MDXComponents = {
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
                    className={cn(props.className, 'flex flex-col justify-center', '!min-h-[50px] p-4', 'bg-[#282C34]')}
                    style={{ margin: '0', borderTopRightRadius: '0px', borderTopLeftRadius: '0px' }}
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

export default mdxRenderConfig;
