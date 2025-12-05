import Logo from '@/components/atoms/logo';
import ThemeToggle from '@/components/atoms/theme-toggle';
import CommandSearchButton from '@/components/molecules/command-search-button';
import MobileNavigation from '@/components/molecules/mobile-navigation';
import Navigation from '@/components/molecules/navigation';
import NoticeBar from '@/components/molecules/notice-bar';
import SocialLinks from '@/components/molecules/social-links';
import { NOTICE_BAR_MESSAGE, NOTICE_BAR_LINK } from '@/constants/site';

/**
 * Header 元件的樣式定義。
 */
const HEADER_STYLES = {
    /** 容器樣式：固定在頂部、背景模糊、陰影等。 */
    container: 'border-border/40 bg-background/60 sticky top-0 left-0 z-50 border-b shadow-md backdrop-blur-md',
    /** 內部容器樣式：限制寬度、Flex 佈局、垂直置中。 */
    innerContainer: 'container mx-auto flex h-14.5 items-center justify-between px-4',
    /** 桌面版導航樣式：在移動設備上隱藏。 */
    desktopNav: 'hidden items-center gap-x-2 md:flex',
} as const;

/**
 * 網站頂部導航欄元件。
 *
 * 包含 Logo、導航連結、搜尋按鈕、社交連結、主題切換和公告欄。
 * 支援響應式設計，在移動設備上顯示漢堡選單。
 */
const Header = () => {
    return (
        <header className={HEADER_STYLES.container}>
            <div className={HEADER_STYLES.innerContainer}>
                {/* 網站標題 */}
                <Logo />
                {/* 桌面版導航 */}
                <div className={HEADER_STYLES.desktopNav}>
                    {/* 搜尋按鈕 */}
                    <CommandSearchButton />
                    {/* 導航 */}
                    <Navigation />
                    {/* 社交連結 */}
                    <SocialLinks />
                    {/* 主題切換 */}
                    <ThemeToggle />
                </div>

                {/* 手機版導航 */}
                <MobileNavigation />
            </div>
            {/* 公告 */}
            <NoticeBar message={NOTICE_BAR_MESSAGE} link={NOTICE_BAR_LINK} />
        </header>
    );
};

export default Header;
