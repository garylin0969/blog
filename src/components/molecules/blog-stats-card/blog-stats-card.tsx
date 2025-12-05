import { Card, CardContent } from '@/components/ui/card';
import { BLOG_STATS_MAP } from '@/constants/blog-stats';
import { cn } from '@/utils/shadcn';

/**
 * 部落格統計卡片元件的屬性介面。
 */
interface BlogStatsCardProps {
    /** 額外的 CSS 類名。 */
    className?: string;
}

/**
 * 部落格統計卡片元件。
 *
 * 顯示文章總數、分類總數和標籤總數等統計資訊。
 *
 * @param className - 額外的 CSS 類名 {@link BlogStatsCardProps.className}。
 */
const BlogStatsCard = ({ className }: BlogStatsCardProps) => {
    return (
        <Card className={cn(className)}>
            <CardContent className="flex flex-row flex-wrap items-center justify-around">
                {BLOG_STATS_MAP.map((stats) => (
                    <div key={stats?.label} className="space-y-2 text-center text-sm">
                        <div className="font-bold">{stats?.count}</div>
                        <div className="font-medium">{stats?.label}</div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default BlogStatsCard;
