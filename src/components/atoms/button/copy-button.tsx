'use client';

import { useState } from 'react';
import cn from '@/utils/cn';

interface CopyButtonProps {
    copyText: string;
    className?: string;
}

/**
 * 複製按鈕組件
 * 用於複製代碼塊內容到剪貼板
 */
const CopyButton = ({ copyText, className }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false);

    // 處理複製功能
    const handleCopy = async () => {
        if (!copyText) return;

        try {
            // 確保在客戶端環境中執行
            if (typeof navigator !== 'undefined') {
                await navigator.clipboard.writeText(copyText);
                setCopied(true);
                // 1秒後重置複製狀態
                setTimeout(() => setCopied(false), 1000);
            }
        } catch (err) {
            console.error('複製文本失敗: ', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className={cn(
                'group',
                'flex h-8 w-8 items-center justify-center',
                'rounded-md bg-gray-700/80 text-gray-300',
                'hover:bg-gray-600 hover:text-white',
                'transition-all duration-200',
                className,
            )}
            aria-label={copied ? '已複製！' : '複製代碼到剪貼板'}
            title={copied ? '已複製！' : '複製代碼到剪貼板'}
        >
            {copied ? (
                // 複製成功圖標
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            ) : (
                // 複製圖標
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={cn('transition-opacity duration-200', 'group-hover:opacity-100')}
                >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            )}
        </button>
    );
};

export default CopyButton;
