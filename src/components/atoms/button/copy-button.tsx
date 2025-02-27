'use client';

import { useState, useEffect, useRef } from 'react';
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
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // 清除timeout，避免內存洩漏
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // 處理複製功能
    const handleCopy = async () => {
        if (!copyText) return;

        try {
            // 確保在客戶端環境中執行
            if (typeof navigator !== 'undefined') {
                await navigator.clipboard.writeText(copyText);
                setCopied(true);
                // 清除之前的timeout
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
                // 1秒後重置複製狀態
                timeoutRef.current = setTimeout(() => setCopied(false), 800);
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
                'flex h-7 w-7 items-center justify-center',
                'rounded-md bg-gray-700/80 text-gray-300',
                'hover:bg-gray-600 hover:text-white',
                'transition-all duration-200',
                className,
            )}
            aria-label={copied ? '已複製！' : '複製代碼到剪貼板'}
            title={copied ? '已複製！' : '複製代碼到剪貼板'}
        >
            <div className="relative h-4 w-4">
                <div
                    className={cn(
                        'absolute inset-0 transition-opacity duration-200',
                        copied ? 'opacity-100' : 'opacity-0',
                    )}
                >
                    {/* 複製成功圖標 */}
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
                </div>
                <div
                    className={cn(
                        'absolute inset-0 transition-opacity duration-200',
                        copied ? 'opacity-0' : 'opacity-100',
                    )}
                >
                    {/* 複製圖標 */}
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
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                </div>
            </div>
        </button>
    );
};

export default CopyButton;
