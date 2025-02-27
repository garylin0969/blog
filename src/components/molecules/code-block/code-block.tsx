'use client';

import { useMemo } from 'react';
import cn from '@/utils/cn';
import CopyButton from '../../atoms/button/copy-button';
import Tag from '../../atoms/tag';

interface CodeBlockProps {
    title?: string;
    language?: string;
    children: React.ReactNode;
    currentProps?: any;
}

// 从 React 元素树中提取纯文本代码
const extractTextFromReactElement = (element: any): string => {
    // 如果是字符串，直接返回
    if (typeof element === 'string') return element;

    // 如果是数组，递归处理每个元素并连接
    if (Array.isArray(element)) {
        return element.map(extractTextFromReactElement).join('');
    }

    // 如果是 React 元素，处理其 children
    if (element && element.props && element.props.children) {
        return extractTextFromReactElement(element.props.children);
    }

    // 其他情况返回空字符串
    return '';
};

const CodeBlock = ({ title = '', currentProps, children }: CodeBlockProps) => {
    const className = currentProps?.className;

    // 提取语言信息
    const language = useMemo(() => {
        if (className) {
            const match = className.match(/language-(\w+)/);
            return match ? match[1] : '';
        }
        return '';
    }, [className]);

    // 提取代码文本
    const codeText = useMemo(() => {
        if (!currentProps?.children?.props?.children) return '';
        return extractTextFromReactElement(currentProps.children.props.children);
    }, [currentProps]);

    return (
        <div className={cn('group relative my-6 overflow-hidden rounded-lg border border-white/30 shadow-md')}>
            <div className="flex items-center justify-between border-b border-white/30 bg-gray-800 px-4 py-2 font-mono text-sm text-gray-200">
                <span className="font-bold">{title}</span>
                <div className="flex items-center gap-2">
                    {language && <Tag mode="dark">{language}</Tag>}
                    <CopyButton copyText={codeText} className="static bg-transparent hover:bg-gray-700" />
                </div>
            </div>
            <div className="relative">{children}</div>
        </div>
    );
};

export default CodeBlock;
