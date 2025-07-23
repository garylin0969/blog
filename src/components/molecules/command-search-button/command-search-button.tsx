'use client';

import { SearchIcon } from 'lucide-react';
import { useCallback } from 'react';
import CommandSearch from '@/components/molecules/command-search';
import { Button } from '@/components/ui/button';
import { useCommandSearch } from '@/hooks';
import { cn } from '@/utils/shadcn';

interface CommandSearchButtonProps {
    className?: string;
}

/**
 * 搜尋按鈕
 * @param className 類別名稱
 * @returns 搜尋按鈕
 */
const CommandSearchButton = ({ className }: CommandSearchButtonProps) => {
    const { open, setOpen } = useCommandSearch();

    // 使用 useCallback 優化 onClick 函數
    const handleOpenSearch = useCallback(() => {
        setOpen(true);
    }, [setOpen]);

    return (
        <div className="flex items-center justify-center">
            <Button
                variant="ghost"
                size="sm"
                className={cn('h-9 w-9 p-0', className)}
                onClick={handleOpenSearch}
                aria-label="搜尋文章"
            >
                <SearchIcon className="size-4" />
            </Button>

            <CommandSearch open={open} onOpenChange={setOpen} />
        </div>
    );
};

export default CommandSearchButton;
