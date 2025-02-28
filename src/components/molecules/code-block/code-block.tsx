'use client';

import { useMemo } from 'react';
import cn from '@/utils/cn';
import CopyButton from '@/components/atoms/button/copy-button';
import Tag from '@/components/atoms/tag';

interface CodeBlockProps {
    title?: string;
    language?: string;
    children: React.ReactNode;
    currentProps?: any;
}

/**
 * 從 React 元素樹中擷取純文字程式碼
 */
const extractTextFromReactElement = (element: any): string => {
    if (typeof element === 'string') {
        return element;
    }

    if (Array.isArray(element)) {
        return element.map(extractTextFromReactElement).join('');
    }

    if (element?.props?.children) {
        return extractTextFromReactElement(element.props.children);
    }

    return '';
};

// 擷取標題元件
const CodeBlockTitle = ({ title }: { title: string }) => (
    <span className="max-w-[180px] truncate sm:max-w-full" title={title}>
        {title}
    </span>
);

// 擷取工具列元件
const CodeBlockToolbar = ({ language, codeText }: { language: string; codeText: string }) => (
    <div className="flex items-center gap-1">
        {language && (
            <Tag variant="secondary" mode="dark">
                {language}
            </Tag>
        )}
        <CopyButton copyText={codeText} className="static bg-transparent hover:bg-gray-700" />
    </div>
);

const CodeBlock = ({ title = '', currentProps, children }: CodeBlockProps) => {
    // 擷取語言資訊
    const language = useMemo(() => {
        const dataLanguage = currentProps?.['data-language'];
        return dataLanguage ?? '';
    }, [currentProps?.['data-language']]);

    // 擷取程式碼文字
    const codeText = useMemo(() => {
        if (!currentProps?.children?.props?.children) return '';
        return extractTextFromReactElement(currentProps.children.props.children);
    }, [currentProps]);

    return (
        <div className={cn('group relative', 'my-6 overflow-hidden rounded-lg shadow-md', 'border border-white/30')}>
            <div
                className={cn(
                    'flex items-center justify-between gap-1',
                    'px-4 py-2',
                    'bg-gray-800',
                    'border-b border-white/30',
                    'font-mono text-sm text-gray-200',
                )}
            >
                <CodeBlockTitle title={title} />
                <CodeBlockToolbar language={language} codeText={codeText} />
            </div>

            <div className="relative">{children}</div>
        </div>
    );
};

export default CodeBlock;
