import ArticleCard from '@/components/molecules/article-card';

const ArticleList = () => {
    return (
        <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((value) => {
                return (
                    <div key={value} className="flex justify-center border-b">
                        <ArticleCard />
                    </div>
                );
            })}
        </div>
    );
};

export default ArticleList;
