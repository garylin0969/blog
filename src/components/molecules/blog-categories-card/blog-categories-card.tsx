import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCategoryStats } from '@/utils/post';

/**
 * 部落格分類卡片元件。
 *
 * 顯示所有文章分類及其文章數量。
 * 點擊分類標籤可跳轉至該分類的文章列表頁面。
 */
const BlogCategoriesCard = () => {
    const categories = getCategoryStats();

    return (
        <Card className="gap-2">
            <CardHeader>
                <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
                {categories?.map((item) => (
                    <Link key={item?.category} href={`/blog/${item?.category?.toLowerCase()}/1`}>
                        <Badge variant="outline" className="hover:text-primary px-2 py-1">
                            {item?.category} {item?.count}
                        </Badge>
                    </Link>
                ))}
            </CardContent>
        </Card>
    );
};

export default BlogCategoriesCard;
