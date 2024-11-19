import ArticleCard from '@/components/molecules/article-card';
import { Post } from '@/interfaces/post';

interface ArticleListProps {
    posts: Post[];
}

const ArticleList = ({ posts }: ArticleListProps) => {
    return (
        <div>
            {posts?.map((post) => {
                return (
                    <div key={post?.title} className="flex justify-center border-b">
                        <ArticleCard className="w-full" post={post} />
                    </div>
                );
            })}
        </div>
    );
};

export default ArticleList;
