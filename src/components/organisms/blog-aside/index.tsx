import cn from '@/utils/cn';
import InfoCard from '@/components/molecules/info-card';
import DividerTitle from '@/components/molecules/divider-title';
import ArticleCategories from '@/components/molecules/article-categories';
import { AsidePropsT } from '@/interfaces/html';

const BlogAside = ({ className, ...props }: AsidePropsT) => {
    return (
        <aside className={cn('hidden flex-col md:flex', className)} {...props}>
            <InfoCard className="mt-8" />
            <DividerTitle align="center" title="文章分類" className="my-5 md:text-xl" />
            <div className="flex-grow overflow-y-scroll">
                <ArticleCategories className="space-y-3 text-center" />
            </div>
        </aside>
    );
};

export default BlogAside;
