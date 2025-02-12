import cn from '@/utils/cn';
import { ArticlePropsT } from '@/interfaces/html';
import { Post } from '@/interfaces/post';
import { NextLink } from '@/components/atoms/link';
import ArticleMeta from '@/components/molecules/article-meta';

interface ArticleCardProps extends ArticlePropsT {
    post: Post;
}

const ArticleCard = ({ className, post, ...props }: ArticleCardProps) => {
    const { category, title = '', date = '', description, coverImage = '', url } = post;

    const postLink = `/blog/posts${url}`;

    return (
        <article className={cn('p-5', className)} {...props}>
            <div className={cn('space-y-2')}>
                <NextLink
                    href={postLink}
                    className={cn('inline-block', 'text-lg font-bold', 'md:text-2xl', 'dark:text-white')}
                >
                    <h2>{title}</h2>
                </NextLink>
                <ArticleMeta date={date} category={category} />
                <h3 className="line-clamp-2 text-base/7" title={description}>
                    {description}
                </h3>
            </div>
        </article>
    );
};

export default ArticleCard;
