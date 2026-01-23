'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useIsMounted } from '@/hooks';

/**
 * 主題切換元件。
 *
 * 用於切換網站的深色/淺色模式。
 * 包含載入狀態處理以避免水合不匹配。
 *
 * @returns 主題切換按鈕。
 */
const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const isMounted = useIsMounted();

    if (!isMounted) {
        return (
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Skeleton className="h-4 w-4 rounded-full" />
                <span className="sr-only">切換主題</span>
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 p-0"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {resolvedTheme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
            <span className="sr-only">切換主題</span>
        </Button>
    );
};

export default ThemeToggle;
