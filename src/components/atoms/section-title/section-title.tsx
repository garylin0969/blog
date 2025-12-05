import { ElementType, ReactNode } from 'react';
import { cn } from '@/utils/shadcn';

/**
 * 章節標題元件的屬性介面。
 */
interface SectionTitleProps {
    /** 額外的 CSS 類名。 */
    className?: string;
    /** 渲染的 HTML 標籤 (預設為 'h2')。 */
    as?: ElementType;
    /** 是否顯示井號前綴 (預設為 true)。 */
    isHash?: boolean;
    /** 標題內容。 */
    children: ReactNode;
}

/**
 * 章節標題元件。
 *
 * 用於頁面各個區塊的標題，支援自定義標籤和井號前綴。
 *
 * @param className - 額外的 CSS 類名 {@link SectionTitleProps.className}。
 * @param as - 渲染標籤 {@link SectionTitleProps.as}。
 * @param isHash - 是否顯示井號 {@link SectionTitleProps.isHash}。
 * @param children - 標題內容 {@link SectionTitleProps.children}。
 */
const SectionTitle = ({ className, as: Component = 'h2', isHash = true, children }: SectionTitleProps) => {
    return (
        <Component className={cn('text-primary text-3xl font-bold tracking-tight lg:text-4xl', className)}>
            {isHash && <span className="mr-1">#</span>}
            {children}
        </Component>
    );
};

export default SectionTitle;
