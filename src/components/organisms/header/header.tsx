import Logo from '@/components/atoms/logo';
import ThemeToggle from '@/components/atoms/theme-toggle';
import CommandSearchButton from '@/components/molecules/command-search-button';
import MobileNavigation from '@/components/molecules/mobile-navigation';
import Navigation from '@/components/molecules/navigation';
import NoticeBar from '@/components/molecules/notice-bar';
import SocialLinks from '@/components/molecules/social-links';
import { NOTICE_BAR_MESSAGE, NOTICE_BAR_LINK } from '@/constants/site';

// 通用樣式類別
const HEADER_STYLES = {
    container: 'border-border/40 bg-background/60 sticky top-0 left-0 z-50 border-b shadow-md backdrop-blur-md',
    innerContainer: 'container mx-auto flex h-14.5 items-center justify-between px-4',
    desktopNav: 'hidden items-center gap-x-2 md:flex',
} as const;

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
