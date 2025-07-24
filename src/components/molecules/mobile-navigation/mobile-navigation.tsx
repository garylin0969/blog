import { MenuIcon } from 'lucide-react';
import Logo from '@/components/atoms/logo';
import ThemeToggle from '@/components/atoms/theme-toggle';
import CommandSearchButton from '@/components/molecules/command-search-button';
import Navigation from '@/components/molecules/navigation';
import SocialLinks from '@/components/molecules/social-links';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

/**
 * 手機版導航
 * @returns 手機版導航
 */
const MobileNavigation = () => {
    return (
        <div className="flex items-center gap-x-2 md:hidden">
            {/* 搜尋按鈕 */}
            <CommandSearchButton />
            {/* 主題切換 */}
            <ThemeToggle />
            {/* 選單 */}
            <Sheet>
                {/* 選單觸發器 */}
                <SheetTrigger aria-label="open menu">
                    <MenuIcon className="size-4" />
                </SheetTrigger>
                {/* 選單內容 */}
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>
                            {/* 網站標題 */}
                            <Logo imageLoading="lazy" />
                        </SheetTitle>
                        <SheetDescription className="sr-only">Mobile Navigation</SheetDescription>
                    </SheetHeader>
                    {/* 導航 */}
                    <Navigation
                        menuClassName="block flex-none max-w-full"
                        linkClassName="w-full"
                        listClassName="block mx-auto"
                    />
                    {/* 社交連結 */}
                    <SocialLinks className="flex items-center justify-center gap-x-3.5" iconClassName="size-6" />
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNavigation;
