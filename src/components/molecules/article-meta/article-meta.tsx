import cn from '@/utils/cn';
import { DivPropsT } from '@/types/html';
import { DateFormatter } from '@/components/atoms/date';
import { NextLink } from '@/components/atoms/link';

interface ArticleMetaProps extends DivPropsT {
    date?: string;
    category?: string;
}

const ArticleMeta = ({ className, date, category, ...props }: ArticleMetaProps) => {
    const categoryLink = `/blog/${category?.toLowerCase()}`;

    return (
        <div className={cn('font-serif', 'space-x-3', 'dark:text-slate-400', className)} {...props}>
            <span>
                <DateFormatter dateString={date} />
            </span>
            <span>__</span>
            <span>
                <NextLink href={categoryLink}>{category}</NextLink>
            </span>
        </div>
    );
};

export default ArticleMeta;
