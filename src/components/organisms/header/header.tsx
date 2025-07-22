import { cookies } from 'next/headers';
import Logo from '@/components/atoms/logo';
import ThemeToggle from '@/components/atoms/theme-toggle';
import MobileNavigation from '@/components/molecules/mobile-navigation';
import Navigation from '@/components/molecules/navigation';
import NoticeBar from '@/components/molecules/notice-bar';
import SocialLinks from '@/components/molecules/social-links';
import { NOTICE_BAR_MESSAGE, NOTICE_BAR_LINK } from '@/constants/site';

// Cookie 名稱
const COOKIE_NAME = 'header_notice_bar_is_open';

// 通用樣式類別
const HEADER_STYLES = {
    container: 'border-border/40 bg-background/60 sticky top-0 left-0 z-50 border-b shadow-md backdrop-blur-md',
    innerContainer: 'container mx-auto flex h-14.5 items-center justify-between px-4',
    desktopNav: 'hidden items-center gap-x-2 md:flex',
} as const;

const Header = async () => {
    // 取得 Cookie
    const cookieStore = await cookies();
    const noticeBarClosed = cookieStore.get(COOKIE_NAME)?.value === 'false';

    return (
        <header className={HEADER_STYLES.container}>
            <div className={HEADER_STYLES.innerContainer}>
                {/* 網站標題 */}
                <Logo />

                {/* 桌面版導航 */}
                <div className={HEADER_STYLES.desktopNav}>
                    <Navigation />
                    <SocialLinks />
                    <ThemeToggle />
                </div>

                {/* 手機版導航 */}
                <MobileNavigation />
            </div>
            {/* 公告 */}
            <NoticeBar
                initialOpen={!noticeBarClosed}
                message={NOTICE_BAR_MESSAGE}
                link={NOTICE_BAR_LINK}
                cookieName={COOKIE_NAME}
            />
        </header>
    );
};

export default Header;
