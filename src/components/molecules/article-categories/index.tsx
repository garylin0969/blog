import { BaseLink } from '@/components/atoms/link';
import { UlPropsT } from '@/interfaces/html';
import { articleCategoriesConfig } from '@/constants/blog';

const ArticleCategories = ({ className, ...props }: UlPropsT) => {
    return (
        <ul className={className} {...props}>
            {articleCategoriesConfig?.map((category) => (
                <li key={category?.value}>
                    <BaseLink href={`/blog?category=${category?.value}`}>{category?.label}</BaseLink>
                </li>
            ))}
        </ul>
    );
};

export default ArticleCategories;
