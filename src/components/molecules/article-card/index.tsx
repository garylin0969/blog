import Image from 'next/image';
import cn from '@/utils/cn';
import { ArticlePropsT } from '@/interfaces/html';
import { NextLink } from '@/components/atoms/link';
import { Post } from '@/interfaces/post';
import { DateFormatter } from '@/components/atoms/date';

interface ArticleCardProps extends ArticlePropsT {
    post: Post;
}

const ArticleCard = ({ className, post, ...props }: ArticleCardProps) => {
    const { category, slug, title, date, excerpt, coverImage } = post;

    const postLink = `/blog/post/${slug}`;
    const categoryLink = `/blog/${category?.toLowerCase()}`;

    return (
        <article className={cn('p-5', className)} {...props}>
            <div className="flex gap-x-5">
                <div className={cn('w-3/4', 'space-y-2')}>
                    <NextLink
                        href={postLink}
                        className={cn('inline-block', 'text-lg font-bold', 'md:text-2xl', 'dark:text-white')}
                    >
                        <h2>{title}</h2>
                    </NextLink>
                    <div className={cn('font-serif', 'space-x-3')}>
                        <span>
                            <DateFormatter dateString={date} />
                        </span>
                        <span>__</span>
                        <span>
                            <NextLink href={categoryLink}>{category}</NextLink>
                        </span>
                    </div>
                    <h3 className="line-clamp-2 text-base/7" title={excerpt}>
                        {excerpt}
                    </h3>
                </div>
                <div className="w-1/4">
                    <Image
                        src={coverImage}
                        className={cn('mx-auto object-cover', 'h-[53px] w-20', 'md:h-[107px] md:w-40')}
                        width={160}
                        height={107}
                        alt={title}
                    />
                </div>
            </div>
        </article>
    );
};

export default ArticleCard;
