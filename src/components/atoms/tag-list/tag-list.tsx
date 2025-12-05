import { Badge } from '@/components/ui/badge';

/**
 * 標籤列表元件的屬性介面。
 */
interface TagListProps {
    /** 標籤陣列。 */
    tags: string[];
    /** 最多顯示的標籤數量 (預設為 3)。 */
    maxVisible?: number;
}

/**
 * 標籤列表元件。
 *
 * 顯示一組標籤，支援限制顯示數量。
 *
 * @param tags - 標籤陣列 {@link TagListProps.tags}。
 * @param maxVisible - 最多顯示數量 {@link TagListProps.maxVisible}。
 */
export const TagList = ({ tags, maxVisible = 3 }: TagListProps) => {
    if (!tags || tags.length === 0) {
        return null;
    }

    const visibleTags = tags.slice(0, maxVisible);
    const remainingCount = tags.length - maxVisible;

    return (
        <div className="flex flex-wrap items-center gap-2">
            {visibleTags.map((tag) => (
                <Badge key={tag} className="px-2 py-1 text-xs">
                    {tag}
                </Badge>
            ))}
            {remainingCount > 0 && <span className="text-muted-foreground text-xs">+{remainingCount} more</span>}
        </div>
    );
};
