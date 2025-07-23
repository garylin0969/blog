import { useCallback, useEffect, useState } from 'react';

/**
 * 用於監聽 ⌘K 或 Ctrl+K 開啟搜尋
 * @returns 搜尋狀態和開關搜尋的函數
 */
const useCommandSearch = () => {
    const [open, setOpen] = useState(false);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        // ⌘K 或 Ctrl+K 開啟搜尋
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            setOpen(true);
        }

        // ESC 鍵關閉搜尋
        if (e.key === 'Escape') {
            setOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return {
        open,
        setOpen,
    };
};

export default useCommandSearch;
