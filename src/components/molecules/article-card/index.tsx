import Image from 'next/image';
import cn from '@/utils/cn';
import { ArticlePropsT } from '@/interfaces/html';
import { Post } from '@/interfaces/post';
import { BaseLink } from '@/components/atoms/link';
import DateFormatter from '@/app/_components/date-formatter';

interface ArticleCardProps extends ArticlePropsT {
    post: Post;
}

const ArticleCard = ({ className, post, ...props }: ArticleCardProps) => {
    return (
        <article className={cn('p-5', className)} {...props}>
            <div className="flex gap-x-5">
                <div className={cn('w-3/4', 'space-y-2')}>
                    <BaseLink className={cn('inline-block', 'text-lg font-bold', 'md:text-2xl', 'dark:text-white')}>
                        <h2>{post?.title}</h2>
                    </BaseLink>
                    <div className={cn('font-serif', 'space-x-3')}>
                        <span>
                            <DateFormatter dateString={post?.date} />
                        </span>
                        <span>__</span>
                        <span>
                            <BaseLink>{post?.categorie}</BaseLink>
                        </span>
                    </div>
                    <h3 className="line-clamp-2 text-base/7" title={post?.excerpt}>
                        {post?.excerpt}
                    </h3>
                </div>
                <div className="w-1/4">
                    <Image
                        src={post?.coverImage}
                        className={cn('mx-auto object-cover', 'h-[53px] w-20', 'md:h-[107px] md:w-40')}
                        width={160}
                        height={107}
                        alt=""
                    />
                </div>
            </div>
        </article>
    );
};

export default ArticleCard;
