'use client';

import { FaInfoCircle, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/shadcn';

const LINK_PROPS = {
    target: '_blank',
    rel: 'noopener noreferrer',
} as const;

interface NoticeBarProps {
    className?: string;
    initialOpen?: boolean;
    message?: string;
    link?: string;
    cookieName?: string;
}

// Cookie 操作函數
const setCookie = (name: string, value: string): void => {
    if (typeof document === 'undefined') return;
    document.cookie = `${name}=${value};path=/`;
};

// 公告
const NoticeBar = ({ className, message, link, initialOpen = true, cookieName }: NoticeBarProps) => {
    // 使用服務端傳遞的初始狀態，避免 hydration mismatch
    const [isOpen, setIsOpen] = useState(initialOpen);

    if (!message || !isOpen) return null;

    // 關閉公告
    const handleClose = () => {
        if (cookieName) {
            setCookie(cookieName, 'false');
        }
        setIsOpen(false);
    };

    const Component = link ? 'a' : 'span';

    return (
        <div className={cn('bg-primary/10 text-primary py-1', className)}>
            <div className="container mx-auto">
                <div className="flex items-center justify-center gap-x-2">
                    <FaInfoCircle />
                    <Component href={link} {...(link && LINK_PROPS)}>
                        {message}
                    </Component>
                    <Button variant="ghost" size="icon" onClick={handleClose}>
                        <FaTimes className="size-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NoticeBar;
