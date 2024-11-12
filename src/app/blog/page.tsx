import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import InfoCard from '@/components/molecules/info-card';
import DividerTitle from '@/components/molecules/divider-title';

const Blog = () => {
    return (
        <Container className="flex h-full">
            <div className="h-full flex-grow"></div>
            <aside className="h-full w-[368px] border-l px-6">
                <InfoCard className="mt-10" />
                <DividerTitle title="文章分類" className="my-5 md:text-2xl" />
            </aside>
        </Container>
    );
};

export default Blog;
