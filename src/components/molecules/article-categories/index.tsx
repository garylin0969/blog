import { NextLink } from '@/components/atoms/link';
import { UlPropsT } from '@/interfaces/html';
import { articleCategoriesConfig } from '@/constants/blog';

const ArticleCategories = ({ className, ...props }: UlPropsT) => {
    return (
        <ul className={className} {...props}>
            {articleCategoriesConfig?.map((category) => (
                <li key={category?.value}>
                    <NextLink href={`/blog/${category?.value}`}>{category?.label}</NextLink>
                </li>
            ))}
        </ul>
    );
};

export default ArticleCategories;
