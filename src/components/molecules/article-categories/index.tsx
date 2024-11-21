import { NextLink } from '@/components/atoms/link';
import { UlPropsT } from '@/interfaces/html';
import { getAllCategories } from '@/utils/posts';

const ArticleCategories = ({ className, ...props }: UlPropsT) => {
    return (
        <ul className={className} {...props}>
            <li>
                <NextLink href="/blog/all">All</NextLink>
            </li>
            {getAllCategories()?.map((category) => (
                <li key={category}>
                    <NextLink href={`/blog/${category?.toLowerCase()}`}>{category}</NextLink>
                </li>
            ))}
        </ul>
    );
};

export default ArticleCategories;
