import { useEffect, useState } from 'react';

/**
 * Hook 用於監聽滾動位置並檢測當前可見的標題
 * @param headings 標題列表
 * @returns 當前激活的標題文字數組
 */
const useActiveHeadings = (headings: { level: number; text: string }[]) => {
    const [activeHeadings, setActiveHeadings] = useState<string[]>([]);

    useEffect(() => {
        if (!headings || headings.length === 0) return;

        const handleScroll = () => {
            // 獲取所有標題元素
            const headingElements = headings
                .map((heading) => {
                    const element = document.getElementById(heading.text);
                    return element ? { element, text: heading.text } : null;
                })
                .filter(Boolean) as { element: HTMLElement; text: string }[];

            if (headingElements.length === 0) return;

            const visibleHeadings: string[] = [];
            const viewportTop = 120; // 考慮 header 高度
            const viewportBottom = window.innerHeight - 50; // 視窗底部留一些空間

            // 檢查所有在視窗範圍內可見的標題
            for (const { element, text } of headingElements) {
                const rect = element.getBoundingClientRect();

                // 標題在視窗範圍內可見（包括部分可見）
                if (
                    (rect.top >= viewportTop && rect.top <= viewportBottom) || // 標題頂部在視窗內
                    (rect.bottom >= viewportTop && rect.bottom <= viewportBottom) || // 標題底部在視窗內
                    (rect.top <= viewportTop && rect.bottom >= viewportBottom) // 標題跨越整個視窗
                ) {
                    visibleHeadings.push(text);
                }
            }

            // 如果沒有標題在視窗內，找到最近的一個標題
            if (visibleHeadings.length === 0) {
                for (let i = headingElements.length - 1; i >= 0; i--) {
                    const { element, text } = headingElements[i];
                    const rect = element.getBoundingClientRect();

                    if (rect.top <= viewportTop) {
                        visibleHeadings.push(text);
                        break;
                    }
                }
            }

            setActiveHeadings(visibleHeadings);
        };

        // 初始檢查
        setTimeout(handleScroll, 100);

        // 監聽滾動事件
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [headings]);

    return activeHeadings;
};

export default useActiveHeadings;
